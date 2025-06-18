import { BrowserRouter, Routes, Route } from "react-router"

import Home from "./pages/home/Home"
import Authentication from "./pages/auth/Authentication";
import Layout from "./Layout";

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
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;