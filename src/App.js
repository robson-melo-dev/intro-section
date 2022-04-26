import logo from './logo.svg';
import './App.css';
import hero from './images/image-hero-mobile.png';

function dropdownMenu(){
  var id = document.getElementById("dropdownClick");
  if (id.className === "topnav") {
      id.className += " responsive";
      /* change topnav to topnav responsive */
  } else{id.className="topnav";}
}

function App() {
  return (
    <div className="App">
      <div className="grayBackground">
      </div>
      <nav className="navbar"> {/* Top Navbar */}
      <p className="snap-logo">snap</p>
        <ul className="topnav" id="dropdownClick">          
          <li><a href="#">Features</a></li>
          <li><a href="#">Company</a></li>
          <li><a href="#">Carreers</a></li>
          <li><a href="#">About</a></li>          
          <li className="register"><a href="#">Register</a></li>
          <li className="topnav-right"><a href="#">Login</a></li>          
          <li className="dropdownIcon"><a href="javascript:void(0);" onClick={dropdownMenu}>&#9776;</a></li>
          
        </ul>
      </nav>
      

      <main>
        <img className="hero-img" src={hero} alt="" />
        <section className="main-section-copy">
          <h1>Make remote work</h1>
          <p>Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.
          </p>
          <button className="learn-more-btn">Learn More</button>
        </section>
        <footer>
          Some images from footer.
        </footer>
      </main>


      
    </div>
  );
}

export default App;
