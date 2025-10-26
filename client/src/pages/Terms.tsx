import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CONTACT_INFO } from "@/const";

export default function Terms() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-12">
        <div className="container max-w-4xl">
          <h1 className="text-4xl font-bold mb-8">Terms & Conditions</h1>
          <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
            <p>
              Welcome to Remnant's Bloom. By accessing or purchasing from our website, you agree to the following terms and conditions.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">1. Use of Our Website</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>You must be at least 18 years old or have permission from a parent/guardian to use our site.</li>
              <li>You agree not to use this site for unlawful purposes or to disrupt its normal operation.</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">2. Products & Availability</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>All products are handcrafted in small batches, so slight variations in color, shape, or scent may occur.</li>
              <li>We strive to keep product availability updated, but we cannot guarantee that every item will always be in stock.</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">3. Orders & Payments</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Prices are listed in U.S. dollars and are subject to change without notice.</li>
              <li>We accept major credit cards, PayPal, Venmo, and Cash App through secure third-party payment processors.</li>
              <li>Orders are not considered final until payment has been successfully processed.</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">4. Shipping & Delivery</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Orders are shipped within 3-5 business days of purchase unless otherwise stated.</li>
              <li>Delivery times may vary depending on the shipping carrier. We are not responsible for delays once an order has been handed off to the carrier.</li>
              <li>Customers are responsible for providing accurate shipping information. We are not liable for packages lost due to incorrect addresses.</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">5. Returns & Refunds</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Due to the personal nature of our bath and body products, all sales are final. However, if your order arrives damaged or incorrect, please contact us within 7 days of receipt and we will work to make it right.</li>
              <li>Refunds or replacements are issued at our discretion.</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">6. Intellectual Property</h2>
            <p>
              All content on this site, including text, images, logos, and product designs, is the property of Remnant's Bloom and may not be used without permission.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">7. Disclaimer of Liability</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Our products are made with natural ingredients and intended for external use only. While crafted with care for sensitive skin, everyone's skin is different. Please read ingredient lists carefully and discontinue use if irritation occurs.</li>
              <li>Remnant's Bloom is not responsible for any adverse reactions resulting from use of our products.</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">8. Governing Law</h2>
            <p>
              These terms shall be governed by and construed under the laws of the Commonwealth of Virginia, without regard to conflict of law principles.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">9. Contact Us</h2>
            <p>If you have any questions about these Terms & Conditions, please reach out to us:</p>
            <div className="bg-muted p-4 rounded-lg">
              <p><strong>Remnant's Bloom</strong></p>
              <p>Email: {CONTACT_INFO.email}</p>
              <p>Phone: {CONTACT_INFO.phone}</p>
              <p>Address: {CONTACT_INFO.address}</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

