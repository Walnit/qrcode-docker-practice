import { Suspense, useEffect, useState } from 'react';
import { api, hello, generateQR } from './utils/api'
import { AxiosResponse } from 'axios';

function App() {
  const [value, setValue] = useState<string>("https://www.nushigh.edu.sg/");
  const [img, setImg] = useState('');

  useEffect(() => {
    generateQR(value).then((qr: AxiosResponse<Blob>) => {
      setImg(URL.createObjectURL(qr.data));
  } );
  }, [value]);
  
  return (
    <>
      <h1 className='text-3xl'>Hello world!</h1>
      <input type="text" placeholder="Enter a URL" onChange={(e) => setValue(e.target.value)} />
      <Suspense fallback={<div>Loading...</div>}>
        <p>{value}</p>
        <img src={img} alt="QR Code" />
      </Suspense>
    </>
  )
}

export default App
