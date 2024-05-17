import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GlobalStyles } from './styles/GlobalStyles';
import { Toaster } from 'react-hot-toast';

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

          <Toaster
            position="top-right"
            containerStyle={{ margin: '10px' }}
            gutter={10}
            toastOptions={{
              duration: 5000,
              style: {
                fontSize: '16px',
                maxWidth: '500px',
                padding: '16px 24px',
                background: 'var(--color-main--0)',
                color: 'var(--color-white)'
              },
              success: {
                duration: 3000
              },
              error: {
                duration: 3000
              }
            }}
          />
        </PostProvider>
      </AuthProvider>
    </>
  );
};

export default App;
