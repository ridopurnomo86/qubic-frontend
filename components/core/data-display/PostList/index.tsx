import PostCard from "../../cards/PostCard";
import PostDataType from "@/types/data/posts";

type PostCardListPropsType = {
  posts: Array<PostDataType>;
};

const PostCardList = ({ posts }: PostCardListPropsType) => (
  <div className="space-y-4">
    {posts.map((post) => (
      <PostCard
        body={post.body}
        title={post.title}
        key={post.id}
        navigateTo={`/post/${post.id}`}
      />
    ))}
  </div>
);

export default PostCardList;
