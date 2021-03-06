import "./topbar.scss";
import { Person,Mail} from "@material-ui/icons";
import GitHubIcon from '@material-ui/icons/GitHub';
export default function Topbar({menuOpen,setMenuOpen}) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className='logo'>Tanvir.</a>
          <div className="itemContainer">
            <Person className="icon"/>
            <span>01795148654</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>tanvirchy4242@gmail.com</span>
          </div>
          <div className="itemContainer">
            <GitHubIcon className="icon" />
            <span>github.com/TanvirChy</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" 
            onClick={()=>setMenuOpen(!menuOpen)}
          >
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>


          </div>
        </div>
      </div>
    </div>
  );
}
