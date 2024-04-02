import '../App.css'
import lady from '../images/howitworks.jpg'
function About(){
    return(
        <div class="details">
        <img src={lady}></img>
        <div class="text">
        <h3>Get what you need today and pay later</h3>
        <p>Our process is designed to make sure you get what you need—right when you need it. Once approved, you can take your new items home immediately and pay for them later. </p>
        <button class="how-button">How it Works</button>
        </div>
        </div>
    )
}

export default About