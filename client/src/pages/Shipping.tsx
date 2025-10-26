import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CONTACT_INFO } from "@/const";

export default function Shipping() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-12">
        <div className="container max-w-4xl">
          <h1 className="text-4xl font-bold mb-8">Shipping Policy</h1>
          <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
            <p>
              At Remnant's Bloom, we do our best to ensure your handcrafted products arrive safely and on time.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">1. Processing Time</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Orders are processed within 3-5 business days after payment is received.</li>
              <li>Because our products are made in small batches, processing times may vary slightly during busy seasons.</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">2. Shipping Methods & Rates</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>We ship orders via USPS or UPS.</li>
              <li>Shipping costs are calculated at checkout and depend on your order total, weight, and location.</li>
              <li>Occasionally, we may offer free shipping promotions.</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">3. Delivery Estimates</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Standard U.S. shipping typically takes 5-10 business days once your package leaves our facility.</li>
              <li>We do not currently offer international shipping.</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">4. Tracking</h2>
            <p>
              Once your order has shipped, you will receive a confirmation email with tracking information.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">5. Lost or Delayed Packages</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Once a package is in the hands of the carrier, delivery times are beyond our control.</li>
              <li>For missing packages marked as "delivered," please contact the carrier directly to file a claim.</li>
              <li>We are not responsible for lost or stolen packages, but we'll gladly assist you in working with the carrier when possible.</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">6. Incorrect Addresses</h2>
            <p>
              Please double-check your shipping address at checkout. We cannot replace or refund orders shipped to incorrect addresses provided by the customer.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">7. Contact Us</h2>
            <p>If you have questions about shipping, please reach out to us:</p>
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

