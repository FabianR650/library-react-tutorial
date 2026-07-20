import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavLogo from "../assets/NavLogo.png";
import { Link } from "react-router-dom";

const Nav = ({ numberOfItems }) => {
  function openMenu() {
    document.body.classList += " menu--open";
  }

  function closeMenu() {
    document.body.classList.remove("menu--open");
  }

  return (
    <nav>
      <div className="nav__container">
        <Link to="/">
          <img className="logo" src={NavLogo} alt="" />
           <div class="nav__logo--title">FAST LANE</div>
        </Link>
        <ul className="nav__links">
          <li className="nav__list">
            <Link to="/" className="nav__link nav__link--hover">
              Home
            </Link>
          </li>
          <li className="nav__list">
            <Link to="/movies" className="nav__link nav__link--hover">
              Movies
            </Link>
          </li>
          <li className="nav__list">
            <Link to="/movies" className="nav__link nav__link--primary">
              Contact
            </Link>
          </li>
          <button className="btn__menu" onClick={openMenu}>
            <FontAwesomeIcon icon="bars" />
          </button>
          <li className="nav__icon">
            <Link to="/cart" className="nav__link">
              <FontAwesomeIcon icon="shopping-cart" />
            </Link>
            {numberOfItems > 0 && (
              <span className="cart__length">{numberOfItems}</span>
            )}
          </li>
        </ul>

        <div className="menu__backdrop">
          <button className="btn__menu btn__menu--close" onClick={closeMenu}>
            <FontAwesomeIcon icon="times" />
          </button>
          <ul className="menu__links">
            <li className="menu__list">
              <Link to="/" className="menu__link" onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li className="menu__list">
              <Link to="/books" className="menu__link" onClick={closeMenu}>
                Movies
              </Link>
            </li>
            <li className="menu__list">
              <Link to="/books" className="menu__link" onClick={closeMenu}>
                Contact
              </Link>
            </li>
            <li className="menu__list">
              <Link to="/cart" className="menu__link" onClick={closeMenu}>
                Cart
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div>
      <h3 class="welcome-title">Welcome to Fast Lane Cars</h3>
    <div class="navbar">
    <div>
      <input type="text" id="inputField" placeholder="search by title, year or rating" />
      <button id="submitButton">Submit</button>
    </div>
  </div>
  </div>
</nav>
  );
};

export default Nav;
