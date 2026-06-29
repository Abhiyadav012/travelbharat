import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-orange-50 to-white px-6">

      <h1 className="text-8xl font-extrabold text-orange-500">
        404
      </h1>

      <h2 className="text-4xl font-bold mt-6">
        Page Not Found
      </h2>

      <p className="text-gray-500 mt-4 text-center max-w-md">
        Sorry, the page you're looking for doesn't exist or has been moved.
      </p>

      <Link
        to="/"
        className="mt-8 px-8 py-4 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold shadow-lg hover:scale-105 transition"
      >
        Back To Home
      </Link>

    </div>
  );
}

export default NotFound;