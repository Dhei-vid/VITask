import MenuBar from "../components/navbar/menubar";
import { goldColor } from "../common/constants";
import CarsImg from "../assets/cars_img.png";
const LandingPage = () => {
  return (
    <div className={`bg-[${goldColor}]`}>
      <MenuBar />

      <div
        className={"relative flex flex-col items-center h-[15rem] md:h-[25rem]"}
      >
        <p
          className={
            "pt-12 text-white text-center uppercase text-xl md:text-5xl font-bold w-[90%] lg:w-[60%]"
          }
        >
          anambra integrated vehicle adminstration system
        </p>

        <div className={"absolute top-[53%] md:top-[28%] lg:top-0"}>
          <img src={CarsImg} alt="" width={1050} height={700} />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
