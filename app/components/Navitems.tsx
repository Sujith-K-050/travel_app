import { cn } from "libs/utils";
import { Link, NavLink } from "react-router";
import { sidebarItems } from "~/constants";

const Navitems = ({ handleClick }: { handleClick: () => void }) => {
  const user = {
    name: "Sujith",
    email: "Sujithyadav050@gamil.com",
    imageUrl: "/assets/images/david.webp",
  };

  return (
    <section className="nav-items">
      <Link to="/" className="link-logo">
        <img src="/assets/icons/logo.svg" alt="logo" />
        <h1>Tourvisto</h1>
      </Link>
      <div className="container">
        <nav>
          {sidebarItems.map(({ id, icon, href, label }) => (
            <NavLink to={href} key={id}>
              {({ isActive }: { isActive: boolean }) => (
                <div
                  onClick={handleClick}
                  className={cn("group nav-item", {
                    "bg-primary-100 !text-white": isActive,
                  })}
                >
                  <img
                    src={icon}
                    alt={label}
                    className={`group-hover:brightness-0 size-0  group-hover:invert ${isActive ? "brightness-0 invert" : "text-dark-200"}`}
                  />
                  {label}
                </div>
              )}
            </NavLink>
          ))}
        </nav>
        <footer className="nav-footer">
          <img
            src={user?.imageUrl || "assets/images/"}
            alt={user?.name || "david"}
            className="size-8 rounded-full object-cover"
          />
          <article>
            <h2>{user?.name || "User"}</h2>
            <p>{user?.email || "Email"}</p>
          </article>
          <button
            onClick={() => {
              console.log("Logout");
            }}
            className="cursor-pointer"
          >
            <img
              src="/assets/icons/logout.svg"
              alt="Logout"
              className="size-6"
            />
          </button>
        </footer>
      </div>
    </section>
  );
};

export default Navitems;
