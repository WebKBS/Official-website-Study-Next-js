import Link from 'next/link';

const PostList = async () => {
  const posts = await fetch('https://jsonplaceholder.typicode.com/posts').then((res) => res.json());

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <Link href={`/blog/${post.id}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default PostList;
