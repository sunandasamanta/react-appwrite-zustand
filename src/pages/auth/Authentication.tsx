// import { Outlet } from "react-router"
import Login from "./login/Login"

export default function Authentication() {
  return (
    <div>
      <h1 className="">Authentication</h1>
      <div>
        {/* <Outlet /> */}
        <Login />
      </div>
    </div>
  )
}
