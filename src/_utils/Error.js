import React, { useEffect } from "react";

const Error = () => {
  useEffect(() => {
    document.title = "Error - Alexis PRIVAT";
  }, []);

  return <div className="errorPage">404 - This page could not be found.</div>;
};

export default Error;
