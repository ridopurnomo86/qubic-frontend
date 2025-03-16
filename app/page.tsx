import columns from "./columns";
import InformationCard from "@/components/core/cards/InformationCard";
import DataTable from "@/components/core/DataTable";

const MainHome = async () => {
  const data = await fetch(`${process.env.BACKEND_BASE_URL}/users`);
  const posts = await data.json();

  // const data = [
  //   {
  //     id: "728ed52f",
  //     amount: 100,
  //     status: "pending",
  //     email: "m@example.com",
  //   },
  // ];

  return (
    <div className="container mx-auto px-10 py-8">
      <InformationCard title={posts.length} subtitle="Total users volume" />
      <DataTable columns={columns} data={posts} />
    </div>
  );
};

export default MainHome;
