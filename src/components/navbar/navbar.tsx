import UserProfile from "./user-profile";
import { MenuRounded } from "@mui/icons-material";
import { goldColor } from "../../common/constants";

const NavBar = () => {
  return (
    <div>
      <div
        className={`flex flex-row justify-between items-center h-24 bg-[${goldColor}] p-8`}
      >
        <div className={"md:hidden block cursor-pointer"}>
          <MenuRounded sx={{ color: "white", fontSize: 40 }} />
        </div>

        <div className={"ml-auto"}>
          <UserProfile fullName={"John Doe"} />
        </div>
      </div>
      <div className={"px-8 py-2 bg-white"}>
        <p className={"font-bold"}>MLA Dashboard</p>
      </div>
    </div>
  );
};

export default NavBar;
