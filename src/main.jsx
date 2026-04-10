import { createBrowserRouter, RouterProvider } from "react-router";
import { routes } from "./routes";
import { createRoot } from "react-dom/client";
import './index.css'

const router = createBrowserRouter(routes)

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)