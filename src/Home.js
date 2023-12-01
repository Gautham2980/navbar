import React, { useEffect } from 'react'
import {useNavigate} from 'react-router-dom'

function Home(){
    const navigate=useNavigate()

    useEffect(()=>{
        if(localStorage.getItem("auth",true)) {
            navigate('./about')
        }
            
        

    },[])





    const formSubmit=(e)=>{
        e.preventDefault();
      if(e.target.elements.name.value==="Gautham" ||e.target.elements.psw.value==="123456"){
            navigate('./about');
           localStorage.setItem("auth",true)
      }
      else{
        console.log("incorrect");
      }
   
    }


    return(
        <div>
               <section id="banner-section">
            <div class="banner-container">
                <div class="banner-row">
                    <div class="banner-col">
                        <h1 class="banner-head">Better Solutions For Your Business</h1>
                        <p class="banner-para">We are team of talented designers making websites with Bootstrap</p>
                        <div class="flex">
                        <div class="button-div">
                        <button class="banner-button">Get Started</button>
                        </div>
                        <div class="play">
                            <div>
                                <i class="fa fa-play-circle" aria-hidden="true"></i>
                        </div>
                        <p class="watch">Watch Video</p>
                        </div>
                    </div>
                    </div>

                    <div class="banner-col">
                        <div class="banner-image">
                            <img src="images/hero-img.png" alt="" />

                        </div>

                    </div>

                </div>

            </div>

        </section>


        <div class="image-container">
            <div class="image-row">
                <div class="image-col">
                    <img src="images/client-1.png" alt="" />
                </div>
                <div class="image-col">
                    <img src="images/client-2.png" alt="" />
                </div>

                <div class="image-col">
                    <img src="images/client-3.png" alt="" />
                </div>

                <div class="image-col">
                    <img src="images/client-4.png" alt="" />
                </div>

                <div class="image-col">
                    <img src="images/client-5.png" alt="" />
                </div>

                <div class="image-col">
                    <img src="images/client-6.png" alt="" />
                </div>

            </div>

        </div>

        <form onSubmit={formSubmit}>
            <input type="text" name="name" placeholder="Enter UserName"/>
            <input type="password" name="psw" placeholder="Enter Password"/>
            <button>Login</button>
        </form>
        </div>
    )
}
export default Home