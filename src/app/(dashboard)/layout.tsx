import type { Metadata } from 'next';
import '../globals.css';
import SidebarDash from '@/components/organism/SidebarDash';
import NavbarDash from '@/components/organism/NavbarDash';
import { Poppins } from 'next/font/google';

const poppins = Poppins({ weight: ['300', '400', '500', '600', '700'], subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Dashboard | TokoKu',
  description: 'Savoring Halal Delights Daily.',
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${poppins.className} flex min-h-screen`}>
        <SidebarDash />
        <div className='flex flex-1 flex-col'>
          <NavbarDash />
          <main className='flex-1 bg-gray-200 p-6'>{children}</main>
          {/* <FooterDash /> */}
        </div>
      </body>
    </html>
  );
}
