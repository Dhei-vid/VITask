import UserProfile from "./user-profile";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

import SideBarDrawer from "../sidebar/drawer";

const NavBar = () => {
  const { user } = useSelector((state: RootState) => state.auth);

  return (
    <div>
      <div
        className={`flex flex-row justify-between items-center h-24 bg-color p-8`}
      >
        <div className={"md:hidden block cursor-pointer"}>
          <SideBarDrawer />
        </div>

        <div className={"ml-auto"}>
          <UserProfile 
            fullName={user ? `${user.firstName} ${user.lastName}` : "John Doe"} 
            role={user ? user.role.toUpperCase() : "MLA"} 
          />
        </div>
      </div>
      <div className={"px-8 py-2 bg-white"}>
        <p className={"font-bold"}>{user ? user.role.toUpperCase() : "MLA"} Dashboard</p>
      </div>
    </div>
  );
};

export default NavBar;
