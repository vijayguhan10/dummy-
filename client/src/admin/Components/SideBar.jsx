import React, { useState } from "react";
import { FaAddressBook, FaDiscourse, FaHome, FaTimes } from "react-icons/fa";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Signup from "./Signup"; // Assuming Signup is your form or component for "Add Admin"

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-6 xl:w-[70%] w-96 md:w-[60%] md:ml-20">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600"
        >
          <FaTimes className="w-6 h-6" />
        </button>
        {children}
      </div>
    </div>
  );
};

const SideBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const HandelSignup = () => {
    setIsSignupOpen(!isSignupOpen);
  };

  const handleLogout = () => {
    navigate("/");
    window.location.reload();
  };

  return (
    <div className="flex max-h-full bg-gradient-to-br from-black via-gray-900 to-gray-800 font-Cabin xl:overflow-hidden">
      <button
        onClick={toggleSidebar}
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="default-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 transition-all duration-700 transform lg:translate-x-0 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
        aria-label="Sidebar"
      >
        <div className="h-full px-5 bg-gradient-to-br from-black via-gray-900 to-gray-800">
          <button
            onClick={toggleSidebar}
            className="text-white absolute top-4 right-4 focus:outline-none lg:hidden"
          >
            <FaTimes className="w-6 h-6" />
          </button>

          <ul className="space-y-8 font-medium mt-10">
            <li className="mr-20">
              <h1 className="text-3xl font-Cabin font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
                SOKKAI
              </h1>
            </li>

            <li>
              <Link
                to="/Dashboard"
                className={`flex items-center gap-4 p-3 text-white rounded-lg hover:bg-purple-700 ${
                  location.pathname === "/Dashboard" ? "bg-purple-800" : ""
                }`}
              >
                <FaHome className="text-xl" />
                <span className="text-xl">Dashboard</span>
              </Link>
            </li>

            <li>
              <Link
                to="/coupunhistoy"
                className={`flex items-center gap-4 p-3 text-white rounded-lg hover:bg-purple-700 ${
                  location.pathname === "/Placement" ? "bg-purple-800" : ""
                }`}
              >
                <FaAddressBook className="text-xl" />
                <span className="text-xl">Coupon History</span>
              </Link>
            </li>
            <li>
              <Link
                to="/clienthistory"
                className={`flex items-center gap-4 p-3 text-white rounded-lg hover:bg-purple-700 ${
                  location.pathname === "/clienthistory" ? "bg-purple-800" : ""
                }`}
              >
                <FaDiscourse className="text-xl" />
                <span className="text-xl">Customer Data</span>
              </Link>
            </li>

            <li>
              <Link
                onClick={HandelSignup}
                to="#"
                className={`flex items-center gap-4 p-3 text-white rounded-lg hover:bg-purple-700 ${
                  location.pathname === "" ? "bg-purple-800" : ""
                }`}
              >
                <FaHome className="text-xl" />
                <span className="text-xl">Add Admin</span>
              </Link>
            </li>
          </ul>

          <Link
            to="/"
            onClick={handleLogout}
            className="text-lg bg-white mt-10 font-bold w-36 h-10 flex justify-center items-center shadow-md shadow-[#00000013] rounded-lg text-[#9a41ff] transform mx-auto"
          >
            Logout
          </Link>
        </div>
      </aside>

      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      <Modal isOpen={isSignupOpen} onClose={HandelSignup}>
        <div className="w-[100%]">
          <Signup />
        </div>
      </Modal>
    </div>
  );
};

export default SideBar;
