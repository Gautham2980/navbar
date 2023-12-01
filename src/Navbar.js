import {React}from 'react'
import {Link} from 'react-router-dom'

function  Navbar(){
    return(
        <div>
            <header>
                <div className='logo'>
                    Company

                </div>
                <div className='display'>
                    <Link className="menu" to={"/"}>Home</Link>
                    <Link className="menu" to={"/about"}>About</Link>
                    <Link className="menu" to={"/product"}>Product</Link>
                    <Link className="menu" to={"/service"}>Services</Link>
                    <Link className="menu" to={"/contact"}>Contact</Link>
                    
                  


                </div>
               
            </header>
            

        </div>
    )
}

export default Navbar