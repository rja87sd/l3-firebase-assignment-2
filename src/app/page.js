// src/app/page.js

'use client';

import React from "react";
import LoginForm from "./components/LoginForm";
import { useAuth } from "./context/AuthContext";

export default function Home() {
  const { user, logout } = useAuth;

  return (
    <main>
      {user ? (
        <>
          <p>Welcome, {user.email}</p>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <LoginForm />
      )}
    </main>
  );
}
