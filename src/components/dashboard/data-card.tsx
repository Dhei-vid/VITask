import { FC } from "react";
import Button from "./button";

interface IDataCard {
  title: string;
  value: number;
  Icon: React.ElementType;
  isCurrency?: boolean;
}

const DataCard: FC<IDataCard> = ({ title, value, Icon, isCurrency }) => {
  return (
    <div
      className={
        "flex flex-col md:flex-row gap-3 md:items-center p-4 px-6 rounded-lg w-full md:w-96 bg-white"
      }
    >
      <div className={"flex md:flex-row gap-3 items-center"}>
        <div className={"border border-color rounded-full p-1"}>
          <div
            className={
              "flex items-center justify-center rounded-full bg-gray-50 p-4 w-12 h-12"
            }
          >
            <Icon className={"gold"} sx={{ fontSize: 20 }} />
          </div>
        </div>
        <div className={"flex flex-col w-full md:w-[12rem]"}>
          <p className={"font-semibold text-slate-600"}>{title}</p>
          <p className={"font-bold"}>
            {isCurrency ? `₦${value.toLocaleString()}` : value}
          </p>
        </div>
      </div>

      <Button />
    </div>
  );
};

export default DataCard;
