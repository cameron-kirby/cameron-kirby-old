import React from "react";
import { Link, useHistory } from "react-router-dom";

export default function CustomLink({ to, children, propClass, setTransition }) {
  const history = useHistory();

  function delayAndGo(e) {
    e.preventDefault();

    if(!(history.location.pathname === to)){
      setTransition("exit")

      setTimeout(() => {
          setTransition("enter")
          history.push(to)
      }, 500);
    }
  }

  return (
    <Link to={to} onClick={delayAndGo} className={propClass} >
      {children}
    </Link>
  );
}