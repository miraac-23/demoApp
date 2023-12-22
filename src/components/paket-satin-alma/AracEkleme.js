import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { Dropdown } from "primereact/dropdown";
import { InputSwitch } from "primereact/inputswitch";
import { useRef, useState } from "react";

import { musteriler, test } from "@/src/components/items/DropDownItems";
import { InputText } from "primereact/inputtext";
import { Toast } from "primereact/toast";

export default function AracEkleme() {
  const [plakaChecked, setPlakaChecked] = useState(false);
  const [paketEklemeVisible, setPaketEklemeVisible] = useState(false);
  const toast = useRef();
  const [arac, setArac] = useState({});

  const onChange = (e) => {
    const { name, value } = e.target;
    setArac({ ...arac, [name]: value });
  };

  const create = () => {
    if (arac.plaka1 !== "") {
      toast.current.show({
        severity: "success",
        summary: "Kayıt Başarılı",
        detail: "Araç eklendi",
      });
    } else {
      toast.current.show({
        severity: "error",
        summary: "Araç Oluşturma Hatası",
        detail: "Araç Oluştururken Beklenmedik Bir Hata Oluştu",
      });
    }
  };

  const DialogHeaderPaket = () => {
    return (
      <div className="flex flex-column">
        <div className="flex flex-row">
          <i className="pi pi-user text-3xl flex align-items-center font-bold"></i>
          <i className="pi pi-plus text-xl flex align-items-center font-bold"></i>
          <h3 className="flex justify-content-end ml-5 ">
            Yeni Araç Ekleme Formu
          </h3>
        </div>
        <hr className="w-full" />
      </div>
    );
  };

  return (
    <div>
      <Toast ref={toast} />
      <Button
        className="w-full"
        label="Yeni Paket Ekleyiniz"
        icon="pi pi-external-link"
        onClick={() => setPaketEklemeVisible(true)}
      />
      <Dialog
        header={DialogHeaderPaket}
        visible={paketEklemeVisible}
        style={{ width: "50vw" }}
        onHide={() => setPaketEklemeVisible(false)}
      >
        <div className="flex flex-column gap-2 text-center">
          <div className="flex flex-row gap-2">
            <InputSwitch
              checked={plakaChecked}
              onChange={(e) => setPlakaChecked(e.value)}
            />
            <label className="font-bold text-l ">
              Yabancı Plaka Yabancı araçlar için plaka girişinde Yabancı
              Plaka'yı seçiniz.{" "}
            </label>
          </div>
          <div>
            <label className="font-bold text-xl ">Müşteri :</label>
            <Dropdown
              name="musteri"
              value={arac.musteri}
              onChange={onChange}
              options={musteriler}
              optionLabel="name"
              placeholder="Paket Seçiniz"
              className="w-full "
            />
          </div>
          <div className="flex flex-column">
            <label className="font-bold text-xl">Plaka</label>
            {!plakaChecked ? (
              <div className="flex flex-row mt-3 gap-2">
                <InputText
                  name="plaka1"
                  value={arac.plaka1}
                  onChange={onChange}
                  keyfilter="num"
                  className="w-full"
                  placeholder="06"
                />
                <InputText
                  name="plaka2"
                  value={arac.plaka2}
                  className="w-full"
                  placeholder="ABC"
                  onChange={onChange}
                />
                <InputText
                  name="plaka3"
                  value={arac.plaka3}
                  keyfilter="num"
                  className="w-full"
                  placeholder="0000"
                  onChange={onChange}
                />
              </div>
            ) : (
              <div className="flex flex-row mt-3 gap-2">
                <InputText
                  name="plakaTum"
                  value={arac.plakaTum}
                  className="w-full"
                  placeholder="****"
                  onChange={onChange}
                />
              </div>
            )}
          </div>

          <div className="flex flex-row mt-6 gap-4 justify-content-between">
            <div className="flex flex-column w-full">
              <label className="font-bold text-xl">Marka</label>
              <Dropdown
                name="marka"
                value={arac.marka}
                onChange={onChange}
                options={test}
                optionLabel="name"
                placeholder="Paket Seçiniz"
                className="w-full "
              />
            </div>
            <div className="flex flex-column w-full">
              <label className="font-bold text-xl">Model</label>
              <Dropdown
                name="model"
                value={arac.model}
                onChange={onChange}
                options={test}
                optionLabel="name"
                placeholder="Paket Seçiniz"
                className="w-full "
              />
            </div>
          </div>

          <div className="flex flex-row mt-6 gap-4 justify-content-between">
            <div className="flex flex-column w-full">
              <label className="font-bold text-xl">Model Yılı</label>
              <Dropdown
                name="modelYili"
                value={arac.modelYili}
                onChange={onChange}
                options={test}
                optionLabel="name"
                placeholder="Paket Seçiniz"
                className="w-full "
              />
            </div>
            <div className="flex flex-column w-full">
              <label className="font-bold text-xl">Araç Kullanım Türü</label>
              <Dropdown
                name="aracKullanimTuru"
                value={arac.aracKullanimTuru}
                onChange={onChange}
                options={test}
                optionLabel="name"
                placeholder="Paket Seçiniz"
                className="w-full "
              />
            </div>
          </div>

          <div className="mt-3">
            <Button
              className="w-full flex justify-content-center font-bold text-2xl"
              onClick={() => {
                create();
              }}
            >
              Kaydet
            </Button>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
