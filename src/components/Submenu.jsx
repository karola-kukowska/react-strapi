import { useGlobalContext } from "../context";
import sublinks from "../data";

const Submenu = () => {
  const { pageId, setPageId } = useGlobalContext();
  let currentPage = null;
  if (pageId) {
    currentPage = sublinks.filter((page) => page.pageId === pageId);
  }
  // console.log(currentPage ? currentPage : "nopage");

  return (
    <section
      className={pageId ? "submenu show-submenu" : "submenu"}
      onMouseLeave={() => setPageId(null)}
    >
      <div>
        {pageId && <h5>{currentPage[0].page}</h5>}
        <ul className="submenu-links">
          {pageId &&
            currentPage[0].links.map((arr) => {
              const { id, url, label, icon } = arr;
              return (
                <li key={id}>
                  <a href={url} onClick={() => setPageId(null)}>
                    {icon}
                    {label}
                  </a>
                </li>
              );
            })}
        </ul>
      </div>
    </section>
  );
};
export default Submenu;
