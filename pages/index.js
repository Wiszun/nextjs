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
        <PostLink postId="hello-nextjs" />
        <PostLink postId="learn-nextjs" />
        <PostLink postId="deploy-nextjs" />
      </ul>
    </>
  );
}

export default withLayout(Blog);