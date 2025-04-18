import type { Metadata } from 'next';
import '../globals.css';
import { Poppins } from 'next/font/google';

const poppins = Poppins({ weight: ['300', '400', '500', '600', '700'], subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Dashboard | TokoKu',
  description: 'Savoring Halal Delights Daily.',
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${poppins.className} flex min-h-screen`}>{children}</body>
    </html>
  );
}
