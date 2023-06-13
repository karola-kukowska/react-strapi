import sublinks from "../data";
import { useGlobalContext } from "../context";

const NavLinks = () => {
  const { setPageId } = useGlobalContext();

  return (
    <div className="nav-links">
      <ul className="nav-links-center">
        {sublinks.map((sub) => {
          const { pageId, page } = sub;
          return (
            <li
              key={pageId}
              className="nav-link"
              onMouseEnter={() => setPageId(pageId)}
            >
              {page}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NavLinks;
