import { MoreHorizontal } from "lucide-react";
import Dropdown from "../../Dropdown";

type PostCardPropsType = {
  title: string;
  body: string;
  navigateTo: string;
};

const PostCard = ({ title, body, navigateTo }: PostCardPropsType) => (
  <article className="border p-4 rounded">
    <div className="flex items-center justify-between w-full">
      <p className="text-md font-semibold text-neutral-800 dark:text-neutral-100">
        {title}
      </p>
      <Dropdown
        label="Actions"
        menuItems={[
          {
            id: 1,
            name: "Edit post",
            isItemNavigate: true,
            navigate: navigateTo,
          },
        ]}
        triggerComp={<MoreHorizontal className="h-4 w-4" />}
      />
    </div>
    <p className="text-sm font-medium text-neutral-600 dark:text-neutral-400">
      {body}
    </p>
  </article>
);

export default PostCard;
