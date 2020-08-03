import React from "react";

import "./Menu.css";

import Logo from "../../assets/img/Logo.png";
import Button from "../Button";

function Menu() {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={Logo} alt="Elisflix" />
      </a>

      <Button as="a" className="ButtonLink" href="/">
        Novo Video
      </Button>
    </nav>
  );
}

export default Menu;
