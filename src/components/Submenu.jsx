import { useGlobalContext } from "../context";
import sublinks from "../data";

const Submenu = () => {
  const { pageId, setPageId } = useGlobalContext();
  let currentPage = null;
  if (pageId) {
    currentPage = sublinks.find((page) => page.pageId === pageId);
  }

  return (
    <section
      className={pageId ? "submenu show-submenu" : "submenu"}
      onMouseLeave={() => setPageId(null)}
    >
      <div>
        <h5>{currentPage?.page}</h5>
        <ul
          className="submenu-links"
          style={{
            gridTemplateColumns:
              currentPage?.links?.length > 3 ? "1fr 1fr" : "1fr",
          }}
        >
          {pageId &&
            currentPage.links.map((arr) => {
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
