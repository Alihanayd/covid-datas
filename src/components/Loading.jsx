import LoadingIcon from "../Loading.svg";

const Loading = () => {
  return (
    <div className="loading w-full h-full absolute top-0 left-0 bg-slate-200 flex items-center justify-center">
      <img src={LoadingIcon} className="" alt="loading" />
    </div>
  );
};

export default Loading;
