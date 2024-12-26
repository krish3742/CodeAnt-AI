import { Routes, Route, Navigate } from "react-router-dom";

import SignIn from "./pages/SignIn";
import Dashboard from "./pages/Dashboard";

function App() {
  const NotFoundRedirect = () => <Navigate to="/" />;
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="*" element={<NotFoundRedirect />} />
    </Routes>
  );
}

export default App;
