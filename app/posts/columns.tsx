"use client";

import { ColumnDef } from "@tanstack/react-table";
import PostDataType from "@/types/data/posts";

const columns: ColumnDef<PostDataType>[] = [
  {
    accessorKey: "id",
    header: "Id",
  },
  {
    accessorKey: "userId",
    header: "UserId",
  },
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "body",
    header: "Body",
  },
];

export default columns;
