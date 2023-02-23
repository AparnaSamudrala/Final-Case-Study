import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./UI/Home";
import Contact from "./UI/Contact";
import Jobs from "./UI/Jobs";
import NoMatch from "./components/NoMatch";
import ApplyJob from "./components/Jobs/Apply/ApplyJob";
import PageLayout from "./components/Layout/PageLayout";


function App() {
  return (
    <div className="flex-wrapper">
      <BrowserRouter>
        <Routes>
          <Route element={<PageLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/applyjob/:id" element={<ApplyJob />} />
          </Route>
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
