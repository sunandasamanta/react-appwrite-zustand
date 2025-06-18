import { create } from "zustand";

type State = {
  isDarkModeEnabled: boolean;
  theme: "light" | "dark";
};

type Action = {
  toggleTheme: () => void;
};

const useThemeStore = create<State & Action>((set) => ({
  isDarkModeEnabled: true,
  theme: "dark",
  toggleTheme: () =>
    set((state) => {
      const isDark = !state.isDarkModeEnabled;
      return {
      isDarkModeEnabled: isDark,
      theme: isDark ? "dark" : "light",
    }}),
}));

export default useThemeStore;
