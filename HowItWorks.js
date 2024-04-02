import '../App.css'
import step1 from '../images/step1.png'
import step2 from '../images/step2.png'
import step3 from '../images/step3.png'

function HowItWorks(){
    return(
        <div class="how-container">
        <h3>How It Works</h3>
        <div class="steps">
            <img src={step1}></img>
            <img src={step2}></img>
            <img src={step3}></img>

        </div>
        </div>
        
    )
}

export default HowItWorks