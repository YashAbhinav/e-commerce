import React from "react";
import { Link } from "react-router-dom";
function NotFound() {
  return (
    <div className="font-sans bg-sky-light min-h-screen flex flex-col items-center justify-center">
      <h2 className="text-3xl font-extrabold">Oops! Page not found.</h2>
      <div className="mt-4">
        <img src="https://cdn.discordapp.com/attachments/1002492483298668555/1016644001337716788/abc.png" />
      </div>
      <h3 className="mt-4 text-xl font-bold">We can't find the page you're looking for.</h3>
      <Link to="/" className="mt-4 text-xl border-2 border-white shadow-xl rounded-md text-white px-4 py-1 bg-primary-500 hover:bg-primary-600 mb-4 md:mb-0">
        GO BACK HOME
      </Link>
    </div>
  );
}
export default NotFound;