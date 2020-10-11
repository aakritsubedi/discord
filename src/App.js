import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Login from "Component/Login";
import Chat from "Component/Chat/Chat";
import Sidebar from "Component/Sidebar/Sidebar";

import { selectUser } from "features/users/userSlice";

import { auth } from "Firebase";
import { login, logout } from "features/users/userSlice";

import "assets/css/App.css";

function App() {
  const dispatch = useDispatch();

  const user = useSelector(selectUser);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            email: authUser.email,
            displayName: authUser.displayName,
          })
        );
      } else {
        dispatch(
          logout()
        )
      }
    });
  }, [dispatch]);

  return (
    <div className="app">
      {user ? (
        <>
          <Sidebar />
          <Chat />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
