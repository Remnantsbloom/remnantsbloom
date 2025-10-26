import { Link } from "wouter";
import { Leaf, Heart, Recycle, Award, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { trpc } from "@/lib/trpc";
import ProductCard from "@/components/ProductCard";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BRAND_INFO } from "@/const";

export default function Home() {
  const { data: featuredProducts, isLoading } = trpc.products.featured.useQuery();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="gradient-bg py-8 md:py-16">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-primary font-medium mb-4 flex items-center gap-2">
                  <Leaf className="h-5 w-5" />
                  Handcrafted with Love
                </p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Handcrafted Soaps{" "}
                  <span className="text-primary">Bloom with Nature</span>
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  {BRAND_INFO.heroBlurb}
                </p>
                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="flex items-center gap-2 text-sm">
                    <Leaf className="h-4 w-4 text-green-600" />
                    <span>100% Natural</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Heart className="h-4 w-4 text-pink-600" />
                    <span>Sensitive Skin Safe</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Award className="h-4 w-4 text-yellow-600" />
                    <span>Small Batch Artisan</span>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Link href="/shop">
                    <Button size="lg" className="bg-primary hover:bg-primary/90">
                      Shop Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/about">
                    <Button size="lg" className="bg-primary hover:bg-primary/90">
                      Our Story
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/hero.png"
                  alt="Handcrafted soaps with natural ingredients"
                  className="rounded-lg shadow-2xl w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="text-center mb-12">
              <p className="text-primary font-semibold uppercase tracking-wider mb-2">
                FEATURED PRODUCTS
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Most Loved Products</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Handcrafted with the finest natural ingredients, these customer favorites deliver
                exceptional quality and delightful fragrances.
              </p>
            </div>

            {isLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="h-96 bg-muted animate-pulse rounded-lg" />
                ))}
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
                  {featuredProducts?.slice(0, 6).map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
                <div className="text-center">
                  <Link href="/shop">
                    <Button size="lg" variant="outline">
                      View All Products
                    </Button>
                  </Link>
                </div>
              </>
            )}
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-16 gradient-bg">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-primary font-semibold uppercase tracking-wider mb-2">
                  OUR STORY
                </p>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Crafted with Passion, Made with Love
                </h2>
                <p className="text-muted-foreground mb-4">
                  At Remnant's Bloom, we believe that what you put on your skin matters as much as
                  what you put in your body. Our journey began with a simple mission: to create the
                  purest, most nourishing soaps using traditional cold-press methods that preserve
                  the natural benefits of every ingredient.
                </p>
                <p className="text-muted-foreground mb-6">
                  Every bar is handcrafted in small batches, ensuring quality and attention to
                  detail. We source our ingredients ethically and sustainably, supporting both your
                  skin's health and our planet's wellbeing.
                </p>
                <Link href="/about">
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    Learn More About Our Process
                  </Button>
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <Leaf className="h-8 w-8 text-green-600 mb-3" />
                  <h3 className="font-semibold mb-2">Natural Ingredients</h3>
                  <p className="text-sm text-muted-foreground">
                    We use only the finest organic, ethically sourced oils and botanicals in every
                    bar.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <Heart className="h-8 w-8 text-pink-600 mb-3" />
                  <h3 className="font-semibold mb-2">Sensitive Skin Safe</h3>
                  <p className="text-sm text-muted-foreground">
                    Our gentle formulas are perfect for sensitive skin, retaining natural glycerin
                    for extra moisture.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <Recycle className="h-8 w-8 text-green-600 mb-3" />
                  <h3 className="font-semibold mb-2">Eco-Friendly</h3>
                  <p className="text-sm text-muted-foreground">
                    Committed to sustainable practices with eco-friendly packaging and low-waste
                    production.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <Award className="h-8 w-8 text-yellow-600 mb-3" />
                  <h3 className="font-semibold mb-2">Artisan Quality</h3>
                  <p className="text-sm text-muted-foreground">
                    Small-batch production ensures every soap meets our highest standards of quality
                    and craftsmanship.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <img
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663031533487/ElSUQbolSZKIhifo.png"
                  alt="Woman enjoying handcrafted soap collection"
                  className="rounded-lg shadow-xl w-full"
                />
                <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-lg shadow-xl hidden md:block">
                  <p className="text-sm font-medium">Handcrafted Collection</p>
                </div>
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Experience the Difference</h2>
                <p className="text-muted-foreground mb-6">
                  Our customers love the luxurious feel and natural benefits of our handcrafted
                  soaps. Each bar is carefully formulated to provide the perfect balance of
                  cleansing and moisturizing, leaving your skin soft, smooth, and naturally radiant.
                </p>
                <div className="bg-muted p-6 rounded-lg mb-6">
                  <h3 className="font-semibold mb-4">What Makes Us Special:</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Cold-press method preserves natural glycerin</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>6-8 week curing process for optimal quality</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Ethically sourced, organic ingredients</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Perfect for all skin types, especially sensitive</span>
                    </li>
                  </ul>
                </div>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-4xl font-bold text-primary">100%</div>
                    <div className="text-sm text-muted-foreground">Natural Ingredients</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-primary">500+</div>
                    <div className="text-sm text-muted-foreground">Happy Customers</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 gradient-bg">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Community</h2>
              <p className="text-muted-foreground mb-8">
                Subscribe to our newsletter and be the first to know about new products, exclusive
                offers, and skincare tips from our artisan soap makers.
              </p>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="flex-1 px-4 py-3 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <Button size="lg" className="bg-primary hover:bg-primary/90">
                      Subscribe & Save 10%
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    We respect your privacy. Unsubscribe at any time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

