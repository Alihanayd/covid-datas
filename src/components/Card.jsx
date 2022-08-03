import PropTypes from "prop-types";
const countryImage =
  "https://www.ecdc.europa.eu/sites/default/files/styles/is_large/public/images/Coronavirus_H.png?itok=_QCjKfqJ";
const Card = ({ country, totalCase, totalDeaths, totalRecovered }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-md cursor-pointer hover:shadow-lg hover:scale-105 transition-all">
      <img className="w-full" src={countryImage} alt="Country" />
      <div className="px-6 md:p-4 py-4 bg-blue-300">
        <div className="font-bold text-xs md:text-sm lg:text-xl mb-2">
          {country}
        </div>
        <p className="text-gray-700 text-[10px] lg:text-base">
          Total Case : {totalCase}
        </p>
        <p className="text-gray-700 text-[10px] lg:text-base">
          Total Death : {totalDeaths}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2 bg-blue-300">
        <span className="inline-block bg-blue-500 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #{totalRecovered}
        </span>
      </div>
    </div>
  );
};
Card.propTypes = {
  country: PropTypes.string,
  totalCase: PropTypes.string,
  totalRecovered: PropTypes.string,
  totalDeaths: PropTypes.string,
};
Card.defaultProps = {
  country: "",
  totalCase: "",
  totalRecovered: "",
  totalDeaths: "",
};
export default Card;
