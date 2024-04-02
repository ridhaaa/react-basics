import '../App.css'
import logo from '../images/logo.png'
function AppHeader(){
    return(
        <>
        <header className = "appHeader">
        <img class="logo" src={logo}></img>
        </header>

        </>
    )
}

export default AppHeader