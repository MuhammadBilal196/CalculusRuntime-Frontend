import Header from "./Header";
import Footer from "./Footer";
import { useTheme } from "../../context/ThemeContext";

function Layout({ body }) {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <>
      <Header darkMode={darkMode} onToggleDark={toggleTheme} />
      {body}
      <Footer />
    </>
  );
}

export default Layout;
