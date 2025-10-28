import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AddNotePage from "./pages/AddNotePage";
import ArchivedNotePage from "./pages/ArchivedNotesPage";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add" element={<AddNotePage />} />
        <Route path="/archived" element={<ArchivedNotePage />} />
      </Routes>
    </>
  );
}

export default App;
