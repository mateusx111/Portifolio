import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";

const App = () => {
  return (
    <main className="bg-slate-300/20">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={"Home"} />
          <Route path="/about" element={"Sobre"} />
          <Route path="/projects" element={"Projetos"} />
          <Route path="/contact" element={"Contatos"} />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
