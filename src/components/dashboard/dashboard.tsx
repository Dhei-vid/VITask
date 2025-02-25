import InfoCard from "./info-card";
import DataCard from "./data-card";
import { dataCard } from "../../common/data";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const Dashboard = () => {
  const { user } = useSelector((state: RootState) => state.auth);

  return (
    <div className={"flex flex-col gap-8 p-5 bg-gray-100 h-full"}>
      <InfoCard
        fname={user?.firstName ?? "firstName"}
        lname={user?.lastName ?? "LastName"}
      />

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
