import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function About(){
    const navigate=useNavigate()
    const[logout,setLogout]=useState(false)
    useEffect(()=>{
        if(!localStorage.getItem("auth")) navigate('/')
    })

    const handleLogout=(e)=>{
        e.preventDefault();
        localStorage.removeItem("auth")
        setLogout(true)


    }



    return(
        <div>
            <section id="about-section">
            <div class="about-container">
                <div class="about">
                    <h2 class="about-head">ABOUT US</h2>
                </div>
                <div class="about-row">
                    <div class="about-col">
                        <p class="about-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                    
                        <ul>
                        <li><i class="fa fa-check" aria-hidden="true"></i><span>Ullamco laboris nisi ut aliquip ex ea commodo consequat</span></li>
                        <li><i class="fa fa-check" aria-hidden="true"></i><span>Duis aute irure dolor in reprehenderit in voluptate velit</span></li>
                        <li><i class="fa fa-check" aria-hidden="true"></i><span>Ullamco laboris nisi ut aliquip ex ea commodo consequat</span></li>
                        </ul>
                    </div>

                    <div class="about-col">
                        <div class="about-pad">
                        <p class="about-para1">Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                         </div>
                         <div class="about-button">
                            <button>Learn More</button>

                         </div>
                    </div>
                </div>

            </div>

        </section>

        <button onClick={handleLogout}>LogOut</button>

        </div>
    )
}
export default About