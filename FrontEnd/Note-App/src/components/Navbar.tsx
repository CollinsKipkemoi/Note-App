import { Link } from "react-router-dom";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../components/ui/popover";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import Ironclad from "../assets/IroncladDev.jpg";
import "../styles/Navbar.css";
import SearchBar from "./Searchbar/SearchBar";
import { useState } from "react";

function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const onClearSearch = () => {
    setSearchQuery("");
  };

  const onSearch = () => {};
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary p-2">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            Note App
          </Link>
        </div>
        <div className="serachbar">
          <SearchBar
            value={searchQuery}
            onChange={({ target }) => {
              setSearchQuery(target.value);
            }}
            onClearSearch={onClearSearch}
            onSearch={onSearch}
          />
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
                <Link className="link" to="/profile">
                  Profile
                </Link>
              </li>
              <li>
                <Link className="link" to="/logout">
                  Log Out
                </Link>
              </li>
            </ul>
          </PopoverContent>
        </Popover>
      </nav>
    </div>
  );
}

export default Navbar;
