import React, { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Toast from "./components/ToastContainer/ToastContainer.jsx";

const Characters = lazy(() => import("./pages/Characters.jsx"));
const OneCharacter = lazy(() => import("./pages/OneCharacter.jsx"));
const PageNotFound = lazy(() => import("./pages/PageNotFound.jsx"));
function App() {
  return (
    <div>
      <Toast />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Characters />} />
          <Route path="/character/:characterId" element={<OneCharacter />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
