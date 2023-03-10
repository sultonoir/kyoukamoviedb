import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Tv from "./pages/Tv";
import Movies from "./pages/Movies";
import Navbar from "./components/Navbar";
import Details from "./pages/Details";
import Search from "./pages/Search";
import NotFound from "./pages/NotFound";
import { AuthContextProvider } from "./context/AuthContext";
import User from "./pages/User";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Tv" element={<Tv />} />
          <Route path="/Movie" element={<Movies />} />
          <Route path="/:type/:id" element={<Details />} />
          <Route path="/Search/:query/" element={<Search />} />
          <Route
            path="/User"
            element={
              <ProtectedRoute>
                <User />
              </ProtectedRoute>
            }
          />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<SignUp />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </AuthContextProvider>
    </>
  );
}
