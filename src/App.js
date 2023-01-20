import TopLoader from "react-top-loader";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Skills from "./routes/skills";
import Navigation from "./components/navigation/navigation.component";
import Home from "./routes/home";
import Contact from "./routes/contact";
import Life from "./routes/life";

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigation />}/>
      <Route index={true} element={<Home/>}/>
      <Route path="skills"  element={<Skills/>}/>
      <Route path="contact"  element={<Contact/>}/>
      <Route path="life"  element={<Life/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
