import Login from "../components/auth/log-in";

const LoginPage = () => {
  // const [isLoggeIn, setIsLoggedIn] = useState(false);

  return (
    <div className={"h-screen"}>
      <div className={"container row"}>
        <div>Home</div>

        <div className={"col"}>
          <Login />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
