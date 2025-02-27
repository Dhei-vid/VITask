import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../store/auth-slice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import InputField from "./input";

const Login = () => {
  const [identifier, setIdentifier] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const { isLoading, error } = useSelector((state: RootState) => state.auth);

  const handleSignIn = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userCredentials = {
      identifier,
      password,
    };

    dispatch(loginUser(userCredentials)).then((result) => {
      if (result.payload) {
        setIdentifier("");
        setPassword("");

        navigate("/dashboard");
      }
    });
  };

  return (
    <div className={"flex flex-col gap-5 rounded-lg bg-white p-7"}>
      <div>
        <p className={"font-bold text-xl"}>Login</p>
        <p className={"text-sm text-slate-600"}>
          Enter your email & password to login
        </p>
      </div>

      <form onSubmit={handleSignIn} className={"flex flex-col gap-2"}>
        <InputField
          label="Email Address"
          type="email"
          value={identifier}
          onChange={(e) => setIdentifier(e.target.value)}
        />
        <InputField
          label="Password"
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="flex flex-row gap-3 items-center  mb-3 form-check">
          <input
            type="checkbox"
            className={"form-check-input"}
            id="exampleCheck1"
            checked={showPassword}
            onChange={() => setShowPassword(!showPassword)}
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Show Password
          </label>
        </div>

        <button
          type="submit"
          className={`my-1 cursor-pointer p-2 text-white font-semibold rounded-lg bg-color`}
        >
          {isLoading ? "Loading..." : "Sign In"}
        </button>
        {error && (
          <p className={"text-xs text-red-500"}>{error}. Please try again</p>
        )}
      </form>
    </div>
  );
};

export default Login;
