import { Outlet } from "react-router";

// importing theme store
import useThemeStore from "./store/themeStore";

// importing components
import Navbar from "./components/Navbar";


export default function Layout() {
  const { theme } = useThemeStore()
  return (
    <div className={`min-h-screen bg-${theme}`}>
      <Navbar />
      <main className="">
        <Outlet />
      </main>
    </div>
  )
}
