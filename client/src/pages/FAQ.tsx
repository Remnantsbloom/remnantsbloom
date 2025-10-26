import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function FAQ() {
  const faqs = [
    {
      category: "Products",
      questions: [
        {
          q: "What makes Remnant's Bloom products different?",
          a: "Each product is handcrafted in small batches in Colonial Heights, Virginia. We use natural, gentle ingredients — like shea butter, olive oil, coconut oil, and jojoba oil — carefully blended to nourish sensitive skin. Our soaps and body care items are made with integrity, rooted in faith, and designed to remind you that what remains can still bloom.",
        },
        {
          q: "Are your soaps and creams suitable for sensitive skin?",
          a: "Yes! Every formula is designed for sensitive skin and made without harsh detergents, parabens, or synthetic dyes. We use natural oils, butters, and essential oils that cleanse and hydrate gently.",
        },
        {
          q: "Are your products vegan or cruelty-free?",
          a: "Most of our products are vegan, except those containing goat's milk or honey. All ingredients are clearly listed on each label. None of our products are ever tested on animals.",
        },
        {
          q: "What is cold-process soap, and why is it special?",
          a: "Cold-process soap is made the traditional way — by hand, from scratch. This method retains natural glycerin for a creamy, skin-loving lather. Each batch cures for 4–6 weeks for quality and longevity.",
        },
        {
          q: "How long do your soaps last?",
          a: "Each bar typically lasts 3–4 weeks with regular use. Keeping your soap on a draining dish and allowing it to dry between uses will make it last even longer.",
        },
        {
          q: "How should I store my soap and creams?",
          a: "Store them in a cool, dry place away from direct sunlight. For long-term storage, keep soaps wrapped until ready to use to preserve scent and quality.",
        },
        {
          q: "Do your products contain artificial fragrances or colors?",
          a: "We primarily use essential oils and botanicals. Occasionally, we use a skin-safe fragrance oil for a specific scent — it will always be noted on the label.",
        },
        {
          q: "Do you take custom or bulk orders (for weddings or gifts)?",
          a: "Yes! We love custom and bulk orders. Email hello@remnantsbloom.com or use our Contact Page to share your ideas, quantities, and event dates.",
        },
        {
          q: "What is the meaning behind \"Remnant's Bloom\"?",
          a: "Our name reflects our faith and philosophy: even what remains after hardship can bloom again. Inspired by Psalm 37:3 — \"Trust in the Lord and do good,\" we believe in growth, renewal, and grace through simple, honest living.",
        },
      ],
    },
    {
      category: "Shipping & Returns",
      questions: [
        {
          q: "What are your shipping options?",
          a: "We currently ship within the United States using USPS or UPS. Most orders are processed within 3–5 business days and delivered within 5–10 business days, depending on your location. Tracking details are provided via email once your order ships.",
        },
        {
          q: "How much is shipping?",
          a: "Shipping rates are calculated at checkout based on weight and destination. Occasionally, we offer free or discounted shipping promotions — sign up for our newsletter to be notified first!",
        },
        {
          q: "Do you offer local pickup or delivery?",
          a: "Yes, local pickup in the Colonial Heights, VA area is available for select events and orders. When available, you'll see that option at checkout.",
        },
        {
          q: "What if my package is delayed or lost?",
          a: "If tracking shows a delay or your package hasn't arrived within the expected time, please contact us at hello@remnantsbloom.com. We'll assist with locating your shipment or filing a claim if necessary.",
        },
        {
          q: "What if my order arrives damaged or missing items?",
          a: "If your order arrives damaged, please reach out within 7 days of delivery with photos of the packaging and items. We'll replace or refund the affected products as quickly as possible.",
        },
        {
          q: "What is your return policy?",
          a: "Because our soaps and skincare products are handmade and personal in nature, we cannot accept returns once opened or used. However, we want you to love your experience! If you're unhappy with your purchase or received the wrong item, contact us within 7 days of delivery — we'll make it right through replacement or refund. At Remnant's Bloom, we believe every situation can bloom with grace — and we'll always handle your concerns with care.",
        },
        {
          q: "How can I contact you about an order?",
          a: "You can email hello@remnantsbloom.com or use our Contact Form anytime. We typically reply within 24–48 hours.",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-12">
        <div className="container max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
            <p className="text-muted-foreground text-lg">
              Find answers to common questions about our products, shipping, and more.
            </p>
          </div>

          {/* FAQ Sections */}
          {faqs.map((section, sectionIndex) => (
            <div key={sectionIndex} className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-primary">{section.category}</h2>
              <Accordion type="single" collapsible className="space-y-4">
                {section.questions.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`${sectionIndex}-${index}`}
                    className="bg-card border border-border rounded-lg px-6"
                  >
                    <AccordionTrigger className="text-left font-semibold hover:no-underline">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}

          {/* Contact CTA */}
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-8 text-center mt-12">
            <Mail className="h-12 w-12 mx-auto mb-4 text-primary" />
            <h3 className="text-2xl font-bold mb-2">Still have questions?</h3>
            <p className="text-muted-foreground mb-6">
              We're always happy to help. Reach out anytime and we'll respond with care and
              gratitude.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Contact Us
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                onClick={() => window.location.href = "mailto:hello@remnantsbloom.com"}
              >
                Email Us
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

