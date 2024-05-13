import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Page1 from './Pages/Page1';
import Page2 from './Pages/Page2';
import Page3 from './Pages/Page3';
import Page4 from './Pages/Page4';

function App() {
  return (
    <>
    <Router>
      <div className="min-h-screen bg-gray-600">
          <Navbar />
            <div className="container mx-auto py-10">
              <Routes>
                <Route
                  path="/"
                  element={<Page1/>}
                />
                <Route
                  path="/page2"
                  element={<Page2/>}
                />
                <Route
                  path="/page3"
                  element={<Page3/>}
                />
                <Route
                  path="/page4"
                  element={<Page4/>}
                />
              </Routes>
            </div>
      </div>
    </Router>
    </>
  )
}

export default App

