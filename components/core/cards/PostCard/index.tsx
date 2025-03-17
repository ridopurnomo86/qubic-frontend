type PostCardPropsType = {
  title: string;
  body: string;
};

const PostCard = ({ title, body }: PostCardPropsType) => (
  <article className="border p-4 rounded">
    <p className="text-md font-semibold text-neutral-800 dark:text-neutral-100">
      {title}
    </p>
    <p className="text-sm font-medium text-neutral-600 dark:text-neutral-400">
      {body}
    </p>
  </article>
);

export default PostCard;
