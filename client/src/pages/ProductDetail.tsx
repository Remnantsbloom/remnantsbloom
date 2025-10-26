import { useState, useEffect } from "react";
import { useRoute } from "wouter";
import { Star, ShoppingCart, Check, Leaf, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { trpc } from "@/lib/trpc";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { toast } from "sonner";

export default function ProductDetail() {
  const [, params] = useRoute("/product/:id");
  const productId = params?.id ? parseInt(params.id) : 0;

  const { data: product, isLoading } = trpc.products.byId.useQuery({ id: productId });
  const { data: allProducts } = trpc.products.list.useQuery();
  
  const utils = trpc.useUtils();
  const addToCart = trpc.cart.add.useMutation({
    onSuccess: () => {
      utils.cart.get.invalidate();
      toast.success("Added to cart!");
    },
    onError: () => {
      toast.error("Failed to add to cart");
    },
  });

  const [quantity, setQuantity] = useState(1);
  const [configuration, setConfiguration] = useState<any>({});

  // Get available soaps for variety packs
  const soapProducts = allProducts?.filter((p) => p.type === "Soap" && !p.name.includes("Pack")) || [];
  
  // Get available products for gift set
  const bodyCreams = allProducts?.filter((p) => p.type === "Body Cream") || [];
  const bodyScrubs = allProducts?.filter((p) => p.type === "Body Scrub") || [];

  useEffect(() => {
    if (product?.configurable) {
      // Initialize configuration based on product type
      if (product.name.includes("Variety 5 Soap Pack")) {
        setConfiguration({
          selections: Array(5).fill(""),
        });
      } else if (product.name.includes("Variety 10 Soap Pack")) {
        setConfiguration({
          selections: Array(10).fill(""),
        });
      } else if (product.name.includes("Complete Body Care Gift Set")) {
        setConfiguration({
          soap: "",
          bodyCream: "",
          bodyScrub: "",
        });
      }
    }
  }, [product]);

  const handleAddToCart = () => {
    if (!product) return;

    // Validate configuration for configurable products
    if (product.configurable) {
      if (product.name.includes("Variety") && product.name.includes("Soap Pack")) {
        const allSelected = configuration.selections?.every((s: string) => s !== "");
        if (!allSelected && !configuration.selections?.includes("Random")) {
          toast.error("Please select all soaps or choose Random");
          return;
        }
      } else if (product.name.includes("Complete Body Care Gift Set")) {
        if (!configuration.soap || !configuration.bodyCream || !configuration.bodyScrub) {
          toast.error("Please select all items for the gift set");
          return;
        }
      }
    }

    addToCart.mutate({
      productId: product.id,
      quantity,
      configuration: product.configurable ? JSON.stringify(configuration) : undefined,
    });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 py-12">
          <div className="container">
            <div className="animate-pulse">
              <div className="h-96 bg-muted rounded-lg mb-8" />
              <div className="h-8 bg-muted rounded w-1/2 mb-4" />
              <div className="h-4 bg-muted rounded w-3/4" />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 py-12">
          <div className="container text-center">
            <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
            <Button onClick={() => (window.location.href = "/shop")}>Back to Shop</Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const priceInDollars = (product.price / 100).toFixed(2);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-12">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            {/* Product Image */}
            <div>
              <div className="aspect-square overflow-hidden rounded-lg bg-muted border-2 border-border">
                <img
                  src={product.imageUrl || "https://placehold.co/600x600/E5E7EB/6B7280?text=No+Image"}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Product Info */}
            <div>
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="text-sm text-muted-foreground ml-2">(127 reviews)</span>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold mb-4">{product.name}</h1>

              <div className="flex items-center gap-4 mb-6">
                <span className="text-4xl font-bold text-primary">${priceInDollars}</span>
                {product.scentProfile && (
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    {product.scentProfile}
                  </span>
                )}
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">{product.description}</p>

              {product.size && (
                <div className="mb-6">
                  <span className="font-semibold">Size:</span> {product.size}
                </div>
              )}

              {product.ingredients && (
                <div className="mb-6">
                  <span className="font-semibold">Ingredients:</span>
                  <p className="text-sm text-muted-foreground mt-1">{product.ingredients}</p>
                </div>
              )}

              {/* Configuration Options */}
              {product.configurable && product.name.includes("Variety 5 Soap Pack") && (
                <Card className="mb-6">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-4">Select Your 5 Soaps</h3>
                    <div className="space-y-3">
                      {configuration.selections?.map((selection: string, index: number) => (
                        <div key={index}>
                          <label className="text-sm font-medium mb-1 block">Soap {index + 1}</label>
                          <Select
                            value={selection}
                            onValueChange={(value) => {
                              const newSelections = [...configuration.selections];
                              newSelections[index] = value;
                              setConfiguration({ selections: newSelections });
                            }}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Choose a soap" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="Random">Random (Let us choose!)</SelectItem>
                              {soapProducts.map((soap) => (
                                <SelectItem key={soap.id} value={soap.name}>
                                  {soap.name}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              {product.configurable && product.name.includes("Variety 10 Soap Pack") && (
                <Card className="mb-6">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-4">Select Your 10 Soaps</h3>
                    <div className="space-y-3">
                      {configuration.selections?.map((selection: string, index: number) => (
                        <div key={index}>
                          <label className="text-sm font-medium mb-1 block">Soap {index + 1}</label>
                          <Select
                            value={selection}
                            onValueChange={(value) => {
                              const newSelections = [...configuration.selections];
                              newSelections[index] = value;
                              setConfiguration({ selections: newSelections });
                            }}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Choose a soap" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="Random">Random (Let us choose!)</SelectItem>
                              {soapProducts.map((soap) => (
                                <SelectItem key={soap.id} value={soap.name}>
                                  {soap.name}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              {product.configurable && product.name.includes("Complete Body Care Gift Set") && (
                <Card className="mb-6">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-4">Customize Your Gift Set</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="text-sm font-medium mb-1 block">Select Soap</label>
                        <Select
                          value={configuration.soap}
                          onValueChange={(value) =>
                            setConfiguration({ ...configuration, soap: value })
                          }
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Choose a soap" />
                          </SelectTrigger>
                          <SelectContent>
                            {soapProducts.map((soap) => (
                              <SelectItem key={soap.id} value={soap.name}>
                                {soap.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <label className="text-sm font-medium mb-1 block">Select Body Cream</label>
                        <Select
                          value={configuration.bodyCream}
                          onValueChange={(value) =>
                            setConfiguration({ ...configuration, bodyCream: value })
                          }
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Choose a body cream" />
                          </SelectTrigger>
                          <SelectContent>
                            {bodyCreams.map((cream) => (
                              <SelectItem key={cream.id} value={cream.name}>
                                {cream.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <label className="text-sm font-medium mb-1 block">Select Body Scrub</label>
                        <Select
                          value={configuration.bodyScrub}
                          onValueChange={(value) =>
                            setConfiguration({ ...configuration, bodyScrub: value })
                          }
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Choose a body scrub" />
                          </SelectTrigger>
                          <SelectContent>
                            {bodyScrubs.map((scrub) => (
                              <SelectItem key={scrub.id} value={scrub.name}>
                                {scrub.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Quantity */}
              <div className="mb-6">
                <label className="text-sm font-medium mb-2 block">Quantity</label>
                <div className="flex items-center gap-3">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    -
                  </Button>
                  <span className="text-lg font-semibold w-12 text-center">{quantity}</span>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    +
                  </Button>
                </div>
              </div>

              {/* Add to Cart */}
              <Button
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-lg"
                onClick={handleAddToCart}
                disabled={addToCart.isPending}
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                Add to Cart
              </Button>

              {/* Product Benefits */}
              <div className="mt-8 space-y-3">
                <div className="flex items-center gap-3 text-sm">
                  <Check className="h-5 w-5 text-green-600" />
                  <span>Handcrafted in small batches</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Leaf className="h-5 w-5 text-green-600" />
                  <span>100% natural ingredients</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Heart className="h-5 w-5 text-pink-600" />
                  <span>Perfect for sensitive skin</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

