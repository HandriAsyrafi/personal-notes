import { Link, useSearchParams } from "react-router-dom";
import { FaBoxArchive } from "react-icons/fa6";

export default function Header() {
  const [searchParam, setSearchParam] = useSearchParams();
  return (
    <div className="note-app__header">
      <h1>
        <Link to={"/"} className="note-app__header__title">
          Notes
        </Link>
      </h1>
      <Link to={"/archived"} className="nav-link">
        <FaBoxArchive size={20} className="icon" />
      </Link>
      <input type="text" name="search" placeholder="Cari catatan ..." />
    </div>
  );
}
