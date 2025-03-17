import UserProfileCard from "@/components/core/cards/UserProfileCard";
import PostCardList from "@/components/core/data-display/PostList";

type UserDetailPropsType = {
  params: Promise<{ userId: string }>;
};

const UserDetail = async ({ params }: UserDetailPropsType) => {
  const { userId } = await params;

  const request = await fetch(
    `${process.env.BACKEND_BASE_URL}/users/${userId}`,
  );
  const requestPosts = await fetch(
    `${process.env.BACKEND_BASE_URL}/posts?userId=${userId}`,
  );
  const user = await request.json();
  const posts = await requestPosts.json();

  if (!request.ok || !requestPosts.ok || !user || !posts) return "Not Found";

  return (
    <div className="container mx-auto px-10 py-8">
      <UserProfileCard name={user.name} email={user.email} phone={user.phone} />
      <div className="mt-4 space-y-2">
        <PostCardList posts={posts} />
      </div>
    </div>
  );
};

export default UserDetail;
