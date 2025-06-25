import { BrowserRouter, Routes, Route } from "react-router"

import Home from "./pages/home/Home"
import Authentication from "./pages/auth/Authentication";
import Layout from "./Layout";
import ProtectedRoute from "./components/ProtectedRoute";
import Profile from "./pages/profile/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="auth" >
            <Route index element={<Authentication />} />
            <Route path="login" />
          </Route>
          <Route element={<ProtectedRoute />}>
            <Route path="profile" element={<Profile />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;