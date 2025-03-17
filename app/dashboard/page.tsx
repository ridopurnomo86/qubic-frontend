import DataTable from "./table";
import InformationCard from "@/components/core/cards/InformationCard";

const Dashboard = async () => {
  const request = await fetch(`${process.env.BACKEND_BASE_URL}/users`);
  const users = await request.json();

  return (
    <div className="container mx-auto px-10 py-8">
      <InformationCard title={users.length} subtitle="Total users volume" />
      <DataTable users={users} />
    </div>
  );
};

export default Dashboard;
