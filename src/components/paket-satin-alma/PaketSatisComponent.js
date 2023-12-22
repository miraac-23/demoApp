import { Calendar } from "primereact/calendar";
import { Card } from "primereact/card";
import { Dropdown } from "primereact/dropdown";

import {
    araclar,
    fiyatlar,
    musteriler,
    paketler,
} from "@/src/components/items/DropDownItems";
import AracEkleme from "@/src/components/paket-satin-alma/AracEkleme";
import MusteriEkleme from "@/src/components/paket-satin-alma/MusteriEkleme";
import { useState } from "react";

export default function PaketSatisComponent() {
    const [secilenPaket, setSecilenPaket] = useState(null);
    const [date, setDate] = useState(null);

  return (
    <div>
      <Card className="text-center w-full m-2">
        <div className="flex flex-column">
          <div className="flex flex-row">
            <i className="pi pi-user text-3xl flex align-items-center "></i>
            <h3 className="ml-5"> Paket Satış</h3>
          </div>
          <hr className="w-full" />

          <h4 className="flex">Paketler : </h4>
          <div className="flex w-full">
            <Dropdown
              value={secilenPaket}
              onChange={(e) => setSecilenPaket(e.value)}
              options={paketler}
              optionLabel="name"
              placeholder="Paket Seçiniz"
              className="w-full"
            />
          </div>
          <div className="w-full bg-green-300 border-round p-2 mt-3">
            <div className="flex flex-row p-2 ">
              <h3>
                Değerli iş ortağımız paket satış fiyatını yükselterek komisyon
                oranınızı ve kazancınızı arttırabilirsiniz.
              </h3>

              <i
                className="pi pi-angle-double-down text-4xl flex justify-content-end cursor-pointer p-2 align-items-center"
              />
            </div>
          </div>
          <h4 className="flex">Fiyatlar : </h4>
          <div className="flex w-full">
            <Dropdown
              value={secilenPaket}
              onChange={(e) => setSecilenPaket(e.value)}
              options={fiyatlar}
              optionLabel="name"
              placeholder="Paket Seçiniz"
              className="w-full"
            />
          </div>
          <h4 className="flex">Müşteri : </h4>
          <div className="flex w-full">
            <Dropdown
              value={secilenPaket}
              onChange={(e) => setSecilenPaket(e.value)}
              options={musteriler}
              optionLabel="name"
              placeholder="Müşteri Seçiniz"
              className="w-full"
            />
          </div>
          <div className="mt-3">
            <MusteriEkleme />
          </div>

          <h4 className="flex">Araç : </h4>
          <div className="flex w-full">
            <Dropdown
              value={secilenPaket}
              onChange={(e) => setSecilenPaket(e.value)}
              options={araclar}
              optionLabel="name"
              placeholder="Paket Seçiniz"
              className="w-full"
            />
          </div>
          <div className="mt-3">
            <AracEkleme />
          </div>
          <h4 className="flex">Başlangıç Tarihi : </h4>
          <div className="flex w-full">
            <Calendar
              className="w-full"
              value={date}
              onChange={(e) => setDate(e.value)}
            />
          </div>
        </div>
      </Card>
    </div>
  );
}
