import TopBar from "./components/topbar/TopBar"
import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings.jsx";
import Login from "./pages/login/Login";
import Contact from "./pages/contact/Contact";
import Register from "./pages/register/Register";
import { About } from "./pages/login/about/About";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";
 

function App() {
  const {user}=useContext(Context);
  return (
    <Router>
      <TopBar />
      <Routes>
        <Route exact path="/"
          element={<Home/>}>
        </Route>

        <Route path="/register"
          element={user ? <Home/>:<Register/>}>
        </Route>

        <Route path="/login" 
          element={user ? <Home/>:<Login/>}> 
        </Route>

        <Route path="/contact" 
          element={user ? <Home/>:<Contact/>}> 
        </Route>

        <Route path="/about" 
          element={user ? <Home/>:<Contact/>}> 
        </Route>

        <Route path="/write" 
          element={user ? <Write />:<Register />}>
        </Route>

        <Route path="/settings" 
          element={user ? <Settings/>:<Register/>}>
        </Route>

        <Route path="/post/:postId" 
          element={<Single/>}>
        </Route>

      </Routes>
    </Router>
  )
}

export default App;
