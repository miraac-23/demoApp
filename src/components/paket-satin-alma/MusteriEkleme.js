import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { InputSwitch } from "primereact/inputswitch";
import { useRef, useState } from "react";

import { InputText } from "primereact/inputtext";
import { Toast } from "primereact/toast";

export default function MusteriEkleme() {
  const [musteriEklemeVisible, setMusteriEklemeVisible] = useState(false);
  const [kurumsalChecked, setKurumsalChecked] = useState(false);
  const toast = useRef();
  const [musteri, setMusteri] = useState({});

  const onChange = (e) => {
    const { name, value } = e.target;
    setMusteri({ ...musteri, [name]: value });
  };

  const create = () => {
    if (musteri.tckn !== '') {
      toast.current.show({
        severity: "success",
        summary: "Kayıt Başarılı",
        detail: "Müşteri eklendi",
      });
    } else {
      toast.current.show({
        severity: "error",
        summary: "Müşteri Oluşturma Hatası",
        detail: "Müşteri Oluştururken Beklenmedik Bir Hata Oluştu",
      });
    }
  };

  const DialogHeaderMusteri = () => {
    return (
      <div className="flex flex-column">
        <div className="flex flex-row">
          <i className="pi pi-user text-3xl flex align-items-center font-bold"></i>
          <i className="pi pi-plus text-xl flex align-items-center font-bold"></i>
          <h3 className="flex justify-content-end ml-5 ">Yeni Müşteri Formu</h3>
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
        label="Yeni Müşteri Ekleyiniz"
        icon="pi pi-external-link"
        onClick={() => setMusteriEklemeVisible(true)}
      />
      <Dialog
        header={DialogHeaderMusteri}
        visible={musteriEklemeVisible}
        style={{ width: "50vw" }}
        onHide={() => setMusteriEklemeVisible(false)}
      >
        <div className="flex flex-column gap-2 text-center">
          <div className="flex flex-row gap-2">
            <InputSwitch
              checked={kurumsalChecked}
              onChange={(e) => setKurumsalChecked(e.value)}
            />
            <label className="font-bold text-l ">
              Kurumsal Kurumsal müşterileriniz için kurumsalı seçiniz.
            </label>
          </div>

          {!kurumsalChecked ? (
            <div className="mt-4">
              <label className="font-bold text-xl ">TC Kimlik Numarası</label>
              <InputText
                value={musteri.tckn}
                name="tckn"
                className="w-full"
                onChange={onChange}
              />
            </div>
          ) : (
            <div className="mt-4">
              <label className="font-bold text-xl ">Vergi Numarası</label>
              <InputText
                value={musteri.vergiNo}
                name="vergiNo"
                keyfilter="num"
                className="w-full"
                onChange={onChange}
              />
            </div>
          )}

          {!kurumsalChecked ? (
            <>
              <div className="mt-2">
                <label className="font-bold text-xl">Ad</label>
                <InputText
                  value={musteri.ad}
                  name="ad"
                  className="w-full"
                  onChange={onChange}
                />
              </div>
              <div className="mt-2">
                <label className="font-bold text-xl">Soyad</label>
                <InputText
                  value={musteri.soyad}
                  name="soyad"
                  className="w-full"
                  onChange={onChange}
                />
              </div>
            </>
          ) : (
            <div className="mt-2">
              <label className="font-bold text-xl">Firma Adı</label>
              <InputText
                value={musteri.firmaAdi}
                name="firmaAdi"
                className="w-full"
                onChange={onChange}
              />
            </div>
          )}

          <div className="mt-2">
            <label className="font-bold text-xl">E-posta Adresi</label>
            <InputText
              value={musteri.email}
              name="email"
              keyfilter="email"
              className="w-full"
              onChange={onChange}
            />
          </div>
          <div className="mt-2">
            <label className="font-bold text-xl">İl</label>
            <InputText
              value={musteri.il}
              name="il"
              className="w-full"
              onChange={onChange}
            />
          </div>
          <div className="mt-2">
            <label className="font-bold text-xl">İlçe</label>
            <InputText
              value={musteri.ilce}
              name="ilce"
              className="w-full"
              onChange={onChange}
            />
          </div>
          <div className="mt-2">
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
