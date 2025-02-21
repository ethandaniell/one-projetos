import { BrowserRouter, Routes, Route } from "react-router-dom";
import BasePage from "./pages/BasePage/BasePage";
import Home from "./pages/Home/Home";
import NewVideo from "./pages/NewVideo/NewVideo";
import NotFound from "./pages/NotFound/NotFound";

function AppRoutes() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BasePage />}>
        <Route index element={<Home />} />
        <Route path="/new-video" element={<NewVideo />} />
        <Route path="*" element={<NotFound />}/>
      </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes;
