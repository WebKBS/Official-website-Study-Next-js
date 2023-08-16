import Link from 'next/link';

function SecondLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Link href="/about/second/third">Third</Link>
      {children}
    </div>
  );
}

export default SecondLayout;
