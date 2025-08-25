import React from "react";

const AdminLayout = () => {
  return (
    <div className="admin-layout">
      Admin Layout
      <aside>
        <Outlet />
      </aside>
    </div>
  );
};

export default AdminLayout;
