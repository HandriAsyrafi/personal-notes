import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="note-app__header">
      <h1>
        <Link to={"/"} className="note-app__header__title">
          Notes
        </Link>
      </h1>
      <Link to={"/archived"} className="nav-link">
        Archive
      </Link>
      <input type="text" name="search" placeholder="Cari catatan ..." />
    </div>
  );
}
