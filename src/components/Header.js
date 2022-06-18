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
            Menu
            <img
              width="24"
              alt="menu"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAAVElEQVRoge3W0Q2AMAxDQRcxOExOhyBSoupuAvvvJQA0WEme7hEVVpKve0SFq3tAFUemuZO83SMAgCIyfppjotGRaWQ8AJxExk9zTDQ6Mo2MB+CPDXJLBiVsKHgMAAAAAElFTkSuQmCC"
            />
          </div>
        </nav>
      </div>
    </>
  );
}
