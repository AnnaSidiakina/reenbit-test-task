import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import GoogleAuth from "./GoogleAuth/GoogleAuth";
import Loader from "./Loader/Loader";

const Layout = () => {
  return (
    <div>
      <GoogleAuth />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};
export default Layout;
