import FormBesoinView from "./pages/FormBesoinView";
import FormProfilView from "./pages/FormProfilView";
import FormQuestionView from "./pages/FormQuestionView";
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
            <Route path="/FormProfilView" element={<FormProfilView />} />
            <Route exact path="/FormQuestionView" element={<FormQuestionView />} />
          </Routes>
        </Router>
    </>
  );
}

export default App;
