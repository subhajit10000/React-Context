import { useContext } from "react";


import UserContext from "../context/UserContext.jsx";
import Dashboard from "../component/Dashboard.jsx";


const Profile = () => {
  const { user } = useContext(UserContext);
  return (
    <div className="w-full px-6 py-8">
      {user ? (
        // user data access


        <>
          <div className="mb-6 rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-5">
            <h2 className="text-3xl font-bold text-white">
              Welcome, {user.username}
            </h2>


            <p className="mt-2 text-slate-300">
              Context API data is now available across all nexted component.
            </p>
          </div>


          <div className="w-full">
            <Dashboard />
          </div>
        </>
      ) : (
        <>
          <div className="rounded-2xl border border-red-500/20 bg-red-500/10 p-5 text-center">
            <p className="text-red-400 text-lg"> Please login First</p>
          </div>
        </>
      )}
    </div>
  );
};


export default Profile;