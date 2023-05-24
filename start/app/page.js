import styles from './page.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <main className={styles.main}>
      <Link href={'/dashboard'}>어바웃 페이지 가는길</Link>
      <Link href={'/blog'}>블로그 페이지 가는길</Link>
    </main>
  );
}
