import { Navigate, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { useTheme } from "../../context/ThemeContext";
import { useAuth } from "../../context/AuthContext";
import { isCourseContentPath /* , needsEmailVerification */ } from "../../utils/courseAccess";

/**
 * Course pages need an account: guests go to sign-up and come back to the
 * page they asked for afterwards.
 * (Email verification redirect is commented out until backend deployment.)
 */
function CourseGate({ children }) {
  const { user } = useAuth();
  const location = useLocation();
  if (!isCourseContentPath(location.pathname)) return children;

  const next = encodeURIComponent(`${location.pathname}${location.search}${location.hash}`);
  if (!user) {
    return <Navigate to={`/signup?next=${next}&reason=course`} replace />;
  }
  // if (needsEmailVerification(user)) {
  //   return <Navigate to={`/verify-email?next=${next}`} replace />;
  // }
  return children;
}

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
      <CourseGate>{body}</CourseGate>
      <Footer />
    </>
  );
}

export default Layout;
