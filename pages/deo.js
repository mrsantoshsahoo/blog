import Link from 'next/link';

function DEmo({ posts }) {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <Link href={`/demo/${(encodeURIComponent(post.title.replaceAll(' ','-')))}`}>
            {post.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default DEmo;
