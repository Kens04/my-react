import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import RouterApp from "./RouterApp";
import TopPage from "./TopPage";
import ArticlePage from "./ArticlePage";
import AboutPage from "./AboutPage";
import InfoPage from "./InfoPage";
import RouterNav from "./RouterNav";

const routesLink = createBrowserRouter(
  createRoutesFromElements(
    // トップルートを追加
    <Route element={<RouterNav />}>
      <Route path="/" element={<TopPage />} />
      <Route path="/article" element={<ArticlePage />} />
      <Route path="/article/info" element={<InfoPage />} />
      <Route path="/about" element={<AboutPage />} />
    </Route>
  )
);

export default routesLink;