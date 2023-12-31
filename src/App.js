import Header from './components/Header';
import './index.css';
import Employees from './pages/Employees';
import Customers from './pages/Customers';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dictionary from './pages/Dictionary';
import Definition from './pages/Definition';

function App() {
  return (
        <BrowserRouter>
            <Header>
              <Routes>
                <Route path="/employees" element={<Employees />} />
                <Route path="/dictionary" element={<Dictionary />} />
                <Route path="/definition/:search" element={<Definition />} />
                <Route path="/customers" element={<Customers />} />
              </Routes>
            </Header>
        </BrowserRouter>
  );
}

export default App;
