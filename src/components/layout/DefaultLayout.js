import Image from "next/image";
import CustomLink from "../CustomLink";
import AppSideBar from "./AppSideBar";
import logo from "../../../public//assets/images/logo2.png";
import { SpeedDial } from "primereact/speeddial";
import { Toast } from "primereact/toast";
import { useRef } from "react";

export default function DefaultLayout({ children, sidebarItems }) {
  const toast = useRef();

  const items = [
    {
      label: "Profil Bilgilerini Düzenle",
      icon: "pi pi-pencil",
      command: () => {
        toast.current.show({
          severity: "info",
          summary: "Düzenle",
          detail: "Profil Bilgileri",
        });
      },
    },
    {
      label: "Update",
      icon: "pi pi-folder",
      command: () => {
        toast.current.show({
          severity: "success",
          summary: "Uygulama Kayıtları",
          detail: "Uygulama Kayıtları Güncellendi",
        });
      },
    },
    {
      label: "Çıkış Yap",
      icon: "pi pi-external-link",
      command: () => {
        alert("Çıkış Yapıldı");
      },
    },
  ];

  return (
    <div
      id="layout"
      className="flex flex-column h-screen overflow-y-auto bg-gray-100"
    >
      <Toast ref={toast} />

      <div
        id="header"
        className="flex p-1 w-full gap-5 pl-3 align-items-center fixed z-2 justify-content-between "
      >
        <div className="flex flex-row align-items-center  w-full justify-content-between flex-wrap">
          <label className="flex align-items-center">
            <input id="icon-action" type="checkbox" />
            <i
              id="icon"
              className="pi pi-align-justify text-white size-xl cursor-pointer "
              style={{ fontSize: "2.5rem" }}
            ></i>
            <CustomLink href="/">
                {/* <h3 className="text-white size-xl cursor-pointer ml-8">Anadalu Assist</h3> */}
              <Image
                className="cursor-pointer ml-8 select-none"
                alt="logo"
                height={60}
                src={logo}
              />
            </CustomLink>
          </label>

          {/* 
              <Image
                className="cursor-pointer ml-8 select-none"
                alt="logo"
                height={60}
                src={logo}
              />
            </CustomLink> */}

          <div className="flex flex-row mr-8 align-items-center justify-content-between ">
            <h3 className="flex align-items-center text-white m-2">İletişim</h3>
            <i
              className="pi pi-phone text-white size-m cursor-pointer mr-6"
              style={{ fontSize: "2.5rem" }}
            ></i>
            <h3 className="flex align-items-center text-white">SEPET</h3>
            <i
              className="pi pi-shopping-cart text-white size-xl cursor-pointer mr-6"
              style={{ fontSize: "2.5rem" }}
            ></i>
          </div>

          <SpeedDial
            showIcon="pi pi-user"
            hideIcon="pi pi-file"
            model={items}
            direction="down"
            style={{ top: "calc(50% - 2rem)", right: 0 }}
          />
        </div>
      </div>
      <div className="flex flex-row h-full" style={{ paddingTop: "70px" }}>
        <div id="sidebar">
          <AppSideBar sidebarItems={sidebarItems} />
        </div>

        <div
          className="w-full flex flex-column overflow-y-auto fade-in-up"
          id="main"
        >
          {children}
        </div>
      </div>
    </div>
  );
}
