import FormBesoinView from "./pages/FormBesoinView";
import FormBG from "./Component/FormBG";
import Header from "./Component/Header";
import Nav from "./Component/Nav";
import ProfilageView from "./pages/ProfilageView";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="d-flex">
        <div className="col-lg-2 col-md-3 p-0">
          <Nav />
        </div>
        <div className="col-lg-10 col-md-9">
          <Header />
          <Routes>
            <Route path="/" element={<FormBG />} />
            <Route exact path="/FormBesoinView" element={<FormBesoinView />} />
            <Route path="/ProfilageView" element={<ProfilageView />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
