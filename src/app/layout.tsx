import type {Metadata} from 'next';
import {Inter} from 'next/font/google';

import './styles/globals.css';

const inter = Inter({subsets: ['latin']});

export const metadata: Metadata = {
  title: 'Annrys',
  description:
    'piece, instalacje grzewcze, hydraulika, gazowe, wodne, kanalizacyjne, ogrzewanie podłogowe, ogrzewanie gazowe, ogrzewanie węglowe, ogrzewanie elektryczne, ogrzewanie olej',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={inter.className}
        style={{
          backgroundImage: "url('/images/annrys.png')",
          backgroundAttachment: 'fixed',
          backgroundSize: 'cover',
        }}>
        <main>{children}</main>
      </body>
    </html>
  );
}
