import { site } from "@/content/site";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        name: site.name,
        url: site.url,
        description: site.description,
      },
      {
        "@type": "Person",
        name: site.name,
        jobTitle: site.role,
        url: site.url,
        email: site.email,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Toronto",
          addressCountry: "CA",
        },
        sameAs: [site.github, site.linkedin],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
