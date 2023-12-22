import { useState } from "react";

import PaketSatisComponent from "@/src/components/paket-satin-alma/PaketSatisComponent";
import YolYardimPaketDetayiComponent from "@/src/components/paket-satin-alma/YolYardimPaketDetayiComponent";

export default function demo() {
  const [messageVisible, setMessageVisible] = useState(true);

  return (
    <div className="p-4 fade-in-down">
      {messageVisible && (
        <div className="w-full bg-yellow-200 p-2 border-round">
          <div className="flex flex-row p-2">
            <p>
              Lütfen dikkat! Daha önce ödeme sayfasına geçtiğiniz bir müşteri
              için yeniden paket satın alma işlemi yapmanıza gerek kalmadan
              ekranın sağ üst köşesindeki SEPET sayfasından ödemeye
              geçebilirsiniz. Eğer başarısız ödeme olmuşsa sepet sayfasından
              ödemeye geçmeniz ödemenin tarafımızdan alınıp alınmadığını da
              kontrol edecektir.
            </p>

            <i
              className="pi pi-times flex justify-content-end cursor-pointer"
              onClick={() => setMessageVisible(false)}
            />
          </div>
        </div>
      )}

      <div className="flex flex-row justify-content-between ">
        <div className="p-2 w-full">
          <PaketSatisComponent />
        </div>
        <div className="p-2 w-full">
          <YolYardimPaketDetayiComponent />
        </div>
      </div>
    </div>
  );
}
