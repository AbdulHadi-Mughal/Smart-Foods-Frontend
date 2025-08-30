import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import type { JSX } from "react";

/**
 * Privacy Policy page for The Smart Foods
 * - Uses ShadCN Card components for a consistent, professional layout
 * - Minimal, accessible semantics (headings, lists)
 */

export default function PrivacyPolicyPage(): JSX.Element {
  return (
    <main className="container mx-auto max-w-4xl py-10">
      <div className="mb-6 flex items-start justify-between gap-4 px-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-semibold leading-tight">
            Privacy Policy
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            The Smart Foods — Last Updated: <strong>1 August, 2026</strong>
          </p>
        </div>
      </div>

      <Card className="shadow-xl border-2 border-gray-200 inline mx-auto">
        <CardContent className="space-y-4 w-full md:w-3/4 lg:w-2/3 mx-auto py-6">
          <p className="text-lg font-semibold leading-relaxed">
            At The Smart Foods, we value your privacy. This policy explains how
            we collect, use, and protect information when you interact with our
            business.
          </p>

          <Separator />

          <section aria-labelledby="info-collected" className="space-y-2">
            <h2 id="info-collected" className="text-md font-semibold">
              Information we collect
            </h2>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>
                <strong>Business and personal details:</strong> name, email,
                phone number, restaurant name, and shipping/billing addresses.
              </li>
              <li>
                <strong>Transaction details:</strong> orders, invoices, and
                payment confirmations.
              </li>
              <li>
                <strong>Technical data (if applicable):</strong> limited browser
                or device information, used only to maintain website
                functionality.
              </li>
            </ul>
          </section>

          <Separator />

          <section aria-labelledby="how-used" className="space-y-2">
            <h2 id="how-used" className="text-md font-semibold">
              How we use your information
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              We use the information we collect for the purpose of operating and
              improving our services. Typical uses include:
            </p>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>Processing and delivering orders.</li>
              <li>Managing payments and invoices.</li>
              <li>Providing customer support and responding to inquiries.</li>
              <li>
                Maintaining business records in line with applicable legal and
                tax requirements.
              </li>
            </ul>
          </section>

          <Separator />

          <section aria-labelledby="sharing" className="space-y-2">
            <h2 id="sharing" className="text-md font-semibold">
              Sharing your information
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              We do not sell your personal information. We only share limited
              details where necessary to provide our service or as required by
              law. Examples:
            </p>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>
                <strong>Delivery partners:</strong> for order fulfillment (e.g.
                M&P, Pakistan Post).
              </li>
              <li>
                <strong>Payment processors:</strong> to handle secure
                transactions (we work with trusted processors such as PayFast).
              </li>
              <li>
                <strong>Legal authorities:</strong> if required by lawful
                process or to protect legal rights.
              </li>
            </ul>
          </section>

          <Separator />

          <section aria-labelledby="security" className="space-y-2">
            <h2 id="security" className="text-md font-semibold">
              Data security
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              We take reasonable measures to protect data from unauthorized
              access, alteration, or loss, and we work with trusted partners and
              follow recognised best practices. No system is completely
              invulnerable; however, we review and update our controls
              regularly.
            </p>
          </section>

          <Separator />

          <section aria-labelledby="retention" className="space-y-2">
            <h2 id="retention" className="text-md font-semibold">
              Data retention
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              We retain different categories of information for different
              periods, in line with business needs and legal obligations:
            </p>

            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>
                <strong>Order and transaction records:</strong> retained for 7
                years to comply with tax and accounting regulations.
              </li>
              <li>
                <strong>Customer contact details:</strong> kept while you
                maintain an account or active business relationship with us.
              </li>
              <li>
                <strong>Delivery addresses:</strong> retained while linked to
                open orders or your account; deleted when no longer required.
              </li>
              <li>
                <strong>Payment details:</strong> we do not store full card
                numbers. Limited payment confirmations are retained for 7 years
                for financial record-keeping.
              </li>
              <li>
                <strong>Support inquiries:</strong> retained for up to 2 years
                to improve service and to resolve disputes.
              </li>
            </ul>

            <p className="text-sm text-muted-foreground">
              After the retention periods above, data is securely deleted or
              anonymized, unless law requires longer retention.
            </p>
          </section>

          <Separator />

          <section aria-labelledby="rights" className="space-y-2">
            <h2 id="rights" className="text-md font-semibold">
              Your rights
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              You may:
            </p>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>Request a copy of the information we hold about you.</li>
              <li>Ask us to correct or update your details.</li>
              <li>
                Request deletion of data where legally and operationally
                possible.
              </li>
            </ul>
          </section>

          <Separator />

          <section aria-labelledby="contact" className="space-y-2">
            <h2 id="contact" className="text-md font-semibold">
              Contact us
            </h2>

            <p className="text-sm text-muted-foreground leading-relaxed">
              If you have questions or concerns, please contact:
            </p>

            <address className="not-italic text-sm text-muted-foreground">
              <div>
                <strong>The Smart Foods</strong>
              </div>
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

          <Separator />

          <p className="text-xs text-muted-foreground">
            This policy may be updated from time to time. The effective date at
            the top of the page will indicate the latest version.
          </p>
        </CardContent>
      </Card>
    </main>
  );
}
