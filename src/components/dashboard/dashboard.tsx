import InfoCard from "./info-card";
import DataCard from "./data-card";
import { dataCard } from "../../common/data";

const Dashboard = () => {
  return (
    <div className={"flex flex-col gap-8 p-5 bg-gray-100 h-full"}>
      <InfoCard fname={"Sarah"} lname={"Conor"} />

      <div className={"flex flex-row gap-4 md:gap-8 flex-wrap"}>
        {dataCard.map((card) => (
          <DataCard key={card.id} {...card} />
        ))}
      </div>
      <div></div>
    </div>
  );
};

export default Dashboard;
