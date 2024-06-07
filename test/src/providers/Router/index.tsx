import { Outlet, createBrowserRouter } from "react-router-dom";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/header";
import { Main } from "../../components/Main";
import { NotFound } from "../../components/NotFound";

export const routerConfig = [
  {
    path: "",
    element: (
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
    ),
    children: [
      {
        path: "",
        element: <Main />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
];

export const router = createBrowserRouter(routerConfig);
