import Link from 'next/link';
import PostList from './PostList';

export const metadata = {
  title: 'Next.js',
};

const Page = async () => {
  //const posts = await [];
  const posts = await fetch('https://jsonplaceholder.typicode.com/posts').then((res) => res.json());

  return (
    <>
      <PostList posts={posts} />
    </>
  );
};

export default Page;
