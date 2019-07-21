import withLayout from "../components/MyLayout";
import Link from 'next/link';

const PostLink = props => (
  <li>
    <Link href="/post/[postId]" as={`/post/${props.postId}`}>
      <a>{props.postId}</a>
    </Link>
  </li>
);

const Blog = () => {
  return (
    <>
      <h1>My Blog</h1>
      <ul>
        <PostLink postId="Hello Next.js" />
        <PostLink postId="Learn Next.js is awesome" />
        <PostLink postId="Deploy apps with Zeit" />
      </ul>
    </>
  );
}

export default withLayout(Blog);