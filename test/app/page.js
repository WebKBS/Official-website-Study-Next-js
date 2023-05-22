import Image from 'next/image';
import Post from '@/pages/about';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <Link href="/about">Hello World</Link>
    </main>
  );
}
