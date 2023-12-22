import { Card } from "primereact/card";
import { Panel } from "primereact/panel";
import { Ripple } from "primereact/ripple";

export default function YolYardimPaketDetayiComponent() {
  const template = (options) => {
    const toggleIcon = options.collapsed
      ? "pi pi-chevron-down"
      : "pi pi-chevron-up";
    const className = `${options.className} justify-content-start`;
    const titleClassName = `${options.titleClassName} ml-2 text-primary`;
    const style = { fontSize: "1.25rem" };

    return (
      <div className={className}>
        <button
          className={options.togglerClassName}
          onClick={options.onTogglerClick}
        >
          <span className={toggleIcon}></span>
          <Ripple />
        </button>
        <span className={titleClassName} style={style}>
          <div className="flex flex-row">
            <i className="pi pi-info-circle text-3xl flex align-items-center "></i>
            <h3 className="ml-5">Yol Yardım Paket Detayı</h3>
          </div>
        </span>
      </div>
    );
  };
  return (
    <div>
      <Panel className="w-full m-2" headerTemplate={template} toggleable>
        <div className="flex flex-column">
          <div className="flex flex-row gap-2 p-2">
            <div className="w-full bg-red-300 border-round p-2 mt-3 text-center">
              <div className="flex flex-row p-2 ">
                <div className="flex flex-column">
                  <h3>Araç Yaş Sınırı 25</h3>
                </div>

                <i
                  className="pi pi-sort-amount-up-alt text-4xl flex justify-content-end cursor-pointer p-2 align-items-center"
                  onClick={() => setMessageVisible(false)}
                />
              </div>
            </div>
            <div className="w-full bg-yellow-300 border-round p-2 mt-3 flex align-items-center justify-content-center">
              <div className="flex flex-row p-2 ">
                <h2>Satış Fiyatı ₺225.00</h2>

                <i
                  className="pi pi-arrow-up text-4xl flex justify-content-end cursor-pointer p-2 align-items-center"
                  onClick={() => setMessageVisible(false)}
                />
              </div>
            </div>
            <div className="w-full bg-green-300 border-round p-2 mt-3">
              <div className="flex flex-row p-2 ">
                <h2>Komisyon 82.63</h2>

                <i
                  className="pi pi-dollar text-4xl flex justify-content-end cursor-pointer p-2 align-items-center"
                  onClick={() => setMessageVisible(false)}
                />
              </div>
            </div>
          </div>

          <div className="mt-3">
            <Card>
              <div className="flex flex-row gap-4">
                <i className="pi pi-check-circle flex align-items-center  text-4xl text-teal-700 " />
                <h3 className="m-0">
                  Değerli iş ortağımız paket satış fiyatını yükselterek komisyon
                  oranınızı ve kazancınızı arttırabilirsiniz.
                </h3>
              </div>
            </Card>
          </div>

          <div className="mt-3 ">
            <div className="flex flex-row gap-2">
              <i className="pi pi-check-circle flex align-items-center  text-2xl text-teal-700 " />
              <h3>1 DEFA ARIZA (EN YAKIN TAMİRHANE) (1000₺)</h3>
            </div>
            <div className="flex flex-row gap-2">
              <i className="pi pi-check-circle flex align-items-center  text-2xl text-teal-700 " />
              <h3>2 DEFA ARIZA (EN YAKIN TAMİRHANE) (1000₺)</h3>
            </div>
            <div className="flex flex-row gap-2">
              <i className="pi pi-check-circle flex align-items-center  text-2xl text-teal-700 " />
              <h3>1 DEFA ARIZA (EN YAKIN TAMİRHANE) (1000₺)</h3>
            </div>
            <div className="flex flex-row gap-2">
              <i className="pi pi-check-circle flex align-items-center  text-2xl text-teal-700 " />
              <h3>1 DEFA ARIZA (EN YAKIN TAMİRHANE) (1000₺)</h3>
            </div>
          </div>
          <div className="flex justify-content-start">
            <h2 className="text-red-500">PAKET KAPSAMINDA OLMAYANLAR</h2>
          </div>

          <div className="mt-3 ">
            <div className="flex flex-row gap-2">
              <i className="pi pi-times-circle flex align-items-center  text-2xl text-red-500 " />
              <h3>AÇIK KASA KAMYONETLER HARİÇTİR</h3>
            </div>
            <div className="flex flex-row gap-2">
              <i className="pi pi-times-circle flex align-items-center  text-2xl text-red-500 " />
              <h3>UZUN ŞASE KAMYONETLER HARİÇTİR</h3>
            </div>
            <div className="flex flex-row gap-2">
              <i className="pi pi-times-circle flex align-items-center  text-2xl text-red-500 " />
              <h3>PANELVAN VEYA KAPALI KASA KAMYONETLER HARİÇTİR</h3>
            </div>
            <div className="flex flex-row gap-2">
              <i className="pi pi-times-circle flex align-items-center  text-2xl text-red-500 " />
              <h3>ÇİFT KABİN PICK-UPLAR HARİÇTİR</h3>
            </div>
            <div className="flex flex-row gap-2">
              <i className="pi pi-times-circle flex align-items-center  text-2xl text-red-500 " />
              <h3>KİRALIK HARİÇTİR</h3>
            </div>
          </div>
        </div>
      </Panel>
    </div>
  );
}
