import { useState, createContext, useEffect } from "react";
import axios from "axios";
import Main from "./Pages/main";
function App() {
  const [data, setdata]: any = useState(null);
  const [loading, setloading]: any = useState(true);

  useEffect(() => {
    setloading(true);
    const options: any = {
      method: "GET",
      url: "https://fear-and-greed-index.p.rapidapi.com/v1/fgi",
      headers: {
        "X-RapidAPI-Key": "28f56be75dmshf348ef897ebb808p1cdcbcjsn08e0024f1363",
        "X-RapidAPI-Host": "fear-and-greed-index.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response: any) {
        setdata(response.data);
        setloading(false);
      })
      .catch(function (error) {
        console.error(error);
        setloading(false);
      });
  }, []);
  return (
    <DataContext.Provider
      value={{
        data: data,
        setdata: setdata,
        loading: loading,
        setloading: setloading,
      }}
    >
      <Main loading={loading} />
    </DataContext.Provider>
  );
}

export const DataContext = createContext({});
export default App;
