import React, { PropsWithChildren } from "react";
import Footer from "../footer/footer";
const AdminLayout = (props: PropsWithChildren) => {
  return (
    <>
      <Footer />
      {props.children}
    </>
  );
};
export default AdminLayout;