import { NavLink } from "react-router-dom";
import classes from './MainNavigation.Module.css'

function MainNavigation(){
return( 
<header className="header" >
    <nav>
        <ul className="list">
            <li>
                <NavLink to='/' className={({isActive})=> (isActive? classes.active : undefined)} end>Home</NavLink>
            </li>
            <li>
                <NavLink to='/products' className={({isActive})=> (isActive? classes.active : undefined)}>Products</NavLink>
            </li>
        </ul>
    </nav>
</header>
);
}
export default MainNavigation;