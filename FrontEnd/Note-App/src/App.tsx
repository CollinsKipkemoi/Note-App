import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from "./Pages/LogIn/Login"
import Register from "./Pages/SignUp/Register"
import Home from "./Pages/Home/Home"
import Dashboard from "./components/Dashboard"

const routes = (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/dashboard" element={<Dashboard />} />
  </Routes>
)

function App() {
  return (
    <Router>
      <div >
        {routes}
      </div>
    </Router>
  )
}

export default App
