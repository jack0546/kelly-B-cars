import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-8xl text-gold">404</h1>
        <h2 className="mt-4 text-xl">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for has driven off.
        </p>
        <Link to="/" className="btn-gold mt-6">Return Home</Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-2xl">Something went wrong</h1>
        <p className="mt-2 text-sm text-muted-foreground">Please try again or head home.</p>
        <div className="mt-6 flex justify-center gap-2">
          <button onClick={() => { router.invalidate(); reset(); }} className="btn-gold">Try again</button>
          <a href="/" className="btn-ghost">Home</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Kelly B Motors — Luxury Cars in Accra, Ghana" },
      { name: "description", content: "Premium imported luxury vehicles in Accra. Mercedes-Benz, BMW, Range Rover, Lexus, Audi, Toyota — handpicked, inspected, delivered with confidence." },
      { name: "author", content: "Kelly B Motors" },
      { name: "theme-color", content: "#1a1408" },
      { property: "og:site_name", content: "Kelly B Motors" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Kelly B Motors — Luxury Cars in Accra, Ghana" },
      { property: "og:description", content: "Premium imported luxury vehicles in Accra. Mercedes-Benz, BMW, Range Rover, Lexus, Audi, Toyota — handpicked, inspected, delivered with confidence." },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Kelly B Motors — Luxury Cars in Accra, Ghana" },
      { name: "twitter:description", content: "Premium imported luxury vehicles in Accra. Mercedes-Benz, BMW, Range Rover, Lexus, Audi, Toyota — handpicked, inspected, delivered with confidence." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/a9d6453d-3965-48c1-ae3a-d24b7d66f904/id-preview-9317e0c6--57f1eb64-b99c-49fb-8827-9d7124001b78.lovable.app-1779905955034.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/a9d6453d-3965-48c1-ae3a-d24b7d66f904/id-preview-9317e0c6--57f1eb64-b99c-49fb-8827-9d7124001b78.lovable.app-1779905955034.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AutomotiveBusiness",
          name: "Kelly B Motors",
          image: "/og.jpg",
          telephone: "+233209491789",
          address: { "@type": "PostalAddress", addressLocality: "Accra", addressCountry: "GH", streetAddress: "MW6F+HP3" },
          aggregateRating: { "@type": "AggregateRating", ratingValue: "4.7", reviewCount: "63" },
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFloat />
    </QueryClientProvider>
  );
}
