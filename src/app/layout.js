import { Inter, Playfair_Display, Syne } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['700', '800', '900'],
  variable: '--font-playfair',
  display: 'swap',
});

const syne = Syne({
  subsets: ['latin'],
  weight: ['700', '800'],
  variable: '--font-syne',
  display: 'swap',
});

export const metadata = {
  title: 'She Can Foundation | Global Vision, Local Action',
  description:
    'She Can Foundation empowers women through education, advocacy, and community support. Registered under the Indian Society Act, 1860.',
  keywords: 'women empowerment, NGO, She Can Foundation, India, advocacy, education',
  openGraph: {
    title: 'She Can Foundation | Global Vision, Local Action',
    description: 'Empowering women through local action with a global vision.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${syne.variable} scroll-smooth`}>
      <body className="bg-[#FAFAFA] text-[#111111] antialiased">
        {children}
      </body>
    </html>
  );
}
