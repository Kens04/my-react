import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import TopPage from "./TopPage";
import BookPage from "./BookPage";
import RouterParam from "./RouterParam";
import SearchPage from "./SearchPage";
import NotFoundPage from "./NotFoundPage";
import BookQueryPage from "./BookQueryPage";
import BookStatePage from "./BookStatePage";

const routesParam = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RouterParam />}>
      <Route path="/" element={<TopPage />} />
      <Route path="/book/:isbn?" element={<BookPage />} />
      <Route path="/bookQuery" element={<BookQueryPage />} />
      <Route path="/bookState" element={<BookStatePage />} />
      {/* 可変長パラメーターを定義 */}
      <Route path="/search/*" element={<SearchPage />} />
      {/* 任意のページに対応するルート */}
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);

export default routesParam;
