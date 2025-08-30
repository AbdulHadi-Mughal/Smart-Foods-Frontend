import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import type { JSX } from "react";
import { Link } from "react-router-dom";

/**
 * Shipping & Service Policy page for The Smart Foods
 * - Styling and structure intentionally match the Privacy Policy component
 * - Content taken verbatim from the provided shipping file
 */

export default function ShippingPolicyPage(): JSX.Element {
  return (
    <main className="container mx-auto max-w-4xl py-10">
      <div className="mb-6 flex items-start justify-between gap-4 px-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-semibold leading-tight">
            Shipping & Service Policy
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            The Smart Foods — Last updated: <strong>26 August, 2025</strong>
          </p>
        </div>
      </div>

      <Card className="shadow-xl border-2 border-gray-200 inline mx-auto">
        <CardContent className="space-y-4 w-full md:w-3/4 lg:w-2/3 mx-auto py-6">
          <p className="text-lg font-semibold leading-relaxed">
            We want your orders to reach you on time and in good condition.
            Please read this together with our Terms & Conditions and Returns &
            Refunds pages.
          </p>

          <Separator />

          <section aria-labelledby="where-we-ship" className="space-y-2">
            <h2 id="where-we-ship" className="text-md font-semibold">
              1. Where we ship
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              We ship within Pakistan to restaurant addresses. For any special
              requests, please contact us before ordering.
            </p>
          </section>

          <Separator />

          <section aria-labelledby="processing-dispatch" className="space-y-2">
            <h2 id="processing-dispatch" className="text-md font-semibold">
              2. Processing & dispatch
            </h2>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>Orders require our approval (usually within 24 hours).</li>
              <li>
                Once approved, we typically process and dispatch orders within
                4–5 days, depending on stock and order size.
              </li>
            </ul>
          </section>

          <Separator />

          <section aria-labelledby="shipping-methods" className="space-y-2">
            <h2 id="shipping-methods" className="text-md font-semibold">
              3. Shipping methods & delivery times
            </h2>

            <p className="text-sm text-muted-foreground leading-relaxed">
              Estimated delivery time:{" "}
              <strong>2–3 business days after dispatch</strong>. This may vary
              depending on courier operations and local conditions.
            </p>

            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>
                We dispatch via our delivery partners / couriers (for example,
                M&P and Pakistan Post).
              </li>
              <li>
                Shipping charges and estimated times are shown at checkout.
              </li>
            </ul>

            <div className="mt-3 text-sm text-muted-foreground">
              <h3 className="font-medium mb-1">
                Order Tracking & Delivery Status
              </h3>
              <p className="leading-relaxed">
                After we dispatch your order, the delivery status and tracking
                link (when available) will appear on your Orders page.
              </p>
              <p className="mt-2 leading-relaxed text-sm text-muted-foreground">
                We update order statuses such as: Not Approved yet, Approved -
                Processing, Dispatched, Delivered, Cancelled. When the courier
                provides a tracking URL, we post it on the Orders page so you
                can follow the shipment in real time. If tracking is not
                available for an order, we will note that and provide an
                estimated delivery time where possible.
              </p>
            </div>
          </section>

          <Separator />

          <section aria-labelledby="delivery-risk" className="space-y-2">
            <h2 id="delivery-risk" className="text-md font-semibold">
              4. Delivery, risk & inspection
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Risk passes to you on delivery. Please inspect the goods on
              receipt.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              If items are damaged, incorrect, or missing, notify us as soon as
              possible (preferably within 7 days) and provide clear photos and
              the order number. Late complaints may not be accepted. See the
              Returns & Refunds policy for full claim rules.
            </p>
          </section>

          <Separator />

          <section aria-labelledby="delays" className="space-y-2">
            <h2 id="delays" className="text-md font-semibold">
              5. Delays & exceptions
            </h2>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>
                Delays can occur due to logistics, weather, carrier issues, or
                unusually high demand.
              </li>
              <li>
                If a delay affects your order, we will post an update on the
                Orders page and notify you (for example, via WhatsApp) where
                possible.
              </li>
            </ul>
          </section>

          <Separator />

          <section aria-labelledby="contact-policy" className="space-y-2">
            <h2 id="contact-policy" className="text-md font-semibold">
              6. Contact & full policies
            </h2>

            <p className="text-sm text-muted-foreground leading-relaxed">
              For questions about shipping, delivery status or claims, please
              contact:
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
              <div>Address: Opposite PTCL Exchange, Circular Road, Daska</div>
            </address>

            <p className="text-sm text-muted-foreground leading-relaxed mt-2">
              Full Returns & Refunds Policy:{" "}
              <Link
                className="underline"
                to="/legal/refunds"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.thesmartfoods.com/legal/refunds
              </Link>
            </p>
          </section>

          <Separator />

          <p className="text-xs text-muted-foreground">
            This policy should be read together with our Terms & Conditions and
            Returns & Refunds policy. We may update it from time to time; the
            date at the top indicates the current version.
          </p>
        </CardContent>
      </Card>
    </main>
  );
}
