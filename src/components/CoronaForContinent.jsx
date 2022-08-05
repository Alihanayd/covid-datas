import axios from "axios";
import { useEffect, useState } from "react";
import { API_TOKEN, API_URL } from "../consts";
import Loading from "./Loading";

const CoronaForContinent = () => {
  const [headers] = useState([
    {
      title: "Continent",
      value: "continent",
    },
    {
      title: "Active Cases",
      value: "activeCases",
    },
    {
      title: "New Cases",
      value: "newCases",
    },
    {
      title: "Total Cases",
      value: "totalCases",
    },
    {
      title: "Total Deaths",
      value: "totalDeaths",
    },
    {
      title: "New Deaths",
      value: "newDeaths",
    },
    {
      title: "Total Recovered",
      value: "totalRecovered",
    },
  ]);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    setLoading(true);
    const response = await axios.get(`${API_URL}continentData`, {
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
    <div className="flex flex-col items-center mt-12">
      <div className="lg:w-4/5 w-full">
        <h1 className="text-2xl mb-4 font-bold text-gray-900">Corona Table</h1>
        <div className="overflow-scroll md:overflow-hidden shadow-md">
          {loading ? (
            <Loading />
          ) : (
            <table className="w-full">
              <thead className="bg-gray-600">
                <tr>
                  {headers.map((item) => {
                    return (
                      <th
                        key={item.title}
                        className="py-3 px-6 text-[6px] md:text-xs font-medium text-gray-300 uppercase text-left lg:text-xs"
                      >
                        {item.title}
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody>
                {data.map((item) => {
                  return (
                    <tr key={item.continent} className="bg-gray-600 border-b">
                      {headers.map((subItem) => {
                        return (
                          <td
                            key={subItem.value}
                            className="py-4 px-6 text-[8px] font-medium text-white whitespace-nowrap md:text-[12px] lg:text-sm"
                          >
                            {item[subItem.value]}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};
export default CoronaForContinent;
