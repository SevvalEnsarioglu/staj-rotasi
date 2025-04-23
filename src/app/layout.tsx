export const metadata = {
    title: 'Staj Rotası',
    description: 'Register page',
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html>
        <body>{children}</body>
        </html>
    );
}
