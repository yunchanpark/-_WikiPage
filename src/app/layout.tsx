import { OverlayProvider } from '@/packages/overlay';
import ReactQueryProvider from '@/providers/ReactQueryProvider';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
    title: '위키',
    description: '위키페이지',
    keywords: ['위키', '게시판'],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <ReactQueryProvider>
                    <OverlayProvider>{children}</OverlayProvider>
                </ReactQueryProvider>
            </body>
        </html>
    );
}
