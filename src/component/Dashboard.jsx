import UserCard from "./UserCard.jsx";


const Dashboard = () => {
  return (
    <div className="w-full">
      <div className="mb-8">
        <h2 className="text-3xl font-bold">Dashboard</h2>
        <p className="text-slate-400 mt-2">
          Context API data available across deeply nested components
        </p>
      </div>


      <div className="w-full px-6">
        <UserCard />
      </div>
    </div>
  );
};


export default Dashboard;