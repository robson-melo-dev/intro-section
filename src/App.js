import logo from './logo.svg';
import './App.css';
import hero from './images/image-hero-mobile.png';
import databiz from './images/client-databiz.svg';
import audiophile from './images/client-audiophile.svg';
import meet from './images/client-meet.svg';
import maker from './images/client-maker.svg';
import dwnarrow from './images/icon-arrow-down.svg';
import calendar from './images/icon-calendar.svg';
import planning from './images/icon-planning.svg';
import reminders from './images/icon-reminders.svg';
import todo from './images/icon-todo.svg';


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
      <nav className="navbar"> {/* Top Navbar */}
      <p className="snap-logo">snap</p>
        <ul className="topnav" id="dropdownClick">          
          <li><a href="javascript:void(0);" onClick={dropFeatures}>Features	<img src={dwnarrow} alt=""/></a>
          <ul id="features" className="features">
            <li><a href="#"><img src={todo} alt=""/> Todo List </a></li>
            <li><a href="#"><img src={calendar} alt=""/> Calendar </a></li>
            <li><a href="#"><img src={reminders} alt=""/> Reminders </a></li>
            <li><a href="#"><img src={planning} alt=""/> Planning </a></li>
          </ul>
          </li>
          <li><a href="javascript:void(0);" onClick={dropCompanies}>Company	<img src={dwnarrow} alt=""/></a>
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
            </article>
            
            <img className="client" src={databiz} alt="" />
            <img className="client" src={audiophile} alt="" />
            <img className="client" src={meet} alt="" />
            <img className="client" src={maker} alt="" />
            
        </section>
        
      </main>


      
    </div>
  );
}

export default App;
