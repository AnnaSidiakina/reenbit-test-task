import { Outlet } from "react-router-dom";

import { Suspense } from "react";
import Header from "./Header/Header";
import SearchForm from "./SearchForm/SearchForm";

const Layout = () => {
  return (
    <div>
      <Header />
      <SearchForm />
      <Suspense fallback={<div>...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
export default Layout;
