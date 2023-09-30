import FormBesoinView from "./pages/FormBesoinView";
import Header from "./Component/Header";
import Nav from "./Component/Nav";
import ProfilageView from "./pages/ProfilageView";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
        <Header />
        <Nav />
        <Router>
          <Routes>
            <Route exact path="/FormBesoinView" element={<FormBesoinView />} />
            <Route path="/ProfilageView" element={<ProfilageView />} />
          </Routes>
        </Router>
    </>
  );
}

export default App;
