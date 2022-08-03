import axios from "axios";
import { useEffect, useState } from "react";
import { API_TOKEN, API_URL } from "../consts";
import Card from "./Card";
import LoadingIcon from "../Loading.svg";

const CoronaForCountry = () => {
  const [data, setData] = useState([]);
  const [queryText, setQueryText] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    const response = await axios.get(
      `${API_URL}countriesData?country=${queryText}`,
      {
        headers: {
          authorization: API_TOKEN,
        },
      }
    );
    setData(response.data.result);
    setLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    const filteredCountries = [];
    data.map((countryItem) => {
      if (countryItem.country.startsWith(queryText)) {
        filteredCountries.push(countryItem);
      }
    });
    setData(filteredCountries);
  }, [queryText]);
  return (
    <>
      <div className="mb-4">
        <input
          value={queryText}
          onChange={(e) => {
            setQueryText(e.target.value);
          }}
          placeholder="Search for a country ..."
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-violet-600"
        />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {loading && <img src={LoadingIcon} />}
        {data.map((item) => {
          return (
            <Card
              key={item.country}
              country={item.country}
              totalDeaths={item.totalDeaths}
              totalCase={item.totalCases}
              totalRecovered={item.totalRecovered}
            />
          );
        })}
      </div>
    </>
  );
};
export default CoronaForCountry;
