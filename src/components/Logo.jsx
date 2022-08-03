import PropTypes from "prop-types";
const Logo = ({ logo, title }) => {
  return (
    <div className="flex items-center">
      <img src={logo} alt={title} className="mr-3 h-6" />
      <span className="self-center text-[8px] md:text-xl font-semibold whitespace-nowrap text-white">
        {title}
      </span>
    </div>
  );
};
Logo.propTypes = {
  title: PropTypes.string,
  logo: PropTypes.string,
};
Logo.defaultProps = {
  title: "Corona App",
  logo: "https://cdn.pixabay.com/photo/2020/04/29/07/54/coronavirus-5107715_1280.png",
};
export default Logo;
