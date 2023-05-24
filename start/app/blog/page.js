import Link from 'next/link';
import PostList from './PostList';

export const metadata = {
  title: 'Next.js',
};

const Page = () => {
  const posts = [
    {
      id: 'p1',
      title: 'Hello',
      slug: 1,
    },
    {
      id: 'p2',
      title: 'Hello',
      slug: 2,
    },
    {
      id: 'p3',
      title: 'Hello',
      slug: 3,
    },
  ];

  return (
    <div>
      <PostList posts={posts} />
    </div>
  );
};

export default Page;
