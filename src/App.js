import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from './pages/home';
import { Login } from './pages/login';
import { Create } from './pages/create';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </Router>
  );
}

export default App;
