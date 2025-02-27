import { FC, useState } from "react";
import IconBlue from "../../assets/eagle_logo_blue.png";
import { plateNumber, vehiceManagement } from "../../common/data";
import { SideBarItem, SubSideBarItem } from "./side-bar-item";
import { CloseRounded } from "@mui/icons-material";

interface ISideBar {
  onClick?: () => void;
}

const SideBar: FC<ISideBar> = ({ onClick }) => {
  const [openPlateNDW, setPlateNDW] = useState<number | null>(null);
  const [openPlateNSubDW, setPlateNSubDW] = useState<number | null>(null);
  const [openVehicleDW, setVehicleDropdown] = useState<number | null>(null);

  const handlePlateDropdownToggle = (id: number) => {
    setPlateNDW((prev) => (prev === id ? null : id));
    setPlateNSubDW(null);
  };

  const handlePlateSubDropdownToggle = (id: number) => {
    setPlateNSubDW((prev) => (prev === id ? null : id));
  };

  const handleVehicleDropdownToggle = (id: number) => {
    setVehicleDropdown((prev) => (prev === id ? null : id));
  };

  return (
    <div className={"z-40 flex flex-col md:[30rem] bg-white shadow-r-lg"}>
      <div
        className={"flex items-center w-full justify-between md:justify-center"}
      >
        <img src={IconBlue} alt={"Logo"} width={150} height={100} />
        <div onClick={onClick} className={"md:hidden block cursor-pointer"}>
          <CloseRounded sx={{ fontSize: 40 }} />
        </div>
      </div>

      <div>
        <div className="border-b-2 border-gray-200 p-2">
          <p className="text-sm uppercase font-semibold">Plate Number</p>
        </div>

        <div className="p-4">
          {plateNumber.map(({ id, title, Icon, dropdown }) => (
            <div key={id} className="cursor-pointer">
              <SideBarItem
                title={title}
                Icon={Icon}
                handleClick={() => handlePlateDropdownToggle(id)}
                id={id}
                selectedId={openPlateNDW}
              />

              {/* First Level Dropdown */}
              {openPlateNDW === id && dropdown && (
                <div className="flex flex-col gap-4 pl-8 py-4 mt-2">
                  {dropdown.map(({ id, title, Icon, dropdown }) => (
                    <div>
                      <SideBarItem
                        id={id}
                        title={title}
                        Icon={Icon}
                        handleClick={() => handlePlateSubDropdownToggle(id)}
                        selectedId={openPlateNSubDW}
                        textStyle={"text-sm font-light"}
                      />

                      {/* Second Level Dropdown */}
                      {openPlateNSubDW === id && dropdown && (
                        <div className="flex flex-col gap-2 pl-6 mt-2">
                          {dropdown.map((item) => (
                            <SubSideBarItem title={item.title} />
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className={"border-b-2 border-gray-200 p-2"}>
          <p className={"text-sm uppercase font-semibold"}>
            Vehicle Management
          </p>
        </div>

        <div className={"flex flex-col gap-5 p-4"}>
          {vehiceManagement.map(({ id, title, Icon, dropdown }) => {
            return (
              <div key={id} className={"cursor-pointer"}>
                <SideBarItem
                  id={id}
                  title={title}
                  Icon={Icon}
                  handleClick={() => handleVehicleDropdownToggle(id)}
                  selectedId={openVehicleDW}
                />

                {openVehicleDW === id &&
                  dropdown.map(({ id, title }) => {
                    return (
                      <div className="flex flex-col gap-2 pl-8 mt-2">
                        <SubSideBarItem key={id} title={title} />
                      </div>
                    );
                  })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
