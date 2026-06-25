import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, IM_Fell_English, Crimson_Pro, Cinzel_Decorative } from "next/font/google";
import "./globals.css";
import { ScrollTicker } from "@/components/sections/ScrollTicker";
import { Nav } from "@/components/sections/Nav";

const cormorant = Cormorant_Garamond({
  weight: ["700"],
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const imFell = IM_Fell_English({
  weight: ["400"],
  style: ["italic"],
  subsets: ["latin"],
  variable: "--font-subheading",
  display: "swap",
});

const crimsonPro = Crimson_Pro({
  weight: ["400", "600"],
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const cinzel = Cinzel_Decorative({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-accent",
  display: "swap",
});

const siteUrl = "https://fourevermakhana.com";

export const viewport: Viewport = {
  themeColor: "#8B1A1A",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  // ─── Core Title & Description (keyword-rich) ───
  title: {
    default: "Fourever Makhana | Buy Premium Roasted Makhana Online | Best Foxnuts from Bihar",
    template: "%s | Fourever Makhana",
  },
  description:
    "Buy premium roasted makhana (foxnuts) online from Fourever Makhana. Hand-harvested from the lotus ponds of Mithila, Bihar. Shop Classic, Himalayan Salt, Turmeric, Chaat Masala & Rose Cardamom flavored makhana. 100% natural, zero preservatives. Best makhana brand in India.",

  // ─── Keywords (still used by some engines) ───
  keywords: [
    "makhana",
    "buy makhana online",
    "makhana online",
    "best makhana",
    "roasted makhana",
    "foxnuts",
    "fox nuts",
    "lotus seeds",
    "makhana snacks",
    "makhana price",
    "makhana flavored",
    "premium makhana",
    "organic makhana",
    "makhana Bihar",
    "Mithila makhana",
    "makhana gift box",
    "healthy snacks India",
    "protein snacks",
    "low calorie snacks",
    "Fourever Makhana",
    "foxnut snacks",
    "phool makhana",
    "makhana buy",
    "best foxnuts India",
    "makhana online India",
    "roasted foxnuts",
    "flavored makhana",
    "makhana Diwali gift",
    "makhana wedding gift",
    "GI tagged makhana",
    "Bihar makhana brand",
    "heritage makhana",
    "artisanal makhana",
    "wood fire roasted makhana",
    "hand harvested makhana",
    "natural makhana snacks",
    "makhana health benefits",
    "fasting food makhana",
    "Navratri makhana",
    "vrat makhana",
  ],

  // ─── Canonical URL ───
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
    languages: {
      "en-IN": "/",
      "hi-IN": "/",
    },
  },

  // ─── Open Graph ───
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Fourever Makhana",
    title: "Fourever Makhana | Buy Premium Roasted Makhana Online | Best Foxnuts from Bihar",
    description:
      "Buy premium hand-harvested roasted makhana (foxnuts) online. Shop Classic, Himalayan Salt, Turmeric, Chaat Masala & Rose Cardamom makhana. 100% natural, zero preservatives. From the lotus ponds of Bihar.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Fourever Makhana – Premium roasted makhana foxnuts from Bihar with Mithila art packaging",
        type: "image/png",
      },
    ],
  },

  // ─── Twitter Card ───
  twitter: {
    card: "summary_large_image",
    title: "Fourever Makhana | Premium Roasted Makhana & Foxnuts from Bihar",
    description:
      "Hand-harvested from the lotus ponds of Mithila. Shop premium roasted makhana in 5 flavors. 100% natural, zero preservatives.",
    images: ["/twitter-card.png"],
    creator: "@fourevermakhana",
    site: "@fourevermakhana",
  },

  // ─── Robots ───
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // ─── Verification ───
  verification: {
    google: "hZWD7lEL04qFsq-x81n8NyOX_izsqtz7RVPP3nt6WOk",
  },

  // ─── App Links ───
  manifest: "/manifest.json",

  // ─── Category ───
  category: "Food & Beverages",

  // ─── Creator ───
  creator: "Fourever Makhana",
  publisher: "Fourever Makhana",

  // ─── Other meta ───
  other: {
    "geo.region": "IN-BR",
    "geo.placename": "Darbhanga, Bihar",
    "geo.position": "26.1542;85.8918",
    "ICBM": "26.1542, 85.8918",
    "rating": "general",
    "distribution": "global",
    "revisit-after": "7 days",
    "format-detection": "telephone=yes",
  },
};

