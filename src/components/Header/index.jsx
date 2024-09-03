import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Card,
} from "@material-tailwind/react";
import { logout } from "../../utils/auth";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

export function Header(props) {
  const { currentUser } = useAuth();
  console.log(currentUser);

  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        className="p-1 font-normal text-yellow-400"
      >
        <a href="#" className="flex items-center"></a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        className="p-1 font-normal text-yellow-400"
      >
        <a href="#" className="flex items-center">
          {currentUser ? "Dashboard" : "Sobre Nós"}
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        className="p-1 font-normal text-yellow-400"
      >
        <a href="#" className="flex items-center">
          {currentUser ? "Usuários" : "Contate-nos"}
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        className="p-1 font-normal text-yellow-400"
      >
        <a href="#" className="flex items-center">
          {currentUser ? "Estoque" : "Política de Privacidade"}
        </a>
      </Typography>
    </ul>
  );

  return (
    <div className="max-h-[768px] w-screen bg-black">
      <Navbar className="z-10 max-w-full px-4 py-2 rounded-none h-max lg:px-8 lg:py-4">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Link
            to="/"
            className="mr-4 cursor-pointer py-1.5 font-medium text-yellow-400"
          >
            Logo
          </Link>
          <div className="flex items-center gap-4">
            <div className="hidden mr-4 lg:block">{navList}</div>
            <div className="flex items-center gap-x-1">
              {currentUser ? (
                <div>
                  <Button
                    variant="text"
                    size="sm"
                    className="hidden text-yellow-400 lg:inline-block"
                    onClick={() => logout()}
                  >
                    <span>Logout</span>
                  </Button>
                </div>
              ) : (
                <div>
                  <Button
                    variant="text"
                    size="sm"
                    className="hidden text-yellow-400 lg:inline-block"
                  >
                    <Link to="login">Cadastro</Link>
                  </Button>
                  <Button
                    variant="gradient"
                    size="sm"
                    className="hidden text-yellow-400 lg:inline-block"
                  >
                    <Link to="login">Login</Link>
                  </Button>
                </div>
              )}
            </div>
            <IconButton
              variant="text"
              className="w-6 h-6 ml-auto text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="w-6 h-6 text-yellow-400"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-yellow-400"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav}>
          {navList}
          <div className="flex flex-row items-center justify-end gap-x-1">
            {currentUser ? (
              <div>
                <Button
                  fullWidth
                  variant="text"
                  size="sm"
                  className="text-yellow-400"
                  onClick={() => logout()}
                >
                  <span>Logout</span>
                </Button>
              </div>
            ) : (
              <div className="flex flex-row items-center justify-end gap-x-1">
                <Button
                  fullWidth
                  variant="text"
                  size="sm"
                  className="text-yellow-400"
                >
                  <Link to="login">Cadastro</Link>
                </Button>
                <Button
                  fullWidth
                  variant="gradient"
                  size="sm"
                  className="text-yellow-400"
                >
                  <Link to="login">Login</Link>
                </Button>
              </div>
            )}
          </div>
        </MobileNav>
      </Navbar>
    </div>
  );
}
