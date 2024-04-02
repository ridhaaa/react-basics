import '../App.css'
import cover from '../images/cover.jpg'
function AppBody(){
  
    return(
        <>
            <img class="cover"src={cover}></img>
            <p class="caption">Simple financing for Life's extraordinary moments</p>
            <button class="apply">Apply Today</button>
        </>
    )
}
export default AppBody