// import { Outlet } from "react-router"
import Login from "./login/Login"
import Signup from "./signup/Signup"

// importing 
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react"

export default function Authentication() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen ">
      <h1 className="">Authentication</h1>
      <TabGroup>
        <TabList className="flex gap-4">
          <Tab className="cursor-pointer">
            Log In
          </Tab>
          <Tab className="cursor-pointer">
            Sign Up
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Login />
          </TabPanel>
          <TabPanel>
            <Signup />
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
  )
}
