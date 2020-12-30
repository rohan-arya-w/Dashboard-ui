import './nav.css'
import "semantic-ui-css/semantic.min.css";

const Nav = () => {
    return(
        <nav className="navbar">
            <div className="up-elements">
            <div>
            <i class="big bell outline icon"></i>
            </div>
            <div>
            <i class="big download icon"></i>
            </div>

            </div>

            <div className="down-elements">
                <div><i class="big calendar check outline icon "></i></div>
                <div><i class="big user plus icon"></i></div>
                <div><i class="big search icon"></i></div>
                <div><i class="big question icon"></i></div>
                <div><i class="big user circle icon"></i></div>
                
            </div>
           
            
        </nav>
    )
}

export default Nav;