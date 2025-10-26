import { Calendar, User, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Blog() {
  const blogPosts = [
    {
      title: "The Benefits of Cold-Process Soap",
      excerpt:
        "Discover why traditional cold-process soap making creates the most nourishing bars for your skin.",
      date: "March 15, 2024",
      author: "Remnant's Bloom Team",
      image: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663031533487/vromwTbvBHqokayT.png",
    },
    {
      title: "Essential Oils vs. Fragrance Oils: What's the Difference?",
      excerpt:
        "Learn about the differences between essential oils and fragrance oils, and how we choose what goes into our products.",
      date: "March 10, 2024",
      author: "Remnant's Bloom Team",
      image: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663031533487/ElSUQbolSZKIhifo.png",
    },
    {
      title: "How to Make Your Handmade Soap Last Longer",
      excerpt:
        "Simple tips and tricks to extend the life of your artisan soap bars and get the most value from each purchase.",
      date: "March 5, 2024",
      author: "Remnant's Bloom Team",
      image: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663031533487/bBHxXZiluFEWYuDy.png",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-12">
        <div className="container">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Blog</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Tips, stories, and insights about natural skincare, handcrafted soaps, and living
              with intention.
            </p>
          </div>

          {/* Blog Posts */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {blogPosts.map((post, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video overflow-hidden bg-gradient-to-r from-mint/10 via-cream/10 to-lavender/10">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="h-3 w-3" />
                      <span>{post.author}</span>
                    </div>
                  </div>

                  <h3 className="font-semibold text-xl mb-3 line-clamp-2">{post.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <Button variant="link" className="p-0 h-auto text-primary">
                    Read More
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Coming Soon Notice */}
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-2">More Content Coming Soon!</h2>
            <p className="text-muted-foreground mb-6">
              We're working on bringing you more helpful articles, tutorials, and stories about
              natural skincare and sustainable living.
            </p>
            <Button className="bg-primary hover:bg-primary/90">
              Subscribe to Our Newsletter
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

