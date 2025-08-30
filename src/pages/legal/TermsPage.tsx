import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import type { JSX } from "react";

/**
 * Terms & Conditions page for The Smart Foods
 * - Styled with ShadCN components
 * - Structured and accessible (semantic headings, lists)
 */

export default function TermsPage(): JSX.Element {
  return (
    <main className="container mx-auto max-w-4xl py-10">
      <div className="mb-6 flex items-start justify-between gap-4 px-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-semibold leading-tight">
            Terms & Conditions
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            The Smart Foods — Last updated: <strong>31 December, 2025</strong>
          </p>
        </div>
      </div>

      <Card className="shadow-xl border-2 border-gray-200 inline mx-auto">
        <CardContent className="space-y-4 w-full md:w-3/4 lg:w-2/3 mx-auto py-6">
          <p className="text-lg font-semibold leading-relaxed">
            These Terms govern your use of{" "}
            <a
              href="https://www.thesmartfoods.com"
              className="underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              thesmartfoods.com
            </a>{" "}
            and purchases from The Smart Foods. By ordering or using our Site,
            you agree to these Terms.
          </p>

          <Separator />

          {/* Sections */}
          <section aria-labelledby="scope" className="space-y-2">
            <h2 id="scope" className="text-md font-semibold">
              1. Scope and contact
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              These Terms govern your use of the Site. If you do not agree, do
              not use the Site.
            </p>
            <address className="not-italic text-sm text-muted-foreground mt-2">
              <div>
                <strong>The Smart Foods</strong>
              </div>
              <div>
                Opposite PTCL Exchange, Circular Road, Daska, Punjab 51010,
                Pakistan
              </div>
              <div>Phone: +92 311 5177007</div>
              <div>
                Email:{" "}
                <a
                  className="underline"
                  href="mailto:chickenmunch007@gmail.com"
                >
                  chickenmunch007@gmail.com
                </a>
              </div>
            </address>
          </section>

          <Separator />

          <section aria-labelledby="eligibility" className="space-y-2">
            <h2 id="eligibility" className="text-md font-semibold">
              2. Eligibility and accounts
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              You must be 18+ with legal capacity. Accounts are for businesses
              or authorized representatives only. Keep login and payment details
              secure; you are responsible for all activity under your account.
            </p>
          </section>

          <Separator />

          <section aria-labelledby="products" className="space-y-2">
            <h2 id="products" className="text-md font-semibold">
              3. Products and descriptions
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              We sell dried spices and spice blends to restaurants across
              Pakistan. Details such as weights, colors, or specifications are
              provided for reference and may have minor variations. Product
              availability can change.
            </p>
          </section>

          <Separator />

          <section aria-labelledby="orders" className="space-y-2">
            <h2 id="orders" className="text-md font-semibold">
              4. Orders, approval, payment & pricing
            </h2>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>
                Payment methods: JazzCash, Easypaisa, Bank transfer. All prices
                in PKR.
              </li>
              <li>
                Orders require approval before processing (usually within 24
                hours).
              </li>
              <li>
                Cancellations allowed before approval or within 6 hours of
                placement.
              </li>
              <li>
                Confirmed orders are non-refundable except under stated
                exceptions.
              </li>
              <li>
                Prices and charges may change; confirmed orders are charged at
                checkout price.
              </li>
            </ul>
          </section>

          <Separator />

          <section aria-labelledby="delivery" className="space-y-2">
            <h2 id="delivery" className="text-md font-semibold">
              5. Delivery and risk
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              We dispatch through M&P and Pakistan Post. Risk passes to you upon
              delivery. If items are damaged or missing, notify us within 7 days
              with photos and order details.
            </p>
          </section>

          <Separator />

          <section aria-labelledby="returns" className="space-y-2">
            <h2 id="returns" className="text-md font-semibold">
              6. Returns, cancellations & samples
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              All sales are final once approved and dispatched. Samples are
              available before bulk orders. Exceptions for severe defects or
              wrong items must be reported within 7 days with evidence.
            </p>
          </section>

          <Separator />

          <section aria-labelledby="ip" className="space-y-2">
            <h2 id="ip" className="text-md font-semibold">
              7. Intellectual property
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              All site content and trademarks are owned by us or licensed to us.
              You may download or print portions for internal business use only.
            </p>
          </section>

          <Separator />

          <section aria-labelledby="use" className="space-y-2">
            <h2 id="use" className="text-md font-semibold">
              8. Acceptable use
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Do not use the Site unlawfully, resell products without
              permission, interfere with site function, upload malicious code,
              impersonate others, or provide false details.
            </p>
          </section>

          <Separator />

          <section aria-labelledby="feedback" className="space-y-2">
            <h2 id="feedback" className="text-md font-semibold">
              9. User feedback
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Feedback you provide grants us a royalty-free license to use it,
              provided it does not infringe third-party rights.
            </p>
          </section>

          <Separator />

          <section aria-labelledby="privacy" className="space-y-2">
            <h2 id="privacy" className="text-md font-semibold">
              10. Privacy & data handling
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Our{" "}
              <a className="underline" href="/legal/privacy-policy">
                Privacy Policy
              </a>{" "}
              explains how we handle data. We retain transactional and financial
              records per Pakistani regulations.
            </p>
          </section>

          <Separator />

          <section aria-labelledby="liability" className="space-y-2">
            <h2 id="liability" className="text-md font-semibold">
              11. Limitation of liability
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Our liability is limited to the order value. We are not liable for
              indirect or consequential losses except in cases of fraud, willful
              misconduct, or where liability cannot be excluded by law.
            </p>
          </section>

          <Separator />

          <section aria-labelledby="indemnity" className="space-y-2">
            <h2 id="indemnity" className="text-md font-semibold">
              12. Indemnity
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              You agree to indemnify us against claims arising from your breach
              of these Terms, misuse of the Site, or violations of law.
            </p>
          </section>

          <Separator />

          <section aria-labelledby="termination" className="space-y-2">
            <h2 id="termination" className="text-md font-semibold">
              13. Termination
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              We may suspend or terminate your account for breaches or suspected
              fraud. Termination does not affect prior rights.
            </p>
          </section>

          <Separator />

          <section aria-labelledby="law" className="space-y-2">
            <h2 id="law" className="text-md font-semibold">
              14. Governing law & disputes
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Governed by the laws of Pakistan. Parties submit to the exclusive
              jurisdiction of Pakistani courts.
            </p>
          </section>

          <Separator />

          <section aria-labelledby="changes" className="space-y-2">
            <h2 id="changes" className="text-md font-semibold">
              15. Changes
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              We may update these Terms. The “Last updated” date shows the
              current version. Continued use constitutes acceptance.
            </p>
          </section>

          <Separator />

          <section aria-labelledby="contact" className="space-y-2">
            <h2 id="contact" className="text-md font-semibold">
              16. Contact
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              For complaints or questions, contact us:
            </p>
            <address className="not-italic text-sm text-muted-foreground">
              <div>
                Email:{" "}
                <a
                  className="underline"
                  href="mailto:chickenmunch007@gmail.com"
                >
                  chickenmunch007@gmail.com
                </a>
              </div>
              <div>
                Phone:{" "}
                <a className="underline" href="tel:+923009448933">
                  +92 300 9448933
                </a>
              </div>
            </address>
          </section>
        </CardContent>
      </Card>
    </main>
  );
}
