import { SidebarItems as SideBar } from "@/src/components/layout/items/SideBarItems";
import "@/src/styles/global.css";
import "primeflex/primeflex.css";
import "primeicons/primeicons.css";
import "primereact/resources/primereact.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import React from "react";
import DefaultLayout from "../components/layout/DefaultLayout";

export default function App({ Component, pageProps }) {
  return (
    <React.Fragment>
      <DefaultLayout sidebarItems={SideBar}>
        <Component {...pageProps} />
      </DefaultLayout>
    </React.Fragment>
  );
}
