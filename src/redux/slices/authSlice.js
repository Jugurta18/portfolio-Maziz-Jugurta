import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const loginAsync = createAsyncThunk(
  "auth/loginAsync",
  async (credentials, { getState, rejectWithValue }) => {
    const { email, password } = credentials;
    const { registeredUsers } = getState().auth;
    
    const foundUser = registeredUsers.find(
      (user) => user.email === email && user.password === password
    );
    
    if (foundUser) {
      return foundUser;
    } else {
      return rejectWithValue("Identifiants invalides");
    }
  }
);

const initialState = {
  isAuthenticated: false,
  user: null,
  registeredUsers: [], 
  status: "idle",
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    REGISTER: (state, action) => {
      
      if (!state.registeredUsers) {
        state.registeredUsers = [];
      }
      state.registeredUsers.push(action.payload);
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    LOGOUT: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.isAuthenticated = true;
        state.user = action.payload;
      })
      .addCase(loginAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || action.error.message;
      });
  },
});

export const { REGISTER, LOGOUT } = authSlice.actions;
export default authSlice.reducer;
