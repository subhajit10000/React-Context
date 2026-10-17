import React from "react";
import UserStats from "./UserStats";


const UserDetails = () => {
  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
      <div className="flex items-center gap-3  mb-4">
        <div className="w-10 h-10 rounded-full bg-linear-to-r from-cyan-500 to-blue-500 flex items-center justify-center">
          👤
        </div>
        <div>
          <h4 className="text-xl font-bold text-white">
            User Details Component
          </h4>
          <p className="text-sm text-slate-400 ">Level 2 Component</p>
        </div>
      </div>


      <div className="border-l-4 border-yellow-500 pl-4 mt-4">
        <UserStats />
      </div>
    </div>
  );
};


export default UserDetails;