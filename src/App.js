import React from "react";
import Videos from "./components/VideosList/Videos";
import VideosContextProvider from "./context/videosContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Add from "./components/Add/Add";
import Edit from "./components/Edit/Edit";
import Header from "./components/Header/Header";
import Details from "./components/Details/Details";

const App = () => {
  return (
    <VideosContextProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/videos" element={<Videos />} />
          <Route path="/add" element={<Add />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
        <h1>Footer</h1>
      </BrowserRouter>
    </VideosContextProvider>
  );
};

export default App;
