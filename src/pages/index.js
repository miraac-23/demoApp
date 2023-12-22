import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex flex-column align-items-center m-4 fade-in-down">
      <div className="flex flex-column w-full lg:w-6 gap-5">
        <div
          className="module flex flex-column lg:flex-row gap-5 lg:justify-content-between cursor-pointer"
          onClick={() => {
            router.push("/demo");
          }}
        >
          <div className="flex lg:flex-row flex-column gap-5 align-items-center">
            <i className="pi pi-box text-7xl"></i>

            <div>
              <h2>Paket Satın Al</h2>
              <h4>
                Kullanıcı ve rol üzerinde yapılacak tüm işlemleri, kullanıcı ve
                rol bilgilerinin tamamını içeren modüldür.
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
