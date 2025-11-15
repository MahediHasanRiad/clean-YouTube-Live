import { useState } from "react";
import Header from "./header";
import Menu from "./menu";

function NavBar({ children }) {
  const [openMenu, setOpenMenu] = useState(true);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <section>
      <Header toggleMenu={toggleMenu} />
      <section style={{ display: "flex", gap: "20px" }}>
        {openMenu && <Menu />}

        <section style={{ flex: 1 }}>{children}</section>
        
      </section>
    </section>
  );
}

export default NavBar;
