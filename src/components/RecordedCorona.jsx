import axios from "axios";
import { useEffect, useState } from "react";
import { API_TOKEN, API_URL } from "../consts";
import Loading from "./Loading";

const RecordedCorona = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    const response = await axios.get(`${API_URL}totalData`, {
      headers: {
        authorization: API_TOKEN,
      },
    });
    setLoading(false);
    setData(response.data.result);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="flex flex-col items-center justify-center h-full">
      {loading ? (
        <Loading />
      ) : (
        <div className="p-12">
          <h1 className="text-lg md:text-4xl lg:text-6xl text-gray-900 mb-4">
            Total Case : {data?.totalCases}
          </h1>
          <h1 className="text-lg md:text-4xl lg:text-6xl text-gray-900 mb-6">
            Total Death : {data?.totalDeaths}
          </h1>
          <h1 className="text-lg md:text-4xl lg:text-6xl text-gray-900">
            Total Recovered : {data?.totalRecovered}
          </h1>
        </div>
      )}
    </div>
  );
};
export default RecordedCorona;
