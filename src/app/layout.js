import "./globals.css";

export const metadata = {
  title: "Shahad Alsaneea - Portfolio",
  description:
    "Welcome to my interactive digital world, where creativity meets technology. Explore my portfolio to see how I bring ideas to life through innovative design and development.",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&family=Playpen+Sans+Arabic:wght@100..800&family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-ui-bg text-ui-text">
        {children}
      </body>
    </html>
  );
}
