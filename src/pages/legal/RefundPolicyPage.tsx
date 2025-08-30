import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import type { JSX } from "react";

/**
 * Refund Policy page for The Smart Foods
 * - Matches the exact theme and styling used by Privacy / Terms / Shipping pages
 * - Content taken verbatim from refund.txt
 */

export default function RefundPolicyPage(): JSX.Element {
  return (
    <main className="container mx-auto max-w-4xl py-10">
      <div className="mb-6 flex items-start justify-between gap-4 px-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-semibold leading-tight">
            Refund Policy
          </h1>
          <p className="text-sm text-muted-foreground mt-1">The Smart Foods</p>
        </div>
      </div>

      <Card className="shadow-xl border-2 border-gray-200 inline mx-auto">
        <CardContent className="space-y-4 w-full md:w-3/4 lg:w-2/3 mx-auto py-6">
          <p className="text-lg font-semibold leading-relaxed">
            At Smart Foods, every order is prepared with care and precise
            calculations. With full clarity, we state that all sales are final
            unless they meet the specific exceptions below.
          </p>

          <Separator />

          <section aria-labelledby="exceptions" className="space-y-2">
            <h2 id="exceptions" className="text-md font-semibold">
              Exceptions
            </h2>

            <p className="text-sm text-muted-foreground leading-relaxed">
              Refunds or replacements are only possible if your order:
            </p>

            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>Arrives severely damaged.</li>
              <li>Contains the wrong items.</li>
              <li>Is defective in a way that makes it unfit for use.</li>
            </ul>
          </section>

          <Separator />

          <section aria-labelledby="claim-requirements" className="space-y-2">
            <h2 id="claim-requirements" className="text-md font-semibold">
              Requirements for a claim
            </h2>

            <p className="text-sm text-muted-foreground leading-relaxed">
              To qualify for a refund or replacement:
            </p>

            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>Report the issue within 7 days of delivery.</li>
              <li>
                Provide clear photos of the problem along with your order
                details.
              </li>
              <li>
                Smart Foods may verify claims before approving a refund or
                replacement.
              </li>
            </ul>
          </section>

          <Separator />

          <section aria-labelledby="processing" className="space-y-2">
            <h2 id="processing" className="text-md font-semibold">
              Processing refunds
            </h2>

            <p className="text-sm text-muted-foreground leading-relaxed">
              Approved refunds will be issued to your original payment method.
              Processing times depend on your bank or payment provider.
            </p>
          </section>

          <Separator />

          <section aria-labelledby="limitations" className="space-y-2">
            <h2 id="limitations" className="text-md font-semibold">
              Limitations
            </h2>

            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>
                Minor differences in taste, size, or packaging are not grounds
                for a refund.
              </li>
              <li>Requests made after the 7-day window may not be accepted.</li>
              <li>
                Smart Foods reserves the right to decline claims that do not
                meet the stated requirements.
              </li>
            </ul>
          </section>

          <Separator />

          <section aria-labelledby="tracking" className="space-y-2">
            <h2 id="tracking" className="text-md font-semibold">
              Delivery tracking
            </h2>

            <p className="text-sm text-muted-foreground leading-relaxed">
              You can always check your delivery status and access the tracking
              link through your Orders page:
            </p>

            <p className="text-sm text-muted-foreground">
              <a
                className="underline"
                href="https://www.thesmartfoods.com/dashboard/orders"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.thesmartfoods.com/dashboard/orders
              </a>
            </p>
          </section>

          <Separator />

          <p className="text-xs text-muted-foreground">
            This policy should be read together with our Terms & Conditions and
            Shipping policy. We may update it from time to time; the date at the
            top indicates the current version.
          </p>
        </CardContent>
      </Card>
    </main>
  );
}
