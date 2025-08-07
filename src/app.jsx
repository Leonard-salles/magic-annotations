import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router";

//pages
import { Login } from "./pages/login/login";
import { Home } from "./pages/home/home";
import { Navigation } from "./components/navigation/navigation";

import { useAuthentication } from "./hooks/useAuthentication";
import { onAuthStateChanged } from "firebase/auth";

import { AuthProvider } from "./context/auth-context";
import { TestesPage } from "./pages/test-page/testes-page";
import { NotFound } from "./components/navigation/error-page/not-found";
import { Register } from "./pages/register/register";

export const App = () => {
  const [user, setUser] = useState(undefined);

  const { auth } = useAuthentication();

  const loadingUser = user === undefined;

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, [auth]);

  if (loadingUser) {
    return <p>Carregando...</p>;
  }
  return (
    <AuthProvider value={{ user }}>
      <BrowserRouter>
        <div className="flex gap-0.5">
          {user && <Navigation />}
          <Routes>
            <Route
              path="*"
              element={<NotFound />}
            />
            <Route
              path="/"
              element={user ? <Home /> : <Navigate to="/login" />}
            />
            <Route
              path="/test"
              element={user ? <TestesPage /> : <Navigate to="/" />}
            />
            <Route
              path="/login"
              element={!user ? <Login /> : <Navigate to="/" />}
            />
            <Route
              path="/register"
              element={!user ? <Register /> : <Navigate to="/" />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
};
