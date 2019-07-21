import { useRouter } from 'next/router';
import withLayout from '../../components/MyLayout.js';

const Post = () => {
  const router = useRouter();

  return (
    <>
      <h1>{router.query.postId}</h1>
      <p>This is the blog post content.</p>
    </>
  );
}

export default withLayout(Post);