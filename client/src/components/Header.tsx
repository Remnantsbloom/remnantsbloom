import { Link } from "wouter";
import { ShoppingCart, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { trpc } from "@/lib/trpc";
import { APP_LOGO } from "@/const";

export default function Header() {
  const { data: cartItems } = trpc.cart.get.useQuery();
  const cartCount = cartItems?.reduce((sum, item) => sum + (item.quantity || 0), 0) || 0;

  const navItems = [
    { label: "Home", path: "/", color: "bg-blue-500 hover:bg-blue-600" },
    { label: "Shop", path: "/shop", color: "bg-yellow-500 hover:bg-yellow-600" },
    { label: "Our Story", path: "/about", color: "bg-purple-500 hover:bg-purple-600" },
    { label: "Blog", path: "/blog", color: "bg-teal-500 hover:bg-teal-600" },
    { label: "FAQ", path: "/faq", color: "bg-pink-500 hover:bg-pink-600" },
    { label: "Contact", path: "/contact", color: "bg-purple-600 hover:bg-purple-700" },
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
                  className={`${item.color} text-white font-medium`}
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
                className={`${item.color} text-white font-medium text-xs`}
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

