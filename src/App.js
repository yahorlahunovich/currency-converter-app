import { useEffect, useState } from "react";
import CurrencyRow from "./components/CurrencyRow";
import Footer from "./components/Footer";

function App() {
  const [currencyOptions, setCurrencyOptions] = useState();
  const myHeaders = new Headers();
  myHeaders.append("apikey", "UQ1pMFSPWw4PRBYpVacLVt8EBz1B99aT");
  const requestOptions = {
    method: "GET",
    redirect: "follow",
    headers: myHeaders,
  };
  useEffect(() => {
    fetch("https://api.apilayer.com/exchangerates_data/symbols", requestOptions)
      .then((response) => response.json())
      .then((result) => setCurrencyOptions(result.symbols))
      .catch((error) => console.log("error", error));
  }, []);
  return (
    <div className=" p-10 bg-gray-200 min-h-screen">
      <div className="container max-w-md mx-auto">
        <div className="flex flex-col items-center justify-center">
          <h1 className="md:text-5xl text-4xl text-gray-700 mb-10">
            Currency Converter
          </h1>
          <h2 className="md:text-xl text-3xl text-gray-700">
            1 usd is 0.9 euro
          </h2>
          <p className=" text-gray-700 mb-5">Time</p>
          <CurrencyRow />
          <CurrencyRow />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
