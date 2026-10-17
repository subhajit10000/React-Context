import React, { useContext } from "react";
import UserContext from "../context/UserContext.jsx";


const UserStats = () => {
  const { user } = useContext(UserContext);


  return (
    <div>
      {!user ? (
        <>
          <div className="mt-4 rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-red-400">
            No user present.
          </div>
        </>
      ) : (
        <>
          <div className="mt-4 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br  from-slate-800 to-slate-900 shadow-xl">
            {/* header  */}


            <div className="border-b border-white/10 p-5">
              <h3 className="text-xl font-bold text-white">User Information</h3>
              <p className="text-sm text-slate-400">
                Data fetched directly from Context API.
              </p>
            </div>


            {/* user detils  */}
            <div className="space-y-4 p-5">
              <div className="flex items-center justify-evenly rounded-xl bg-white/10">
                <span className="text-slate-400">UserName</span>
                <span className="font-medium text-cyan-400">
                  {user.username}
                </span>
              </div>
              <div className="flex items-center justify-evenly rounded-xl bg-white/10">
                <span className="text-slate-400">Email</span>
                <span className="font-medium text-cyan-400">{user.email}</span>
              </div>
              <div className="flex items-center justify-evenly rounded-xl bg-white/10">
                <span className="text-slate-400">Age</span>
                <span className="font-medium text-cyan-400">{user.age}</span>
              </div>
              <div className="flex items-center justify-evenly rounded-xl bg-white/10">
                <span className="text-slate-400">Role</span>
                <span className="font-medium text-cyan-400">{user.role}</span>
              </div>
              <div className="flex items-center justify-evenly rounded-xl bg-white/10">
                <span className="text-slate-400">Password</span>
                <span className="font-medium text-cyan-400">
                  {user.password}
                </span>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};


export default UserStats;