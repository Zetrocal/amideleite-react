import { createBrowserRouter } from "react-router-dom";
import Main from "../../pages/Main";
import Home from "../../pages/Home";
import Products from "../../pages/Products";
import Specials from "../../pages/Specials";
import Category from "../../pages/Category";
import AboutUs from "../../pages/AboutUs";
import Location from "../../pages/Location";
import News from "../../pages/News";
import Gallery from "../../pages/Gallery";
import Product from "../../pages/Product";
import Error from "../../pages/Error";
import Terms from "../../pages/Terms";

const routes = [
  {
    path: "/",
    element: <Main />,
    errorElement: <Error/>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/AboutUs",
        element: <AboutUs />,
      },
      {
        path: "/Location",
        element: <Location/>,
      },
      {
        path: "/News",
        element: <News/>,
      },
      {
        path: "/Gallery",
        element: <Gallery/>,
      },
      {
        path: "/Category",
        element: <Category/>,
      },
      {
        path: "/Terms",
        element: <Terms/>
      },
      {
        path: "/Cakes",
        children: [
          {
            index: true,
            element: <Products type="cakes" />,
          },
          {
            path: ":productId",
            element: <Product/>,
          }
        ]
      },
      {
        path: "/Mousecakes",
        children: [
          {
            index: true,
            element: <Products type="mousecakes" />,
          },
          {
            path: ":productId",
            element: <Product/>,
          }
        ]
      },
      {
        path: "/Cupcakes",
        children: [
          {
            index: true,
            element: <Products type="cupcakes" />,
          },
          {
            path: ":productId",
            element: <Product/>,
          }
        ]
      },
      {
        path: "/Cheesecakes",
        children: [
          {
            index: true,
            element: <Products type="cheesecakes" />,
          },
          {
            path: ":productId",
            element: <Product/>,
          }
        ]
      },
      {
        path: "/Tarts",
        children: [
          {
            index: true,
            element: <Products type="tarts" />,
          },
          {
            path: ":productId",
            element: <Product/>,
          }
        ]
      },
      {
        path: "/Pastries",
        children: [
          {
            index: true,
            element: <Products type="pastries" />,
          },
          {
            path: ":productId",
            element: <Product/>,
          }
        ]
      },
      {
        path: "/Specials",
        element: <Specials />,
      }
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
