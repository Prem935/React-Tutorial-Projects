import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import {
  About,
  NewsLetter,
  Cocktail,
  Error,
  HomeLayout,
  Landing,
  SinglePageError,
} from "./pages";

import { loader as loaderloading } from "./pages/Landing";
import { loader as singleCocktail } from "./pages/Cocktail";
import { action as newsletterAction } from "./pages/NewsLetter";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 4,
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <SinglePageError />,
        loader: loaderloading,
      },
      {
        path: "/newsletter",
        errorElement: <SinglePageError />,
        element: <NewsLetter />,
        action: newsletterAction,
      },
      // {
      //   path: "/error",
      //   element: <Error />,
      // },
      {
        path: "/cocktail/:id",
        errorElement: <SinglePageError />,
        element: <Cocktail />,
        loader: singleCocktail,
      },
      {
        path: "/about",
        errorElement: <SinglePageError />,
        element: <About />,
      },
    ],
  },
]);
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />;
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
export default App;
