import './App.scss';
import { Login } from './components/Auth/Login';
import { Register } from './components/Auth/Register';
import { Chat } from './components/Chat/Chat';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ProtectedRoute } from './components/Router/ProtectedRoute';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path='/'
            element={
              <ProtectedRoute>
                <Chat />
              </ProtectedRoute>
            }
          />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<h1>404 page not found</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
