import sublinks from "../data";
import { useGlobalContext } from "../context";

const NavLinks = () => {
  const { setPageId } = useGlobalContext();

  return (
    <div className="nav-links">
      {sublinks.map((sub) => {
        const { pageId, page } = sub;
        return (
          <button
            type="button"
            key={pageId}
            className="nav-link"
            onMouseEnter={() => setPageId(pageId)}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default NavLinks;
