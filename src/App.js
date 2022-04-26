import logo from './logo.svg';
import './App.css';
import hero from './images/image-hero-mobile.png';

 function dropdownMenu(){
  var id = document.getElementById("dropdownClick");
  if (id.className === "topnav") {
      id.className += " responsive";
      /*change topnav to topnav responsive ;*/
  } else{id.className="topnav";}
}

function dropFeatures(){
  var id = document.getElementById("features");
  if (id.className === "features") {
      id.className += "Drop";
      /*change topnav to topnav responsive ;*/
  } else{id.className="features";}
}

function dropCompanies(){
  var id = document.getElementById("companies");
  if (id.className === "companies") {
      id.className += "Drop";
      /*change topnav to topnav responsive ;*/
  } else{id.className="companies";}
}





function App() {
  return (
    <div className="App">
      <div className="grayBackground">
      </div>
      <nav className="navbar"> {/* Top Navbar */}
      <p className="snap-logo">snap</p>
        <ul className="topnav" id="dropdownClick">          
          <li><a href="javascript:void(0);" onClick={dropFeatures}>Features</a>
          <ul id="features" className="features">
            <div className="featuresContainer">
            <li><a href="#">Todo List</a></li>
            <li><a href="#">Calendar</a></li>
            <li><a href="#">Reminders</a></li>
            <li><a href="#">Planning</a></li>
            </div>
          </ul>
          </li>
          <li><a href="javascript:void(0);" onClick={dropCompanies}>Company</a>
          <ul id="companies" className="companies">
            <li><a href="#">History</a></li>
            <li><a href="#">Our Team</a></li>
            <li><a href="#">Blog</a></li>
          </ul>          
          </li>
          <li><a href="#">Carreers</a></li>
          <li><a href="#">About</a></li>       
          <li className="topnav-right"><a href="#">Login</a></li>       
          <li className="register"><a href="#">Register</a></li>      
          <li className="dropdownIcon"><a href="javascript:void(0);" onClick={dropdownMenu}>&#9776;</a></li>
          
        </ul>
      </nav>
      

      <main>
        <section className="main-section-copy">
        <img className="hero-img" src={hero} alt="" />
          <article className="copy">
            <h1>Make remote work</h1>
            <p>Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.
            </p>
            <button className="learn-more-btn">Learn More</button> 
            Some images from footer.
           </article>
        </section>
        
      </main>


      
    </div>
  );
}

export default App;
