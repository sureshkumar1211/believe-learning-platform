import { NextPage } from "next";
import React from "react";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout: NextPage<AuthLayoutProps> = ({ children }) => {
  return (
    <main className="h-full flex justify-center items-center">{children}</main>
  );
};

export default AuthLayout;
