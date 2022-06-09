import { useState } from "react";
import s from "./Header.module.css";
import Menu from "./Menu";

export default function Header() {
  const [isMenu, setMenu] = useState(false);
  return (
    <>
      <Menu isMenu={isMenu} setMenu={setMenu} />
      <div className="container">
        <nav className={s.nav}>
          <div className={s.logo}>Dorki_</div>
          <div
            className={s.menu}
            onClick={() => {
              isMenu ? setMenu(false) : setMenu(true);
            }}
          >
            Menu<i className="fa-solid fa-bars"></i>
          </div>
        </nav>
      </div>
    </>
  );
}
