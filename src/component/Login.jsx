import { useContext, useState } from "react";
import UserContext from "../context/UserContext.jsx";


const Login = () => {
  const { user, setUser } = useContext(UserContext);


  const [formData, setFormData] = useState({
    username: "",
    email: "",
    age: "",
    role: "",
    password: "",
  });


  //   handle change
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };


  // handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault();
    // set data to the context
    setUser(formData);
  };


  return (
    <div className="w-fill">
      <form
        onSubmit={handleSubmit}
        className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-xl"
      >
        <h2 className=" text-3xl text-slate-400 mb-8">Login Details</h2>
        <p className="text-slate-400 mb-8">Enter your details</p>


        <div className="space-y-5">
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
          />


          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
          />



          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
          />


          <input
            type="number"
            name="age"
            placeholder="Age"
            min="1"
            max="100"
            value={formData.age}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
          />



          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            placeholder="Select Role"
            className="w-full px-4 py-3  bg-white/5 border-white/20 rounded-xl"
          >
            <option className="bg-slate-600 rounded-xl " value="student">
              Student
            </option>
            <option className="bg-slate-600 rounded-xl " value="developer">
              Developer
            </option>
            <option className="bg-slate-600 rounded-xl " value="admin">
              Admin
            </option>
          </select>



          <button
            type="submit"
            className="w-full py-3 rounded-xl font-semibold bg-linear-to-r from-cyan-800 to-purple-500 hover:scale-[1.05] transition-all duration-300 shadow-xl shadow-cyan-500/20"
          >
            Update Context
          </button>
        </div>
      </form>
    </div>
  );
};


export default Login;