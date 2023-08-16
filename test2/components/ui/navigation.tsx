import Link from 'next/link';
function Navigation() {
  return (
    <div>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
    </div>
  );
}

export default Navigation;
