import Login from "../components/auth/log-in";
import MenuBar from "../components/navbar/menubar";
import GovIcon from "../assets/main_logo.png";
import PlateNumber from "../assets/car_plate.jpeg";
import CarsImg from "../assets/cars_img.png";
import logoBlue from "../assets/eagle_logo_blue.png";

const LoginPage = () => {
  return (
    <div className={`h-full overflow-hidden mb-12`}>
      <MenuBar />

      <div
        className={
          "min-h-auto grid grid-cols-none md:grid-cols-[60%_40%] grid-rows-auto"
        }
      >
        <div className={`h-[28rem] hidden md:block relative bg-color`}>
          <div className="flex flex-col gap-8 items-center py-10">
            <img src={GovIcon} alt="gov Icon" width={100} height={100} />
            <img src={PlateNumber} alt="plate image" width={300} height={200} />
          </div>

          <div className="absolute top-[70%] z-40 inset-0 flex items-center justify-center">
            <img
              src={CarsImg}
              alt="cars image"
              className={"max-w-full h-auto object-cover"}
            />
          </div>
        </div>

        <div className="flex flex-col gap-5 bg-gray-50 py-5 px-8">
          <img
            className="flex justify-self-center self-center"
            src={logoBlue}
            alt="logo"
            width={100}
            height={100}
          />
          <Login />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
