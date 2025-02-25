import axios from "axios";
import { IUserCredentials } from "./types";

export const signInUserAPI = async (userData: IUserCredentials) => {
  try {
    const apiURL = "/benion-ml/api/auth/login";

    const Header = {
      "x-api-key": import.meta.env.VITE_API_KEY,
      "Content-Type": "application/json",
    };

    const response = await axios.post(apiURL, userData, {
      headers: Header,
      maxRedirects: 0,
    });

    return response;
  } catch (error) {
    console.log("Error signing user up");
    throw new Error(error as unknown as string);
  }
};
