import Link from 'next/link';

const About = () => {
  return (
    <div>
      <h2>폴더 세그먼트당 page.js 하나씩 필요!</h2>
      <p>세그먼트 안의 2뎁스 폴더 2종류는 가능하나,</p>
      <p>Path로 사용할수 있는 페이지는 하나밖에 사용할수 없다.</p>
      <p>나머지 폴더들은 이미지나, css 같은것을 넣어서 사용할 수 있음</p>
      <Link href={'/'}>홈으로</Link>
    </div>
  );
};

export default About;
