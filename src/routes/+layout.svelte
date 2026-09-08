<script lang="ts">
  import './layout.css';
  import favicon from '$lib/assets/favicon.svg';

  let { children } = $props();

  // Primary SEO Metadata
  const siteName = 'CureSockets';
  const title = 'CureSockets | Encrypted LAN Proxy for Healthcare';
  const description =
    'Zero-trust, post-quantum encrypted LAN proxy for healthcare facilities. Protecting HL7, DICOM, and legacy medical device streams across hospital networks.';
  const siteUrl = 'https://curesockets.pages.dev'; // Replace with your final domain/Cloudflare Pages URL
  const ogImageUrl = `${siteUrl}/og-image.webp`; // 1200x630px social preview image stored in static/og-image.png
</script>

<svelte:head>
  <!-- Basic Metadata -->
  <title>{title}</title>

  <meta name="description" content={description} />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="robots" content="index, follow" />
  <meta name="author" content="CureSockets Team" />
  <meta
    name="keywords"
    content="CureSockets, Healthcare Security, Hospital LAN Proxy, Medical Device Encryption, HL7 Encryption, DICOM Proxy, PQC TLS, Zero Trust Healthcare, Post Quantum Cryptography"
  />

  <!-- Canonical Link -->
  <link rel="canonical" href={siteUrl} />

  <!-- Favicon and App Icons -->
  <link rel="icon" type="image/svg+xml" href={favicon} />
  <link rel="apple-touch-icon" href={favicon} />
  <meta name="theme-color" content="#0A0F1D" />

  <!-- Open Graph / Facebook / LinkedIn -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content={siteUrl} />
  <meta property="og:site_name" content={siteName} />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:image" content={ogImageUrl} />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:image:alt" content="CureSockets - Encrypted LAN Proxy for Healthcare" />

  <!-- Twitter / X Cards -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:url" content={siteUrl} />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:image" content={ogImageUrl} />

  <!-- Structured Data (JSON-LD) for Search Engine Rich Snippets -->
  <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "{siteName}",
      "applicationCategory": "SecurityApplication",
      "operatingSystem": "Cross-platform",
      "description": "{description}",
      "url": "{siteUrl}",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      }
    }
  </script>
</svelte:head>

{@render children()}