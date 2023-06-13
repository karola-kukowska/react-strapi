import { useGlobalContext } from "../context";
import { AiOutlineCloseCircle, AiOutlineClose } from "react-icons/ai";
import sublinks from "../data";

const Sidebar = () => {
  const { isSidebarOpen, toggleSidebar } = useGlobalContext();

  return (
    <aside className={isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}>
      <div className="sidebar-container">
        <button type="button" className="close-btn" onClick={toggleSidebar}>
          <AiOutlineCloseCircle />
        </button>
        <article>
          <div className="sidebar-sublinks">
            {sublinks.map((sub) => {
              const { pageId, page, links } = sub;

              return (
                <ul key={pageId}>
                  {" "}
                  <h4>{page}</h4>
                  {links.map((item) => {
                    const { label, icon, url, id } = item;
                    return (
                      <li key={id}>
                        <a href={url}>
                          {icon}
                          {label}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              );
            })}
          </div>
        </article>
      </div>
    </aside>
  );
};
export default Sidebar;
