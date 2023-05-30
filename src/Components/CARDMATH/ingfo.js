import React from "react";
import * as Components from './Components';
import "./Components.css"
function App(props) {
    const { price, pricePremium } = props;
    const [signIn, toggle] = React.useState(true);
    const handlePhoneClick = () => {
        window.location.href = 'https://wa.me/628117454648';
      };
    return (
        <div className="Container">
            <Components.SignUpContainer signinIn={signIn}>
                <div className="Form">
                    <h1 className="Title">PREMIUM</h1>
                    <h1>Instant Booking</h1>
                    <h1>1 - 2</h1>
                    <h2>Hours</h2>
                    <h3>Rp{props.pricePremium}</h3>
                    <p className="Price"> ( Basic Price ) + Rp70k</p>
                    <a href="https://wa.me/628117454648" className="Button" onClick={handlePhoneClick}>Book Now!</a>
                </div>
            </Components.SignUpContainer>

            <Components.SignInContainer signinIn={signIn}>
                <div className="Form">
                    <h1 className="Title">BASIC</h1>
                    <h1>Booking</h1>
                    <h1>1 - 3</h1>
                    <h2>Days Ahead</h2>
                    <h3>Rp{props.price}</h3>
                    <a href="https://wa.me/628117454648"className="Button" onClick={handlePhoneClick}>Book Now!</a>
                </div>
            </Components.SignInContainer>

            <Components.OverlayContainer className="Overlay" signinIn={signIn}>
                <Components.Overlay signinIn={signIn}>

                    <Components.LeftOverlayPanel signinIn={signIn}>
                        <a className="ButtonInfo" onClick={() => toggle(true)}>
                            <h1 className="Title">BASIC</h1>
                            <p className="Paragraph">Basic Type For Booking Experience</p>
                        </a>
                    </Components.LeftOverlayPanel>

                    <Components.RightOverlayPanel signinIn={signIn}>
                        <a className="ButtonInfo" onClick={() => toggle(false)}>
                            <h1 className="Title">PREMIUM</h1>
                            <p className="Paragraph">Premium Type For Booking Experience</p>
                        </a>
                    </Components.RightOverlayPanel>

                </Components.Overlay>
            </Components.OverlayContainer>

        </div>
    )
}

export default App;