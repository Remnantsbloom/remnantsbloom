import { Heart, Leaf, Award, Users } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BRAND_INFO } from "@/const";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="gradient-bg py-16">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Story</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                {BRAND_INFO.tagline}
              </p>
            </div>
          </div>
        </section>

        {/* Main Story */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <img
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663031533487/kFrUkmuKbkQkUSSr.png"
                  alt="Handcrafted soap making process"
                  className="rounded-lg shadow-xl w-full"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6">Handcrafted with Love</h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {BRAND_INFO.heroBlurb}
                </p>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  At Remnant's Bloom, we believe that what you put on your skin matters as much as
                  what you put in your body. Our journey began with a simple mission: to create the
                  purest, most nourishing soaps using traditional cold-press methods that preserve
                  the natural benefits of every ingredient.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Every bar is handcrafted in small batches in Colonial Heights, Virginia, ensuring
                  quality and attention to detail. We source our ingredients ethically and
                  sustainably, supporting both your skin's health and our planet's wellbeing.
                </p>
              </div>
            </div>

            {/* Mission & Vision */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Heart className="h-6 w-6 text-primary" />
                  Our Mission
                </h3>
                <p className="text-muted-foreground leading-relaxed">{BRAND_INFO.mission}</p>
              </div>
              <div className="bg-gradient-to-br from-accent/10 to-primary/10 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Leaf className="h-6 w-6 text-green-600" />
                  Our Vision
                </h3>
                <p className="text-muted-foreground leading-relaxed">{BRAND_INFO.vision}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 gradient-bg">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Stand For</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our values guide everything we do, from ingredient selection to customer care.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Natural Ingredients</h3>
                <p className="text-sm text-muted-foreground">
                  We use only the finest organic, ethically sourced oils and botanicals in every
                  bar.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-pink-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Sensitive Skin Safe</h3>
                <p className="text-sm text-muted-foreground">
                  Our gentle formulas are perfect for sensitive skin, retaining natural glycerin for
                  extra moisture.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Artisan Quality</h3>
                <p className="text-sm text-muted-foreground">
                  Small-batch production ensures every soap meets our highest standards of quality
                  and craftsmanship.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Faith & Community</h3>
                <p className="text-sm text-muted-foreground">
                  Rooted in faith and inspired by renewal, we believe in growth, grace, and honest
                  living.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The Process */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Our Cold-Process Method
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Ingredient Selection</h3>
                    <p className="text-muted-foreground">
                      We carefully select the finest natural oils, butters, and essential oils,
                      ensuring each ingredient meets our high standards for purity and
                      sustainability.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Handcrafted Blending</h3>
                    <p className="text-muted-foreground">
                      Using the traditional cold-process method, we blend our ingredients by hand in
                      small batches, preserving the natural glycerin that makes our soaps so
                      moisturizing.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Curing & Quality Control</h3>
                    <p className="text-muted-foreground">
                      Each batch cures for 4–6 weeks, allowing the soap to harden and develop its
                      full, rich lather. We inspect every bar to ensure it meets our standards
                      before packaging.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Packaged with Care</h3>
                    <p className="text-muted-foreground">
                      We wrap each bar in eco-friendly packaging, ready to bring natural beauty and
                      gentle care to your daily routine.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Meaning Behind the Name */}
        <section className="py-16 gradient-bg">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                The Meaning Behind "Remnant's Bloom"
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Our name reflects our faith and philosophy: even what remains after hardship can
                bloom again. Inspired by Psalm 37:3 — "Trust in the Lord and do good," we believe
                in growth, renewal, and grace through simple, honest living.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Just as a remnant can flourish into something beautiful, we believe that every
                person deserves products that honor their skin, their values, and their story.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

