import React, { lazy } from "react";
// import  Characters  from "./pages/Characters.jsx";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";

const Characters = lazy(() => import("./pages/Characters.jsx"));
const OneCharacter = lazy(() => import("./pages/OneCharacter.jsx"));
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Characters />} />
          <Route path="/character/:characterId" element={<OneCharacter />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
