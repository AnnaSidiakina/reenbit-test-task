import { Outlet } from "react-router-dom";

import { Suspense } from "react";
import Header from "./Header/Header";

const Layout = () => {
  return (
    <div>
      <Header />
      <Suspense fallback={<div>...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
export default Layout;
