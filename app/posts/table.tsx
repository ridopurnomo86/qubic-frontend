"use client";

import useSWR from "swr";
import { useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import columns from "./columns";
import CoreDataTable from "@/components/core/data-display/DataTable";
import Pagination from "@/components/core/data-entry/Pagination";
import Spinner from "@/components/core/loader/Spinner";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const DataTable = () => {
  const router = useRouter();

  const searchParams = useSearchParams();
  const page = searchParams.get("_page");
  const limit = useRef(10);

  const [pageIndex, setPageIndex] = useState(Number(page) || 1);
  const [filter, setFilter] = useState("title");

  const { data: postsData, isLoading } = useSWR(
    `${process.env.BACKEND_BASE_URL}/posts?_page=${pageIndex}&_limit=${limit.current}`,
    fetcher,
    {},
  );

  if (isLoading)
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <Spinner />
      </div>
    );

  return (
    <>
      <p className="text-2xl font-semibold">Posts</p>
      <CoreDataTable
        filterColumn={filter}
        filterData={[
          { name: "Title", value: "title" },
          { name: "Body", value: "body" },
        ]}
        onValueChange={(prev) => setFilter(prev)}
        placeholder="Select Filter"
        selectPlaceholder="Select"
        columns={columns}
        data={postsData}
      />
      <Pagination
        className="mt-4"
        onPrevious={() => {
          if (pageIndex >= 2) {
            setPageIndex((prev) => prev - 1);
            router.push(`/posts?_page=${pageIndex - 1}`);
          }
        }}
        onNext={() => {
          if (postsData?.length <= limit) return null;
          setPageIndex((prev) => prev + 1);
          router.push(`/posts?_page=${pageIndex + 1}`);
        }}
      />
    </>
  );
};

export default DataTable;
