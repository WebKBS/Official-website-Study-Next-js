import Link from 'next/link';

const PostList = ({ posts }) => {
  return (
    <ul>
      {posts.map((post) => {
        <li key={post.id}>
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </li>;
      })}
    </ul>
  );
};

export default PostList;
