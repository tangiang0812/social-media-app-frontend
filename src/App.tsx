import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { ChakraProvider } from "@chakra-ui/react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faThumbsUp as fasThumbsUp,
  faEllipsis,
  faShareFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp as farThumbsUp } from "@fortawesome/free-regular-svg-icons";

library.add(fasThumbsUp, farThumbsUp, faEllipsis, faShareFromSquare);

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <ChakraProvider>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
