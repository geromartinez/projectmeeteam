import React from "react";
import Header from "../components/Header";
import { Routes, Route } from "react-router-dom";
import { Footer } from "../components";
import Home from "../pages/Home";
import About from "../pages/About";
import Clients from "../pages/Clients";
import Candidates from "../pages/Candidates";
import Blog from "../pages/Blog";
import Contacts from "../pages/Contacts";
import BlogPost from "../pages/BlogPost";
import { Post1, Post2, Post3, Post4 } from "../pages/BlogPost";
import { Policy, Term } from "../pages/Policy";
import Login, {
  SignupCandidates,
  SignupClients,
} from "../pages/Login";

import "../../styles/main.scss";
import useScrollTop from "../hooks/useScrollTop";

function App() {
  useScrollTop();
  
  return (
    <>
      <Header />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/candidates" element={<Candidates />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blogpost" element={<BlogPost />} />
        <Route path="/post1" element={<Post1 />} />
        <Route path="/post2" element={<Post2 />} />
        <Route path="/post3" element={<Post3 />} />
        <Route path="/post4" element={<Post4 />} />
        <Route path="/contact-us" element={<Contacts />} />
        <Route path="/terms" element={<Term />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup-clients" element={<SignupClients />} />
        <Route
          path="/signup-candidates"
          element={<SignupCandidates />}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
