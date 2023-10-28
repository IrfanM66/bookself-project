import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { FiLogOut } from "react-icons/fi";
import LocaleContext from "../context/LocaleContext";
import ThemeContext from "../context/ThemeContext";
import { FaMoon, FaSun } from "react-icons/fa";

function Header({ logout, name }) {
  const { localeContext, toggleLocaleContext } =
    React.useContext(LocaleContext);
  const { themeContext, toggleThemeContext } = React.useContext(ThemeContext);
  if (name === undefined) {
    return (
      <nav>
        <ul>
          <li>
            <Link className="nav-logo" to="/">
              {localeContext === "id" ? "Aplikasi Catatan" : "Notes App"}
            </Link>
          </li>
          <div className="right">
            <li>
              <button onClick={toggleThemeContext}>
                {themeContext === "light" ? <FaMoon /> : <FaSun />}
              </button>
            </li>
            <li>
              <button onClick={toggleLocaleContext}>
                {localeContext === "id" ? "en" : "id"}
              </button>
            </li>
          </div>
        </ul>
      </nav>
    );
  }
  return (
    <nav>
      <ul>
        <h2>Bookshelf</h2>
        <div className="nav-left">
          <li></li>
          <li>
            <Link className="navbar-beranda" to="/">
              {localeContext === "id" ? "Beranda" : "Home"}
            </Link>
          </li>
          <li>
            <Link className="navbar-catatan" to="/add">
              {localeContext === "id" ? "Catatan" : "Add Note"}
            </Link>
          </li>
          <li>
            <Link className="navbar-arsip" to="/archived">
              {localeContext === "id" ? "Arsipkan" : "Archived"}
            </Link>
          </li>
          <li>
            <Link className="navbar-chatbot" to="/chatbot">
              {localeContext === "id" ? "ChatBot" : "Chatbot"}
            </Link>
          </li>
        </div>
        <div className="nav-right">
          <li>
            <button onClick={toggleThemeContext}>
              {themeContext === "light" ? <FaMoon /> : <FaSun />}
            </button>
          </li>
          <li>
            <button onClick={toggleLocaleContext}>
              {localeContext === "id" ? "en" : "id"}
            </button>
          </li>
          <li className="filogOut">
            <button onClick={logout}>
              <FiLogOut />
            </button>
            ({name})
          </li>
        </div>
      </ul>
    </nav>
  );
}
Header.propTypes = {
  logout: PropTypes.func,
  name: PropTypes.string,
};
export default Header;
