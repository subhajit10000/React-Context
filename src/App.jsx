import "./App.css";
import Login from "./component/Login.jsx";
import Profile from "./component/Profile.jsx";
import UserCard from "./component/UserCard.jsx";
import UserContextProvider from "./context/UserContextProvider.jsx";
function App() {
  return (
    <>
      <UserContextProvider>
        <div className="min-h-screen bg-linear-to-br from-slate-900 via-indigo-950 to-slate-950 text-white">
          <div className="max-w-5xl mx-auto px-6 py-18">
            <h1 className="text-center text-5xl font-extrabold mb-10 bg-linear-to-r from-cyan-400 to-purple-500  bg-clip-text text-transparent">
              React Context API Demo
            </h1>


            <Login />


            <div className="mt-8">
              <Profile />
            </div>
          </div>
        </div>
      </UserContextProvider>
    </>
  );
}


export default App;