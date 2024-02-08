import Body from "./components/Body";
import Head from "./components/Head";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import WatchPage from "./components/WatchPage";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
  },
  {
    path: "/watch",
    element: <WatchPage />,
  },
]);
function App() {
  return (
    <div>
      <Head />
      <RouterProvider router={appRouter}></RouterProvider>
    </div>
  );
}

export default App;
