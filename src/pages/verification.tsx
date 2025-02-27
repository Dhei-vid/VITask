import { Link } from "react-router-dom";

const Verification = () => {
  return (
    <div
      className={
        "bg-color flex flex-col gap-3 items-center justify-center h-96 mb-24"
      }
    >
      <p className={"text-white text-3xl font-bold"}>
        Verification Page Coming Soon
      </p>
      <Link className={"font-semibold"} to={"/"}>
        Click to go back
      </Link>
    </div>
  );
};

export default Verification;
