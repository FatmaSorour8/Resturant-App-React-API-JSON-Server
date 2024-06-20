import React from "react";
import MyNav from "../components/MyNav";
import { Outlet } from "react-router-dom";
import MyFooter from "../components/MyFooter";

export default function SharedLayout() {
  return (
    <>
      <MyNav />
      <Outlet />
      <MyFooter />
    </>
  );
}
