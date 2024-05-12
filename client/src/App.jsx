import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GlobalStyles } from './styles/GlobalStyles';
import { Home, Profile, Login, Register } from './pages';
import { AuthProvider } from './context/AuthContext';
import { PostProvider } from './context/PostContext';

import AppLayout from './ui/AppLayout';
import ProtectedRoutes from './ui/ProtectedRoutes';

const App = () => {
  return (
    <>
      <AuthProvider>
        <PostProvider>
          <GlobalStyles />
          <BrowserRouter>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route
                element={
                  <ProtectedRoutes>
                    <AppLayout />
                  </ProtectedRoutes>
                }
              >
                <Route path="/" element={<Home />} />
                <Route path="/profile/:username" element={<Profile />} />
              </Route>
              <Route path="*" element={<h2>Invalid Route</h2>} />
            </Routes>
          </BrowserRouter>
        </PostProvider>
      </AuthProvider>
    </>
  );
};

export default App;
