import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ContentProvider from "./context/AppContent.jsx";

createRoot(document.getElementById("root")).render(
  <ContentProvider>
    <App />
  </ContentProvider>
);
