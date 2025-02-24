import type { Metadata } from "next";
import "./globals.css"
import '@mantine/core/styles.css'
import { ColorSchemeScript, MantineProvider, mantineHtmlProps } from '@mantine/core';

export const metadata: Metadata = {
  title: "Nhựa Miền Nam",
  description: "Mũ bảo hiểm giá gốc",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider>{children}</MantineProvider>
      </body>
    </html>
  );
}
