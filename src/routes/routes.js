import AuthLayout from "../components/layout/AuthLayout";
import NonAuthLayout from "../components/layout/NonAuthLayout";
import OnboardingLayout from "../components/layout/OnboardingLayout";
import AgentOnboarding from "../pages/Agentonboarding/AgentOnboarding";
import AuthSelection from "../pages/Auth/AuthSelection";
import EmaiilVerification from "../pages/Auth/EmaiilVerification";
import Login from "../pages/Auth/Login";
import Signup from "../pages/Auth/Signup";
import VerifyCode from "../pages/Auth/VerifyCode";
import Dashboard from "../pages/Dashboard";

export const PUBLIC_ROUTES = [
  {
    element: <NonAuthLayout />,
    children: [
      { path: "/login", element: <Login /> },
      { path: "/Signup", element: <Signup /> },
      { path: "/", element: <AuthSelection /> },
      { path: "/verify-code", element: <VerifyCode /> },
      { path: "/email-verification", element: <EmaiilVerification /> },
    ],
  },
];

export const PRIVATE_ROUTES = [
  // 1. The Onboarding Flow (Centered, no sidebar)
  {
    element: <OnboardingLayout />,
    children: [{ path: "/onboarding", element: <AgentOnboarding /> }],
  },
  // 2. The Main Application (With Sidebar)
  {
    element: <AuthLayout />,
    children: [{ path: "/dashboard", element: <Dashboard /> }],
  },
];
