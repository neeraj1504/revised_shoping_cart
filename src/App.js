
// import "./App.css";
// import Navbar from "./Components/Navbar";

// import Home from "./pages/Home";
// import Cart from "./pages/Cart";

// import { BrowserRouter as Router, Route,Routes, Switch, Link } from 'react-router-dom';
// import Login from './Components/Login';
// import SignUp from "./Components/SignUp";

// function App() {
//   return (
//     <div  >
//       <div className="bg-slate-900"  >
//         <Navbar />
//       </div>
//       {/* <div>
//       <Login />
//       </div> */}
//        <nav className="flex justify-center p-4 bg-gray-200">
//                     <Link to="/login" className="px-4">Login</Link>
//                     <Link to="/signup" className="px-4">Sign Up</Link>
//                 </nav>
//                 <Switch>
//                     <Route path="/login" component={Login} />
//                     <Route path="/signup" component={SignUp} />
//                     <Route path="/" exact component={Login} />
//                 </Switch>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/cart" element={<Cart />} />
//       </Routes>

//     </div>
//   );
// }

// export default App;





// import "./App.css";
// import Navbar from "./Components/Navbar";
// import Home from "./pages/Home";
// import Cart from "./pages/Cart";
// import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
// import Login from "./Components/Login";
// import SignUp from "./Components/SignUp";

// function App() {
//   return (
//     <div>
//       <div className="bg-slate-900">
//         <Navbar />
//       </div>

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/cart" element={<Cart />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signUp" element={<SignUp />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;


// src/App.js

import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import {Route, Routes} from "react-router-dom";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import Footer from "./Components/Footers";
import Button from "./Components/Button"
function App() {
  return (
    
      <div>
        <div className="bg-slate-900">
          <Navbar />
        </div>
        <div>
          <Button/>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
        <div>
          <Footer/>
        </div>
      </div>
    
  );
}

export default App;
