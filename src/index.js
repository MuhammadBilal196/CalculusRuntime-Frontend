import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { installBackendWake } from "./utils/backendWake";
import "./styles/theme.css";
import "./styles/responsive.css";
import "./styles/partial-theme.css";
import "./styles/tokens.css";
import "./styles/study-theme.css";

// Wake the SnapDeploy backend if it is asleep (no-op locally).
installBackendWake();

// Fade out the boot loader from public/index.html once React has painted.
function hideBootLoader() {
  const boot = document.getElementById("cv-boot");
  if (!boot) return;
  boot.classList.add("cv-boot--done");
  setTimeout(() => boot.remove(), 400);
}

function BootReady({ children }) {
  useEffect(() => {
    requestAnimationFrame(hideBootLoader);
  }, []);
  return children;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BootReady>
      <App />
    </BootReady>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
