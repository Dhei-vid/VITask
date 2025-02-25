import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { signInUserAPI } from "../common/helpers";
import { IUserCredentials, IUser } from "../common/types";

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (userCredentials: IUserCredentials, { rejectWithValue }) => {
    try {
      const response = await signInUserAPI(userCredentials);
      return response.data.data;

      // Save to localStorage
      // localStorage.setItem("user", JSON.stringify(userData));

      // return userData;
    } catch (error) {
      const errorMessage = (error as any).response?.data || "Login failed";
      return rejectWithValue(errorMessage);
    }
  }
);

interface IInitialState {
  isLoading: boolean;
  user: IUser | null;
  token: string | null;
  isAuthenticated: boolean;
  error: string | null;
}

const initialState: IInitialState = {
  isLoading: false,
  token: null,
  user: JSON.parse(localStorage.getItem("user") || "null"),
  isAuthenticated: !!localStorage.getItem("user"),
  error: null as string | null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    //  if required
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      state.isLoading = false;
      state.error = null;

      localStorage.removeItem("user");
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.token = action.payload.token;
        state.isAuthenticated = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = false;
        state.user = null;
        state.error = action.error as any;
        if (action.error.message === "Request failed with status code 401") {
          state.error = "Access Denied! Please check your credentials";
        } else {
          state.error = action.error.message as unknown as string;
        }
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
