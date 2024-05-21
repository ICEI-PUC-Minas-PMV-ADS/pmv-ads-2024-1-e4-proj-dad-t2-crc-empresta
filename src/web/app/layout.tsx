import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ProtectedRouteWrapper from "./auth/protected";
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
// import { NextAppDirEmotionCacheProvider } from 'tss-react/next/appDir';
import { theme } from '@/app/lib/theme';
import '@mantine/core/styles.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CRC Empresta",
  description: "Sistema de empréstimos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <head><ColorSchemeScript defaultColorScheme='light' />
      </head>
      <ProtectedRouteWrapper>
        <body className={inter.className} style={{background:theme.colors.blue[9]}}>
        {/* <NextAppDirEmotionCacheProvider options={{ key: 'css' }}> */}
          <MantineProvider defaultColorScheme='light' theme={theme}>
            {children}
          </MantineProvider>
        {/* </NextAppDirEmotionCacheProvider> */}
        </body>
      </ProtectedRouteWrapper>
    </html>
  );
}
