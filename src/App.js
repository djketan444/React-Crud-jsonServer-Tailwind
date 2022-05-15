import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Pages/Navbar";
import AddUser from "./Pages/user/AddUser";
import Edit from "./Pages/user/Edit";
import User from "./Pages/user/User";


function App() {
  return (
    <>
      <div className="App">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users/:id" element={<User/>}/>
          <Route path="/add-user" element={<AddUser/>} />
          <Route path="/edit-user/:id" element={<Edit/>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
