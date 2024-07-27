import { Link } from "react-router-dom"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../components/ui/popover"
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar"
import Ironclad from "../assets/IroncladDev.jpg"
import "../styles/Navbar.css"


function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary p-2">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">Note App</Link>
        </div>
        <Popover>
          <PopoverTrigger>
            <Avatar>
              <AvatarImage src={Ironclad} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>

          </PopoverTrigger>
          <PopoverContent>
            <ul>
              <li>
                <Link className="link" to="/profile">Profile</Link>
              </li>
              <li>
                <Link className="link" to="/logout">Log Out</Link>
              </li>
              <li>
                <Link to="/test">Test</Link>
              </li>
            </ul>
          </PopoverContent>
        </Popover>

      </nav>
    </div>
  )
}

export default Navbar