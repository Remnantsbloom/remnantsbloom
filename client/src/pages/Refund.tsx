import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CONTACT_INFO } from "@/const";

export default function Refund() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-12">
        <div className="container max-w-4xl">
          <h1 className="text-4xl font-bold mb-8">Refund & Return Policy</h1>
          <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
            <p>
              At Remnant's Bloom, we want you to love your purchase. Each product is handcrafted with care, and we stand by the quality of our work.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">1. All Sales Are Final</h2>
            <p>
              Due to the nature of bath and body products, all sales are final. We are unable to accept returns or exchanges for reasons of personal preference.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">2. Damaged or Incorrect Orders</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>If your order arrives damaged, defective, or incorrect, please contact us within 7 days of delivery at {CONTACT_INFO.email}.</li>
              <li>Include your order number and a photo of the product/packaging so we can quickly review the issue.</li>
              <li>We will gladly provide a replacement or refund, at our discretion.</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">3. Refunds (If Applicable)</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Once a refund is approved, it will be processed back to your original payment method.</li>
              <li>Depending on your bank or payment provider, it may take 5–10 business days for the credit to appear.</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">4. Shipping Issues</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Please double-check your shipping information before completing checkout. We are not responsible for orders lost due to incorrect addresses.</li>
              <li>If a package is marked "delivered" by the carrier but cannot be found, please contact the shipping provider directly to file a claim.</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">5. Contact Us</h2>
            <p>If you have questions about your order or this policy, we're here to help:</p>
            <div className="bg-muted p-4 rounded-lg">
              <p><strong>Remnant's Bloom</strong></p>
              <p>Email: {CONTACT_INFO.email}</p>
              <p>Phone: {CONTACT_INFO.phone}</p>
              <p>Address: {CONTACT_INFO.address}</p>
            </div>

            <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-6 rounded-lg mt-8">
              <p className="text-foreground font-medium">
                At Remnant's Bloom, we believe every situation can bloom with grace — and we'll always handle your concerns with care.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

