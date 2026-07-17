import type { Metadata } from "next";

export const siteUrl = "https://davincimedia.studio";

const siteName = "Davinci Project Studio";

const defaultMetadata: Partial<Metadata> = {
  metadataBase: new URL(siteUrl),
  authors: [{ name: "Davinci Media" }],
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName,
    images: [{ url: "/logo.jpg", width: 948, height: 915, alt: "Davinci Media" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/logo.jpg"],
  },
  icons: {
    icon: "/logo.jpg",
  },
};

export function createMetadata(overrides: Metadata): Metadata {
  return {
    ...defaultMetadata,
    ...overrides,
    openGraph: {
      ...defaultMetadata.openGraph,
      ...overrides.openGraph,
    },
    twitter: {
      ...defaultMetadata.twitter,
      ...overrides.twitter,
    },
  };
}
