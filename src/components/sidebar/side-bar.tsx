import { useState } from "react";
import IconBlue from "../../assets/eagle_logo_blue.png";
import { plateNumber, vehiceManagement } from "../../common/data";
import { ArrowDropDownRounded, ArrowForwardRounded } from "@mui/icons-material";
import { goldColor } from "../../common/constants";

const SideBar = () => {
  const [openMainDropdown, setOpenMainDropdown] = useState<number | null>(null);
  const [openSubDropdown, setOpenSubDropdown] = useState<number | null>(null);

  const handleMainDropdownToggle = (id: number) => {
    setOpenMainDropdown((prev) => (prev === id ? null : id));
    setOpenSubDropdown(null); // Close sub-dropdown when toggling main
  };

  const handleSubDropdownToggle = (id: number) => {
    setOpenSubDropdown((prev) => (prev === id ? null : id));
  };

  return (
    <div className={"flex flex-col md:80 bg-white shadow-r-lg"}>
      <div className={"flex items-center justify-center"}>
        <img
          src={IconBlue}
          alt={"Logo"}
          className={""}
          width={150}
          height={100}
        />
      </div>

      <div>
        <div className="border-b-2 border-gray-200 p-2">
          <p className="text-sm uppercase font-semibold">Plate Number</p>
        </div>

        <div className="p-4">
          {plateNumber.map(({ id, title, Icon, requests }) => (
            <div key={id} className="cursor-pointer">
              <div
                className="flex flex-row gap-2 items-center group"
                onClick={() => handleMainDropdownToggle(id)}
              >
                <Icon
                  sx={{ fontSize: 20 }}
                  className={`${
                    openMainDropdown === id ? `text-[${goldColor}]` : ""
                  } group-hover:text-[${goldColor}]`}
                />
                <p
                  className={`${
                    openMainDropdown === id ? `text-[${goldColor}]` : ""
                  } group-hover:text-[${goldColor}] font-semibold text-sm`}
                >
                  {title}
                </p>
                {requests && (
                  <ArrowDropDownRounded
                    sx={{ fontSize: 20 }}
                    className={`group-hover:text-[${goldColor}] transition-transform ${
                      openMainDropdown === id
                        ? `rotate-180 text-[${goldColor}]`
                        : "rotate-0"
                    }`}
                  />
                )}
              </div>

              {/* First Level Dropdown */}
              {requests && openMainDropdown === id && (
                <div className="pl-12 mt-2">
                  <div
                    className="flex items-center gap-2 cursor-pointer"
                    onClick={() => handleSubDropdownToggle(requests.id)}
                  >
                    <p className="text-sm text-gray-700 hover:text-[${goldColor}]">
                      {requests.title}
                    </p>
                    <ArrowDropDownRounded
                      sx={{ fontSize: 20 }}
                      className={`transition-transform ${
                        openSubDropdown === requests.id
                          ? "rotate-180"
                          : "rotate-0"
                      }`}
                    />
                  </div>

                  {/* Second Level Dropdown */}
                  {openSubDropdown === requests.id && (
                    <div className="pl-6 mt-2">
                      {requests.dropdown.map((item) => (
                        <div
                          key={item.id}
                          className={`flex flex-row items-center gap-2 py-1 text-sm text-gray-600 hover:text-[${goldColor}]`}
                        >
                          <ArrowForwardRounded
                            sx={{ fontSize: 15 }}
                            className={`text-xs text-[${goldColor}]`}
                          />
                          <p className={`text-xs text-[${goldColor}]`}>
                            {item.title}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
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
          {vehiceManagement.map(({ id, title, Icon }) => {
            return (
              <div key={id} className={"cursor-pointer"}>
                <div className={"flex flex-row gap-2 items-center group"}>
                  <Icon
                    sx={{ fontSize: 20 }}
                    className={`group-hover:text-[${goldColor}]`}
                  />
                  <p
                    className={`group-hover:text-[${goldColor}] font-semibold text-sm`}
                  >
                    {title}
                  </p>
                  <ArrowDropDownRounded
                    sx={{ fontSize: 20 }}
                    className={`group-hover:text-[${goldColor}]`}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
