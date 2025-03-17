"use client";

import { useState } from "react";
import columns from "./columns";
import CoreDataTable from "@/components/core/data-display/DataTable";
import UsersDataType from "@/types/data/users";

const DataTable = ({ users }: { users: UsersDataType[] }) => {
  const [filter, setFilter] = useState("name");

  return (
    <CoreDataTable
      filterColumn={filter}
      filterData={[
        { name: "Name", value: "name" },
        { name: "Email", value: "email" },
        { name: "Username", value: "username" },
      ]}
      onValueChange={(prev) => setFilter(prev)}
      placeholder="Select Filter"
      selectPlaceholder="Select"
      columns={columns}
      data={users}
    />
  );
};

export default DataTable;
