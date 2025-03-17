import PostDataType from "@/types/data/posts";

type PostCardListPropsType = {
  posts: Array<PostDataType>;
};

const PostCardList = ({ posts }: PostCardListPropsType) =>
  posts.map((post: PostDataType) => (
    <div className="border p-4 rounded" key={post.id}>
      <p className="text-md font-semibold text-neutral-800 dark:text-neutral-100">
        {post.title}
      </p>
      <p className="text-sm font-medium text-neutral-600 dark:text-neutral-400">
        {post.body}
      </p>
    </div>
  ));

export default PostCardList;
