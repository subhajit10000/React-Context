import UserDetails from "./UserDetails.jsx";


const UserCard = () => {
  return (
    <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-6 shadow-xl hover:shadow-cyan-500/20 transition-all duration-300">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-full bg-linear-to-r from-cyan-500 to-blue-500 flex items-center justify-center">
          🙉
        </div>


        <div>
          <h3 className="text-xl font-bold text-white">User card Components</h3>
          <p className="text-sm text-slate-400 ">Level 1 Component</p>
        </div>
      </div>


      <div className="border-l-4 border-cyan-500 pl-4 mt-4">
        <UserDetails />
      </div>
    </div>
  );
};


export default UserCard;