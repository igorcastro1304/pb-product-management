import { useEffect } from "react";
import LoginPage from "./pages/login";
import { logout, verifyUserLogin } from "./utils/auth";

function App() {

  useEffect(() => {
    verifyUserLogin();
  }, []);

  return (
    <div>
      <LoginPage />
      <button onClick={() => logout()}>Logout</button>
    </div>
  );
}

export default App
