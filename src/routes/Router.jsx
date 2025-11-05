import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Loading from "../components/common/loading/Loading";
const Home = lazy(() => import("../pages/Home"));
const Main = lazy(() => import("../layouts/Main"));

// Deteksi otomatis environment
const isVercel = window.location.hostname.includes("vercel.app");

const repoName = import.meta.env.VITE_REPO_NAME || "";
// tambahan
const baseName = isVercel ? "/" : `/${repoName}`;

export const router = createBrowserRouter(
  [
    {
      path: `/`,
      element: (
        <Suspense fallback={<Loading />}>
          <Main />
        </Suspense>
      ),
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
      ],
    },
  ],
  // { basename: `/${repoName}` }
  { basename: baseName }
);
