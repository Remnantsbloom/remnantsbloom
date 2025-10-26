import { Link } from "wouter";
import { Star, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number; // in cents
  imageUrl: string | null;
  scentProfile: string | null;
  size: string | null;
  configurable: number;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
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

  const handleAddToCart = () => {
    if (product.configurable) {
      // Redirect to product detail page for configuration
      window.location.href = `/product/${product.id}`;
    } else {
      addToCart.mutate({
        productId: product.id,
        quantity: 1,
      });
    }
  };

  const priceInDollars = (product.price / 100).toFixed(2);

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 border-2 hover:border-primary/50">
      <div className="aspect-square overflow-hidden bg-muted">
        <img
          src={product.imageUrl || "https://placehold.co/400x400/E5E7EB/6B7280?text=No+Image"}
          alt={product.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardContent className="p-4">
        <div className="flex items-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
        
        <h3 className="font-semibold text-lg mb-2 line-clamp-2">{product.name}</h3>
        
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center justify-between mb-4">
          {product.scentProfile && (
            <span className="text-xs font-medium text-primary px-2 py-1 bg-primary/10 rounded">
              {product.scentProfile}
            </span>
          )}
          <span className="text-xl font-bold">${priceInDollars}</span>
        </div>

        <div className="flex gap-2">
          <Button
            onClick={handleAddToCart}
            disabled={addToCart.isPending}
            className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>
          <Link href={`/product/${product.id}`}>
            <Button variant="outline" size="default">
              View Details
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}

