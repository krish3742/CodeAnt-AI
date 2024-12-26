import Style from "./Loader.module.css";

function Loader() {
  return (
    <div className={Style.container}>
      <div className={Style.loader}></div>;
    </div>
  );
}

export default Loader;
