import React from "react";

const Layout = ({ children }) => {
  return (
    <div>
      <h1 className="text-3xl">DashboardPage</h1>
      <div>{children}</div>
    </div>
  );
};

export default Layout;
