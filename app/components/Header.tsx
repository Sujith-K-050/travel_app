import { cn } from "libs/utils";
import { useLocation } from "react-router";

interface HeaderProps {
  title: string;
  description: string;
}

const Header = ({ title, description }: HeaderProps) => {
  const location = useLocation();
  return (
    <header className="header">
      <h1
        className={cn(
          "text-dark-100",
          location.pathname === "/"
            ? "text-2xl md:text-4xl font-bold"
            : "text-xl md:text-2xl font-bold"
        )}
      >
        {title}
      </h1>
      <p
        className={cn(
          "text-gray-100 font-normal",
          location.pathname === "/"
            ? "text-base md:text-lg "
            : "text-sm md:text-lg "
        )}
      >
        {description}
      </p>
    </header>
  );
};

export default Header;
