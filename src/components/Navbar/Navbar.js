import './Navbar.css';
import logo from '../../assets/imgs/logo (3).png'


function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__wrapper">
        <img src={logo} alt='logo' />
        <ul className="navbar__items">
          <li className="navbar__item">
            <a href="#Home">Home</a>
          </li>
          <li className="navbar__item">
            <a href="#Tours">Tours</a>
          </li>
          <li className="navbar__item">
            <a href="#Gallary">Gallary</a>
          </li>
          <li className="navbar__item">
            <a href="#Pages">Pages</a>
          </li>
          <li className="navbar__item">
            <a href="#Blog">Blog</a>
          </li>
          <li className="navbar__item">
            <a href="#Contact">Contact</a>
          </li>
        </ul>
        <div className="btns">
          <button className="btn login paragraph">Login</button>
          <button className="btn sign-up paragraph">Sign Up</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
