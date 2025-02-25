import { FC } from "react";
import {
  AccountBoxRounded,
  KeyboardArrowDownRounded,
} from "@mui/icons-material";

interface IUserProfile {
  fullName: string;
}

const UserProfile: FC<IUserProfile> = ({ fullName }) => {
  return (
    <div className={"flex flex-row items-center gap-3"}>
      <AccountBoxRounded sx={{ fontSize: 40 }} className={"text-white"} />
      <div className={"flex flex-col"}>
        <p className={"text-sm font-semibold uppercase"}>{fullName}</p>
        <div className={"flex flex-row items-center cursor-pointer"}>
          <p className={"text-[10px] font-light"}>MLA</p>
          <KeyboardArrowDownRounded sx={{ fontSize: 15 }} className={""} />
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
