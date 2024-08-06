import { useEffect, useState } from "react";
import LoginPage from "./pages/login";
import { login, logout, verifyUserLogin } from "./utils/auth";
import { Header } from "./components/Header";
import { Link, Outlet, useLocation } from "react-router-dom";
import Button from "./components/Button";
import { ArchiveBoxIcon } from "@heroicons/react/16/solid";

function App() {

  const [userIsLoggedIn, setUserIsLoggedIn] = useState(false);
  const location = useLocation();
  console.log(location.pathname);

  useEffect(() => {
    const unsubscribe = verifyUserLogin((user) => {
      if (user) {
        setUserIsLoggedIn(true);
        console.log("User is logged in:", user.uid);
      } else {
        setUserIsLoggedIn(false);
        console.log("User is not logged in");
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header userIsLoggedIn={userIsLoggedIn} className="h-auto" />
      <div className="flex-grow grid bg-black/70">
        {location.pathname === "/" ? (
          <div className="flex flex-col justify-center gap-10 md:gap-[10rem] lg:gap-[5rem] items-center text-yellow-400">
            <h1 className="pt-5 text-center font-bold md:text-2xl lg:text-4xl lg:w-[50rem]">Seja muito bem-vindo ao melhor sistema de gerenciamento de estoque do Centro-Oeste</h1>

            <div className="flex flex-col justify-center items-center gap-5">
              <ArchiveBoxIcon className="bg-yellow-400 text-black rounded-full flex justify-center items-center p-4"></ArchiveBoxIcon>
              <Link to="login"><Button>Comece a usar agora!</Button></Link>
            </div>


          </div>
        ) : (
          <Outlet userIsLoggedIn={userIsLoggedIn} />
        )}
      </div>
      <footer className="max-h-[50px] flex-grow bg-black">aaaaaa</footer>
    </div>
  );
}

export default App
