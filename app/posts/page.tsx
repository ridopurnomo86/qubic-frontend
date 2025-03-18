"use client";

import { Suspense } from "react";
import DataTable from "./table";

const Posts = () => (
  <div className="container mx-auto px-10 py-8">
    <Suspense>
      <DataTable />
    </Suspense>
  </div>
);

export default Posts;
