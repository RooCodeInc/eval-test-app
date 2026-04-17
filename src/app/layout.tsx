import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Eval Test App',
  description: 'Minimal Next.js app for onboarding eval runs',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
