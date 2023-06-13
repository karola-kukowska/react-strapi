import { useGlobalContext } from "../context";
import { AiOutlineCloseCircle } from "react-icons/ai";
import sublinks from "../data";

const Sidebar = () => {
  const { isSidebarOpen, toggleSidebar } = useGlobalContext();

  return (
    <aside className={isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}>
      <div className="sidebar-container">
        <button type="button" className="close-btn" onClick={toggleSidebar}>
          <AiOutlineCloseCircle />
        </button>
        <div className="sidebar-links">
          {sublinks.map((sub) => {
            const { pageId, page, links } = sub;
            return (
              <article key={pageId}>
                {" "}
                <h4>{page}</h4>
                <div className="sidebar-sublinks">
                  {links.map((item) => {
                    const { label, icon, url, id } = item;
                    return (
                      <a key={id} href={url}>
                        {icon}
                        {label}
                      </a>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </aside>
  );
};
export default Sidebar;
