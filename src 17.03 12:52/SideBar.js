import React from "react";
import { slide as Menu } from "react-burger-menu";

export default props => {
  return (
    <Menu {...props} right>
      <h2 id="men">Menu</h2>
      <br></br>
      <a class="menu-item" href="/">
        Home
      </a>
      <br></br>
      <a class="menu-item" href="/attractions">
        Attractions
      </a>
      <br></br>
      <a class="menu-item" href="/planAhead">
        Plan Ahead
      </a>
      <br></br>
      <a class="menu-item" href="/language">
        Language
      </a>
    </Menu>
  );
};
