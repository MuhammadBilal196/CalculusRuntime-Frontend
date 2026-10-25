import Header from "./Header";
import Footer from "./Footer";
import { useTheme } from "../../context/ThemeContext";

function Layout({ body }) {
  const { theme, setTheme, darkMode, toggleTheme } = useTheme();

  return (
    <>
      <Header
        theme={theme}
        onThemeChange={setTheme}
        darkMode={darkMode}
        onToggleDark={toggleTheme}
      />
      {body}
      <Footer />
    </>
  );
}

export default Layout;
