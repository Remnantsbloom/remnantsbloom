import { Link } from "wouter";
import { ShoppingCart, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { trpc } from "@/lib/trpc";
import { APP_LOGO } from "@/const";

export default function Header() {
  const { data: cartItems } = trpc.cart.get.useQuery();
  const cartCount = cartItems?.reduce((sum, item) => sum + (item.quantity || 0), 0) || 0;

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Shop", path: "/shop" },
    { label: "Our Story", path: "/about" },
    { label: "Blog", path: "/blog" },
    { label: "FAQ", path: "/faq" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <header className="bg-white border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="container">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <img src={APP_LOGO} alt="Remnant's Bloom" className="h-12 w-auto" />
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-['Dancing_Script'] font-semibold text-foreground">
                  Remnant's
                </span>
                <span className="text-2xl font-bold text-foreground">BLOOM</span>
              </div>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <Button
                  variant="default"
                  size="sm"
                  className="bg-black hover:bg-gray-800 text-white font-medium"
                >
                  {item.label}
                </Button>
              </Link>
            ))}
          </nav>

          {/* Right side icons */}
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Search className="h-5 w-5" />
            </Button>
            <Link href="/cart">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Button>
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        <nav className="md:hidden flex flex-wrap gap-2 pb-4">
          {navItems.map((item) => (
            <Link key={item.path} href={item.path}>
              <Button
                variant="default"
                size="sm"
                className="bg-black hover:bg-gray-800 text-white font-medium text-xs"
              >
                {item.label}
              </Button>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

