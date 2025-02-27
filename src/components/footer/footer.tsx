import { Outlet, useNavigate } from "react-router-dom";
import CarImage from "../../assets/car.jpg";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const Footer = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);

  return (
    <>
      <Outlet />
      <div className="bg-color grid grid-cols-none gap-4 md:grid-cols-2 py-20 md:py-18 px-5 md:px-10">
        <div className={"flex flex-col gap-8"}>
          <div className={"flex flex-col gap-6"}>
            <p className={"text-7xl font-bold"}>
              Register your <span className={"text-white"}>Cars</span> with Ease
            </p>
            <p className={"text-white text-lg"}>
              Login to register your new car with ease
            </p>
          </div>
          <button
            disabled={isAuthenticated}
            onClick={() => navigate("/login")}
            className={
              "flex items-center justify-center bg-white p-2 px-5 w-42 rounded-full cursor-pointer"
            }
          >
            <p className={"gold font-semibold"}>login</p>
          </button>
        </div>
        <div className={""}>
          <img
            src={CarImage}
            alt="ar image"
            className="rounded-lg"
            width={500}
            height={450}
          />
        </div>
      </div>
    </>
  );
};

export default Footer;
