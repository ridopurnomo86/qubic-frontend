import columns from "./columns";
import InformationCard from "@/components/core/cards/InformationCard";
import DataTable from "@/components/core/DataTable";

const Dashboard = async () => {
  const request = await fetch(`${process.env.BACKEND_BASE_URL}/users`);
  const users = await request.json();

  return (
    <div className="container mx-auto px-10 py-8">
      <InformationCard title={users.length} subtitle="Total users volume" />
      <DataTable columns={columns} data={users} />
    </div>
  );
};

export default Dashboard;
