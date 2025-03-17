"use client";

import useSWR from "swr";
import { useRef, useState } from "react";
import columns from "./columns";
import CoreDataTable from "@/components/core/data-display/DataTable";
import Pagination from "@/components/core/data-entry/Pagination";
import Spinner from "@/components/core/loader/Spinner";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const DataTable = () => {
  const limit = useRef(10);
  const [pageIndex, setPageIndex] = useState(1);
  const [filter, setFilter] = useState("title");

  const {
    data: postsData,
    error,
    isLoading,
  } = useSWR(
    `${process.env.BACKEND_BASE_URL}/posts?_page=${pageIndex}&_limit=${limit.current}`,
    fetcher,
    {},
  );

  if (isLoading)
    return (
      <div className="flex items-center justify-center min-h-[40vh]">
        <Spinner />
      </div>
    );

  return (
    <>
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
        activePage={pageIndex}
        pages={[1, 2, 3]}
        onPrevious={() => {
          if (pageIndex >= 2) {
            setPageIndex((prev) => prev - 1);
          }
        }}
        onNext={() => {
          if (postsData?.length <= limit) return null;
          return setPageIndex((prev) => prev + 1);
        }}
      />
    </>
  );
};

export default DataTable;
