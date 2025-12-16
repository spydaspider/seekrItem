import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import './App.css';
import AdminDashboard from './components/AdminDashboard';
import Login from './components/Login';
import { useAuthContext } from './hooks/UseAuthContext';

function App() {
  const { user } = useAuthContext();

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

          {/* Login */}
          <Route
            path="/login"
            element={!user ? <Login /> : <Navigate to="/" />}
          />

          {/* Protected Admin Dashboard */}
          <Route
            path="/"
            element={user ? <AdminDashboard /> : <Navigate to="/login" />}
          />

          {/* Catch all */}
          <Route path="*" element={<Navigate to="/login" />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