// ─── JSON-LD Structured Data ───
function JsonLd() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Fourever Makhana",
    url: siteUrl,
    logo: `${siteUrl}/og-image.png`,
    description:
      "Premium hand-harvested roasted makhana (foxnuts) from the lotus ponds of Mithila, Bihar. 100% natural, zero preservatives.",
    foundingDate: "2026",
    foundingLocation: {
      "@type": "Place",
      name: "Darbhanga, Bihar, India",
    },
    sameAs: [
      "https://instagram.com/fourevermakhana",
      "https://facebook.com/fourevermakhana",
      "https://twitter.com/fourevermakhana",
      "https://linkedin.com/company/fourevermakhana",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      availableLanguage: ["English", "Hindi"],
    },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Fourever Makhana",
    url: siteUrl,
    description:
      "Buy premium roasted makhana online. Hand-harvested foxnuts from Bihar in multiple flavors.",
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteUrl}/?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteUrl}/#business`,
    name: "Fourever Makhana",
    image: `${siteUrl}/og-image.png`,
    description:
      "Premium hand-harvested roasted makhana (foxnuts) brand from Bihar, India. Buy roasted makhana snacks in Classic, Himalayan Salt, Turmeric, Chaat Masala, and Rose Cardamom flavors.",
    url: siteUrl,
    telephone: "+91-XXXXXXXXXX",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Darbhanga",
      addressRegion: "Bihar",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 26.1542,
      longitude: 85.8918,
    },
    priceRange: "₹₹",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
  };

  const products = [
    {
      name: "Classic Roasted Makhana",
      description: "The Original. Premium hand-harvested roasted makhana foxnuts from Bihar. 100% natural, zero preservatives.",
      price: "299",
      image: `${siteUrl}/products/mithila_classic_makhana.png`,
      sku: "FM-CLASSIC-200",
      weight: "200g",
    },
    {
      name: "Himalayan Pink Salt Makhana",
      description: "Mountain minerals meet lotus harvest. Premium roasted makhana with Himalayan pink salt.",
      price: "349",
      image: `${siteUrl}/products/mithila_himalayan_makhana.png`,
      sku: "FM-HIMALAYAN-200",
      weight: "200g",
    },
    {
      name: "Turmeric & Cracked Pepper Makhana",
      description: "Ancient spice warrior grain. Premium roasted makhana with turmeric and cracked black pepper.",
      price: "349",
      image: `${siteUrl}/products/mithila_turmeric_makhana.png`,
      sku: "FM-TURMERIC-200",
      weight: "200g",
    },
    {
      name: "Chaat Masala Makhana",
      description: "The bazaar in every bite. Premium roasted makhana with authentic chaat masala seasoning.",
      price: "329",
      image: `${siteUrl}/products/mithila_chaat_makhana.png`,
      sku: "FM-CHAAT-200",
      weight: "200g",
    },
    {
      name: "Rose & Cardamom Makhana",
      description: "Brewed for royalty. Premium roasted makhana with delicate rose and cardamom flavoring.",
      price: "379",
      image: `${siteUrl}/products/mithila_rose_makhana.png`,
      sku: "FM-ROSE-200",
      weight: "200g",
    },
    {
      name: "Royal Gift Box - Assorted Makhana Collection",
      description: "Gift the heritage of Mithila. Premium assorted 5-pack makhana gift box with Mithila art packaging.",
      price: "1499",
      image: `${siteUrl}/products/mithila_royal_box.png`,
      sku: "FM-ROYAL-BOX",
      weight: "Assorted 5-pack",
    },
  ];

  const productListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Fourever Makhana Products - Premium Roasted Makhana Collection",
    description: "Shop premium roasted makhana (foxnuts) online. Available in Classic, Himalayan Salt, Turmeric, Chaat Masala, and Rose Cardamom flavors.",
    numberOfItems: products.length,
    itemListElement: products.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Product",
        name: product.name,
        description: product.description,
        image: product.image,
        sku: product.sku,
        brand: {
          "@type": "Brand",
          name: "Fourever Makhana",
        },
        offers: {
          "@type": "Offer",
          price: product.price,
          priceCurrency: "INR",
          availability: "https://schema.org/InStock",
          seller: {
            "@type": "Organization",
            name: "Fourever Makhana",
          },
        },
        weight: {
          "@type": "QuantitativeValue",
          value: product.weight,
        },
        additionalProperty: [
          {
            "@type": "PropertyValue",
            name: "Preservatives",
            value: "Zero",
          },
          {
            "@type": "PropertyValue",
            name: "Origin",
            value: "Bihar, India",
          },
        ],
      },
    })),
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is makhana?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Makhana, also known as foxnuts or lotus seeds, is a superfood harvested from the Euryale ferox plant that grows in the lotus ponds of Bihar, India. It is a traditional Indian snack rich in protein, low in calories, and has been eaten for thousands of years.",
        },
      },
      {
        "@type": "Question",
        name: "What flavors of makhana does Fourever Makhana offer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Fourever Makhana offers 5 premium flavors: Classic Roasted, Himalayan Pink Salt, Turmeric & Cracked Pepper, Chaat Masala, and Rose & Cardamom. We also offer a Royal Gift Box with an assorted 5-pack.",
        },
      },
      {
        "@type": "Question",
        name: "Is makhana good for health?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes! Makhana is high in protein, low glycemic, zero cholesterol, rich in antioxidants, and is a sattvic food suitable for fasting. It's naturally free from trans-fats and is one of the healthiest snacking options available.",
        },
      },
      {
        "@type": "Question",
        name: "Where is Fourever Makhana sourced from?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "All our makhana is hand-harvested from the lotus ponds of Mithila region in Bihar, India. Bihar produces over 90% of India's makhana and holds the GI (Geographical Indication) tag for this heritage crop.",
        },
      },
      {
        "@type": "Question",
        name: "Can makhana be eaten during fasting (vrat)?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, makhana is a sattvic food and is traditionally consumed during religious fasting periods including Navratri, Ekadashi, and other vrats. It is considered pure enough to be offered to the divine.",
        },
      },
      {
        "@type": "Question",
        name: "What makes Fourever Makhana different from other makhana brands?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Fourever Makhana sources directly from heritage farming families in Mithila, Bihar. Our makhana is hand-harvested, wood-fire roasted, and hand-packed with zero preservatives. We support women-led cooperatives and use GI-protected ingredients.",
        },
      },
      {
        "@type": "Question",
        name: "Does Fourever Makhana offer gift boxes for Diwali and weddings?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes! We offer premium gift boxes including The Royal Darbar Box (₹1,499), Lotus Pond Collection (₹1,299), and The Heritage Vault (₹2,499). These are hand-painted boxes filled with our finest makhana harvests, perfect for Diwali, weddings, corporate gifting, and housewarming.",
        },
      },
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteUrl,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      dir="ltr"
      className={`${cormorant.variable} ${imFell.variable} ${crimsonPro.variable} ${cinzel.variable} h-full antialiased`}
    >
      <head>
        <JsonLd />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/og-image.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="mobile-web-app-capable" content="yes" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-full flex flex-col font-body selection:bg-mithila-crimson selection:text-mithila-ivory bg-mithila-ivory">
        <ScrollTicker />
        <Nav />
        {children}
      </body>
    </html>
  );
}
