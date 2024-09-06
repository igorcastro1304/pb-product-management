import { useEffect, useState } from "react";
import LoginPage from "./pages/login";
import { login, logout, verifyUserLogin } from "./utils/auth";
import { Header } from "./components/Header";
import { Link, Outlet, useLocation } from "react-router-dom";
import Button from "./components/Button";
import { ArchiveBoxIcon } from "@heroicons/react/16/solid";
import { useAuth } from "./contexts/AuthContext";

function App() {
  const { currentUser } = useAuth();
  const location = useLocation();
  console.log(location.pathname);

  return (
    <div className="flex flex-col min-h-screen">
      <Header className="h-auto" />
      <div className="grid flex-grow bg-black/70">
        {location.pathname === "/" ? (
          <div className="flex flex-col justify-center gap-10 md:gap-[10rem] lg:gap-[5rem] items-center text-yellow-400">
            <h1 className="pt-5 text-center font-bold md:text-2xl lg:text-4xl lg:w-[50rem]">
              Seja muito bem-vindo ao melhor sistema de gerenciamento de estoque
              do Centro-Oeste
            </h1>

            <div className="flex flex-col items-center justify-center gap-5">
              <ArchiveBoxIcon className="flex items-center justify-center p-4 text-black bg-yellow-400 rounded-full"></ArchiveBoxIcon>
              <Link to={`${currentUser ? "dashboard" : "login"}`}>
                <Button>Comece a usar agora!</Button>
              </Link>
            </div>
          </div>
        ) : (
          <Outlet />
        )}
      </div>
      <footer className="max-h-[50px] flex-grow bg-black">aaaaaa</footer>
    </div>
  );
}

export default App;
