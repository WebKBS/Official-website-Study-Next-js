import Link from 'next/link';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Next App 연습중',
  description: '공식 홈페이지에서 Next 연습중',
};

export default function RootLayout({ children }) {
  return (
    // 루트 레이아웃은 반드시 HTML과 body가 포함 되야함! - 최상위 레이아웃
    <html lang="en">
      <body className={inter.className}>
        <div>여기는 모달모달</div>
        <header>헤더</header>
        {children}
        <footer>
          <p>푸터</p>
          <p>
            <Link href={'/'}>홈</Link>
          </p>
          <Link href={'/blog'}>블로그</Link>
        </footer>
      </body>
    </html>
  );
}
