import Link from 'next/link';

function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Link href="/about/second">Second</Link>
      {children}
    </div>
  );
}

export default AboutLayout;
