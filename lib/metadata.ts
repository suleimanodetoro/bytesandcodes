// lib/metadata.ts
const siteConfig = {
    title: "Bytes & Codes Initiative",
    description: "Empowering communities through technology and education. Building tomorrow's tech leaders through mentorship, education, and innovation.",
    url: "https://bytesandcodes.org",
    siteName: "Bytes & Codes",
    locale: "en_UK",
    type: "website",
    keywords: [
      "tech education",
      "coding bootcamp",
      "tech mentorship",
      "Nigeria tech",
      "tech community",
      "coding education",
      "tech skills",
      "digital literacy"
    ],
    authors: [
      { name: "Bytes & Codes Team" }
    ],
    creator: "Bytes & Codes Initiative",
    publisher: "Bytes & Codes Initiative",
    robots: "index, follow",
    themeColor: "#22c55e", // Your primary-600 color
    icons: {
      icon: "/favicon.ico",
    },
    openGraph: {
      type: "website",
      siteName: "Bytes & Codes Initiative",
      locale: "en_US",
      images: [{
        url: "/images/coding_image.jpg",
        width: 1200,
        height: 630,
        alt: "Bytes & Codes Initiative"
      }]
    },
    social: {
      instagram: "@bytesandcodes"
    }
  };
  
  export default siteConfig;