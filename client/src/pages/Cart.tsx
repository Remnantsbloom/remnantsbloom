import { Link } from "wouter";
import { Trash2, Plus, Minus, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { trpc } from "@/lib/trpc";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { toast } from "sonner";

export default function Cart() {
  const { data: cartItems, isLoading } = trpc.cart.get.useQuery();
  const utils = trpc.useUtils();

  const updateQuantity = trpc.cart.updateQuantity.useMutation({
    onSuccess: () => {
      utils.cart.get.invalidate();
    },
    onError: () => {
      toast.error("Failed to update quantity");
    },
  });

  const removeItem = trpc.cart.remove.useMutation({
    onSuccess: () => {
      utils.cart.get.invalidate();
      toast.success("Removed from cart");
    },
    onError: () => {
      toast.error("Failed to remove item");
    },
  });

  const clearCart = trpc.cart.clear.useMutation({
    onSuccess: () => {
      utils.cart.get.invalidate();
      toast.success("Cart cleared");
    },
    onError: () => {
      toast.error("Failed to clear cart");
    },
  });

  const subtotal = cartItems?.reduce((sum, item) => {
    const price = item.product?.price || 0;
    const quantity = item.quantity || 0;
    return sum + price * quantity;
  }, 0) || 0;

  const shipping = subtotal > 5000 ? 0 : 599; // Free shipping over $50
  const tax = Math.round(subtotal * 0.07); // 7% tax
  const total = subtotal + shipping + tax;

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 py-12">
          <div className="container">
            <div className="animate-pulse space-y-4">
              <div className="h-8 bg-muted rounded w-1/4" />
              <div className="h-32 bg-muted rounded" />
              <div className="h-32 bg-muted rounded" />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!cartItems || cartItems.length === 0) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 py-12">
          <div className="container">
            <div className="text-center py-16">
              <ShoppingBag className="h-24 w-24 mx-auto text-muted-foreground mb-6" />
              <h1 className="text-3xl font-bold mb-4">Your Cart is Empty</h1>
              <p className="text-muted-foreground mb-8">
                Looks like you haven't added any products to your cart yet.
              </p>
              <Link href="/shop">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Continue Shopping
                </Button>
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-12">
        <div className="container">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl md:text-4xl font-bold">Shopping Cart</h1>
            <Button variant="outline" onClick={() => clearCart.mutate()}>
              Clear Cart
            </Button>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => {
                const product = item.product;
                if (!product) return null;

                const priceInDollars = (product.price / 100).toFixed(2);
                const itemTotal = ((product.price * (item.quantity || 0)) / 100).toFixed(2);

                let configDisplay = null;
                if (item.configuration) {
                  try {
                    const config = JSON.parse(item.configuration);
                    if (config.selections) {
                      configDisplay = (
                        <div className="text-xs text-muted-foreground mt-1">
                          Selections: {config.selections.join(", ")}
                        </div>
                      );
                    } else if (config.soap || config.bodyCream || config.bodyScrub) {
                      configDisplay = (
                        <div className="text-xs text-muted-foreground mt-1">
                          {config.soap && <div>Soap: {config.soap}</div>}
                          {config.bodyCream && <div>Body Cream: {config.bodyCream}</div>}
                          {config.bodyScrub && <div>Body Scrub: {config.bodyScrub}</div>}
                        </div>
                      );
                    }
                  } catch (e) {
                    // Invalid JSON, ignore
                  }
                }

                return (
                  <Card key={item.id}>
                    <CardContent className="p-4">
                      <div className="flex gap-4">
                        <div className="w-24 h-24 flex-shrink-0 bg-muted rounded overflow-hidden">
                          <img
                            src={product.imageUrl || "https://placehold.co/200x200/E5E7EB/6B7280?text=No+Image"}
                            alt={product.name}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        <div className="flex-1">
                          <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
                          <p className="text-sm text-muted-foreground mb-2">
                            ${priceInDollars} each
                          </p>
                          {configDisplay}

                          <div className="flex items-center gap-3 mt-3">
                            <div className="flex items-center gap-2 border border-border rounded">
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8"
                                onClick={() =>
                                  updateQuantity.mutate({
                                    id: item.id,
                                    quantity: Math.max(1, (item.quantity || 1) - 1),
                                  })
                                }
                              >
                                <Minus className="h-4 w-4" />
                              </Button>
                              <span className="text-sm font-medium w-8 text-center">
                                {item.quantity}
                              </span>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8"
                                onClick={() =>
                                  updateQuantity.mutate({
                                    id: item.id,
                                    quantity: (item.quantity || 1) + 1,
                                  })
                                }
                              >
                                <Plus className="h-4 w-4" />
                              </Button>
                            </div>

                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8 text-destructive hover:text-destructive"
                              onClick={() => removeItem.mutate({ id: item.id })}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>

                        <div className="text-right">
                          <p className="font-semibold text-lg">${itemTotal}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardContent className="p-6">
                  <h2 className="font-semibold text-xl mb-6">Order Summary</h2>

                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span className="font-medium">${(subtotal / 100).toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Shipping</span>
                      <span className="font-medium">
                        {shipping === 0 ? "FREE" : `$${(shipping / 100).toFixed(2)}`}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Tax (estimated)</span>
                      <span className="font-medium">${(tax / 100).toFixed(2)}</span>
                    </div>
                    <div className="border-t border-border pt-3">
                      <div className="flex justify-between">
                        <span className="font-semibold text-lg">Total</span>
                        <span className="font-bold text-xl text-primary">
                          ${(total / 100).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>

                  {shipping > 0 && (
                    <div className="bg-muted p-3 rounded-lg mb-6 text-sm text-center">
                      Add ${((5000 - subtotal) / 100).toFixed(2)} more for free shipping!
                    </div>
                  )}

                  <Button
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/90 mb-3"
                    onClick={() => toast.info("Checkout coming soon!")}
                  >
                    Proceed to Checkout
                  </Button>

                  <Link href="/shop">
                    <Button variant="outline" size="lg" className="w-full">
                      Continue Shopping
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

