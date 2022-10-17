import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import TraasaveHomePage from "./pages/TraasaveHomePage";
import TransaveContactPage from "./pages/TransaveContactPage";
import SideMenu from "./pages/SideMenu";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    //TODO: Update meta titles and descriptions below
    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/signup-page":
        title = "";
        metaDescription = "";
        break;
      case "/form":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<TraasaveHomePage />} />

      <Route path="/signup-page" element={<TransaveContactPage />} />

      <Route path="/form" element={<SideMenu />} />
    </Routes>
  );
}
export default App;
