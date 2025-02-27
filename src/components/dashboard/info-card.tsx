import { FC, useEffect, useState } from "react";
import WelcomeSVG from "../../assets/reading_svg.svg";

interface IInfoCard {
  fname: string;
  lname: string;
}

const InfoCard: FC<IInfoCard> = ({ fname, lname }) => {
  const [date, setDate] = useState<Date>(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000);

    return function cleanup() {
      clearInterval(timer);
    };
  });

  return (
    <div
      className={`flex flex-col justify-center gap-3 gradient rounded-lg w-full md:w-96 py-3 px-8`}
    >
      <div>
        <p className={"text-white text-lg font-semibold"}>
          Welcome {fname} {lname}
        </p>
      </div>

      <div className={"flex flex-row items-center justify-around items-center"}>
        <div className={"flex flex-col gap-1"}>
          <p className={"text-white"}>{date.toLocaleDateString()}</p>
          <p className={"text-white"}>{date.toLocaleTimeString()}</p>
        </div>
        <div className={"justify-self-end"}>
          <img width={100} height={100} src={WelcomeSVG} alt="welcome svg" />
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
