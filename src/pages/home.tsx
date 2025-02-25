import SideBar from "../components/sidebar/side-bar";
import Dashboard from "../components/dashboard/dashboard";
import NavBar from "../components/navbar/navbar";

const Home = () => {
  return (
    <div className="flex flex-row">
      <div className="hidden fixed left-0 top-0 overflow-y-auto md:w-80 z-40 md:block">
        <SideBar />
      </div>

      <div className="md:ml-80 w-full flex flex-col">
        <div className="sticky top-0 z-40">
          <NavBar />
        </div>
        <div>
          <Dashboard />
        </div>
      </div>
    </div>
  );
};

export default Home;
