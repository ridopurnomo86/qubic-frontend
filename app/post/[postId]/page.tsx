import UserEditForm from "./components/user-edit-form";

type PostDetailPropsType = {
  params: Promise<{ postId: string }>;
};

const PostDetail = async ({ params }: PostDetailPropsType) => {
  const { postId } = await params;

  const requestPosts = await fetch(
    `${process.env.BACKEND_BASE_URL}/posts?id=${postId}`,
  );
  const post = await requestPosts.json();

  if (!requestPosts.ok || !post) return "Not Found";

  return (
    <div className="container mx-auto px-10 py-8">
      <p className="text-2xl font-semibold mb-4">Edit Post</p>
      <UserEditForm defaultValue={post[0]} postId={Number(postId)} />
    </div>
  );
};

export default PostDetail;
