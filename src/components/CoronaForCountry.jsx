import axios from "axios";
import { useEffect, useState } from "react";
import { API_TOKEN, API_URL } from "../consts";
import Card from "./Card";
import Loading from "./Loading";

const CoronaForCountry = () => {
  const [data, setData] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
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
    setFilteredCountries(response.data.result);
    setLoading(false);
  };

  const handleChange = (e) => {
    setQueryText(e.target.value);
  };

  const filter = () => {
    if (queryText !== "") {
      const results = data.filter((country) => {
        return country.country
          .toLowerCase()
          .startsWith(queryText.toLowerCase());
      });
      setFilteredCountries(results);
    } else {
      setFilteredCountries(data);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    filter();
  }, [queryText]);

  return (
    <>
      <div className="my-7">
        <input
          value={queryText}
          onChange={handleChange}
          placeholder="Search for a country ..."
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-violet-600"
        />
      </div>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-5">
        {loading && <Loading />}
        {filteredCountries.map((item) => {
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
