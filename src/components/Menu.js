import s from "./Menu.module.css";

export default function Menu({ isMenu, setMenu }) {
  console.log(isMenu);
  return (
    <div className={isMenu ? s.menu_active : s.menu_container}>
      <nav className={s.nav}>
        <div
          onClick={() => {
            isMenu ? setMenu(false) : setMenu(true);
          }}
        >
          <span className={s.close}>X</span>
          <div className={s.menu}>
            <h4>MENU</h4>
            <ul>
              <li>
                <a className="menu_link" href="!#">
                  Home
                </a>
              </li>
              <li>
                <a className="menu_link" href="!#">
                  My Works
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
