import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { menuItems } from "../../common/data";
import LogoGold from "../../assets/eagle_logo_gold.png";

const MenuBar = () => {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);

  return (
    <div className={`flex flex-row items-center justify-between p-4 bg-color`}>
      <div>
        <img src={LogoGold} alt="logo" width={100} height={50} />
      </div>

      <div className={"flex flex-row gap-5 items-center p-4"}>
        {menuItems
          .filter((_, index) => {
            if (isAuthenticated) {
              return index !== 1;
            } else {
              return index !== 2;
            }
          })
          .map(({ id, title, link }) => {
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
