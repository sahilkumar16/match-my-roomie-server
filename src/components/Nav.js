import { Link } from 'react-router-dom';
import '../assets/styles/Nav.css';
import logo from '../assets/images/Logo.png';

function Navbar() {
  return (
    <div className='header'>
      <div className='logo'>
        <Link to='/'>
          <img src={logo} alt='logo' />
          {/* <h2>MatchMyRoomie</h2> */}
        </Link>
        <h2 className='logo-h2'>MatchMyRoomie</h2>   
      </div>
      <div className='nav'>
        <Link to='/'>Home</Link>
        <Link to='/'>About</Link>
        <Link to='/'>Pricing</Link>
        <Link to='/'>Contact Us</Link>
      </div>
      <div className='sign-in'>
        <button>Sign In</button>
      </div>
    </div>
  );
}
export default Navbar;
