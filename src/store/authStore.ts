import { create } from "zustand";
import type { Models } from "appwrite";

import authService from "../authentication/AuthServices";

// type User = {
//   ID: ID;
//   name: string;
//   username: string;
//   email: string;
// }

type State = {
  user: Models.User<Models.Preferences> | null;
  loading: boolean;
};

type Actions = {
  getUser: () => Promise<void>;
  login: (userCredentials: {
    email: string;
    password: string;
  }) => Promise<void>;
  logout: () => Promise<void>;
  logoutAllDevices: () => Promise<void>;
};

const { login, getCurrentUser, logout, logoutAllDevices } = authService;

const useAuthStore = create<State & Actions>((set) => ({
  user: null,
  loading: true,
  getUser: async () => {
    try {
      const user = await getCurrentUser();
      set({ user: user, loading: false });
    } catch (error) {
      console.error("Error fetching user :: ", error);
      set({ user: null, loading: false });
    }
  },
  login: async ({ email, password }) => {
    try {
      await login(email, password);
      const user = await getCurrentUser();
      set({ user });
    } catch (error) {
      console.error("Login failed :: ", error);
      set({ user: null, loading: false });
    }
  },
  logout: async () => {
    try {
      await logout();
      set({ user: null, loading: false });
    } catch (error) {
      console.error("Logout failed :: ", error);
    }
  },
  logoutAllDevices: async () => {
    try {
      await logoutAllDevices();
    } catch (error) {
      console.error("Logout from all devices failed :: ", error);
      
    }
  }
}));

export default useAuthStore;
