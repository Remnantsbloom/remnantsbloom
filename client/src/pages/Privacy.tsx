import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CONTACT_INFO } from "@/const";

export default function Privacy() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-12">
        <div className="container max-w-4xl">
          <h1 className="text-4xl font-bold mb-8">Privacy Notice</h1>
          <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
            <p>
              Remnant's Bloom ("we," "our," or "us") respects your privacy and is committed to protecting the personal information you share with us. This Privacy Notice explains what information we collect, how we use it, and the choices you have.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">1. Information We Collect</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Personal details:</strong> Name, email address, billing/shipping address, phone number.</li>
              <li><strong>Payment information:</strong> Processed securely through third-party providers (e.g., credit card processors, PayPal, Venmo, Cash App). We do not store full payment details.</li>
              <li><strong>Order information:</strong> Products you purchase, delivery details.</li>
              <li><strong>Technical data:</strong> Cookies, IP address, and usage data (through analytics tools like Google Analytics) to help us improve your experience.</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">2. How We Use Your Information</h2>
            <p>We use the information collected to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Process and fulfill your orders, including shipping and payment processing.</li>
              <li>Communicate with you about your purchases, account, or customer service inquiries.</li>
              <li>Send marketing emails or newsletters (if you subscribe).</li>
              <li>Improve our website, services, and customer experience.</li>
              <li>Detect and prevent fraud or misuse.</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">3. Sharing Your Information</h2>
            <p>We do not sell your personal information. We may share your information with:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Service providers such as payment processors, shipping carriers, and email marketing platforms.</li>
              <li>Analytics tools (like Google Analytics) that help us understand site traffic and improve performance.</li>
              <li>Legal requirements if we are required to comply with applicable law, regulation, or legal process.</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">4. Your Choices</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Marketing emails:</strong> You can unsubscribe from promotional emails at any time by clicking "unsubscribe" at the bottom of any email.</li>
              <li><strong>Cookies:</strong> Most browsers allow you to control or block cookies. Note that disabling cookies may affect site functionality.</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">5. Data Security</h2>
            <p>
              We take reasonable precautions to protect your personal information. Sensitive payment details are encrypted and handled only by trusted third-party processors.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">6. Children's Privacy</h2>
            <p>
              Our website is not directed to children under 13, and we do not knowingly collect personal information from them.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">7. Changes to This Privacy Notice</h2>
            <p>
              We may update this Privacy Notice from time to time. Any changes will be posted on this page with a revised effective date.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">8. Contact Us</h2>
            <p>If you have questions or concerns about this Privacy Notice or how your information is handled, please contact us:</p>
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
