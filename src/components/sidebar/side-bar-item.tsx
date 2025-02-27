import { FC } from "react";
import { ArrowDropDownRounded, ArrowForwardRounded } from "@mui/icons-material";

interface ISideBarItem {
  id: number;
  selectedId: number | null;
  title: string;
  Icon: React.ElementType;
  handleClick: () => void;
  textStyle?: string;
}

export const SideBarItem: FC<ISideBarItem> = ({
  id,
  selectedId,
  Icon,
  title,
  handleClick,
  textStyle,
}) => {
  return (
    <div
      onClick={handleClick}
      className={"flex flex-row gap-2 w-fit items-center group"}
    >
      <Icon sx={{ fontSize: 20 }} className={`group-hover`} />
      <p
        className={`group-hover ${
          textStyle ? textStyle : "text-sm font-semibold "
        }`}
      >
        {title}
      </p>
      <ArrowDropDownRounded
        sx={{ fontSize: 20 }}
        className={`transition-transform group-hover ${
          selectedId === id ? "rotate-180" : "rotate-0"
        }`}
      />
    </div>
  );
};

interface ISubSideBarItem {
  title: string;
}

export const SubSideBarItem: FC<ISubSideBarItem> = ({ title }) => {
  return (
    <div className={"flex flex-row gap-2 w-fit items-center group"}>
      <ArrowForwardRounded sx={{ fontSize: 15 }} className={`group-hover`} />
      <p className={`group-hover font-light text-xs`}>{title}</p>
    </div>
  );
};
