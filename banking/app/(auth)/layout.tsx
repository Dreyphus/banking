import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "The banking App",
  description: "Banking platform",
  icons: {icon: '/icons/logo.svg'}
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
        {children}
    </main>

  );
}
