import { Suspense, useEffect, useState } from "react";
import { generateQR } from "./utils/api";
import { AxiosResponse } from "axios";

function App() {
  const [value, setValue] = useState<string>("https://www.nushigh.edu.sg/");
  const [img, setImg] = useState("");

  useEffect(() => {
    generateQR(value).then((qr: AxiosResponse<Blob>) => {
      setImg(URL.createObjectURL(qr.data));
    });
  }, [value]);

  return (
    <>
      <div
        id="bg-container"
        className="flex justify-center items-center w-screen h-screen bg-red-50"
      >
        <div
          id="main-container"
          className="flex flex-row gap-2 p-8 w-2/3 h-2/3 bg-white rounded-3xl"
        >
          <div id="options" className="flex flex-col items-start w-2/3 h-full">
            <h1 className="pb-2 text-3xl font-bold">QR Code Generator!</h1>
            <div className="flex flex-row items-center w-full">
              <p>URL:</p>
              <input
                type="text"
                placeholder="Enter a URL"
                className="p-4 mx-4 w-full rounded-xl bg-slate-50"
                onChange={(e) => setValue(e.target.value)}
              />
            </div>
          </div>
          <Suspense fallback={<div>Loading...</div>}>
            <div
              id="results"
              className="flex flex-col justify-center items-center w-1/3 h-full"
            >
              <img src={img} alt="QR Code" />
              <p className="overflow-auto break-all text-wrap">{value}</p>
            </div>
          </Suspense>
        </div>
      </div>
    </>
  );
}

export default App;
