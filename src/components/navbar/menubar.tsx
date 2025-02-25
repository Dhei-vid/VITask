import LogoGold from "../../assets/eagle_logo_gold.png";
import { menuItems } from "../../common/data";
import { Link } from "react-router-dom";
import { goldColor } from "../../common/constants";

const MenuBar = () => {
  return (
    <div
      className={`flex flex-row items-center justify-between p-4 bg-[${goldColor}]`}
    >
      <div>
        <img src={LogoGold} alt="logo" width={100} height={50} />
      </div>

      <div className={"flex flex-row gap-5 items-center p-4"}>
        {menuItems.map(({ id, title, link }) => {
          return (
            <Link key={id} to={link}>
              <p className={`font-semibold`}>{title}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default MenuBar;
