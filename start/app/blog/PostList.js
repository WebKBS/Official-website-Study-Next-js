import Link from 'next/link';

const PostList = ({ posts }) => {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id} post={post}>
          <Link href={`/blog/${post.id}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default PostList;
