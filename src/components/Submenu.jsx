import { useGlobalContext } from "../context";
import { useRef } from "react";
import sublinks from "../data";

const Submenu = () => {
  const { pageId, setPageId } = useGlobalContext();

  let currentPage = null;
  if (pageId) {
    currentPage = sublinks.find((page) => page.pageId === pageId);
  }

  const submenuContainer = useRef(null);
  const handleMouseLeave = (event) => {
    const submenu = submenuContainer.current;
    const { left, right, bottom } = submenu.getBoundingClientRect();
    const { clientX, clientY } = event;
    // console.log(result, clientX, clientY);
    if (clientX < left - 1 || clientX > right - 1 || clientY > bottom - 1) {
      setPageId(null);
    }
  };
  return (
    <section
      className={pageId ? "submenu show-submenu" : "submenu"}
      onMouseLeave={handleMouseLeave}
      ref={submenuContainer}
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
