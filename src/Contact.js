function Conduct(){
    return(
        <div>
             <section id="contact-section">
                        <div class="contact-container">
                            <h2 class="contact-head">CONTACT</h2>
                            <p class="contact-para">Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                            <div class="contact-row">
                                <div class="contact-col">
                                    <div class="contact-card">
                                        <div class="location">
                                            <div class="loc-icon">
                                                <i class="fa fa-map-marker" aria-hidden="true"></i>
                                            </div>
                                            <div class="loc-details">
                                                <h5 class="loc-head">Location:</h5>
                                                <p class="loc-para">A108 Adam Street, New York, NY 535022</p>

                                            </div>

                                        </div>

                                        <div class="email">
                                            <div class="mail-icon">
                                                <i class="fa fa-envelope-o" aria-hidden="true"></i>
                                            </div>
                                            <div class="mail-details">
                                                <h5 class="mail-head">Email:</h5>
                                                <p class="mail-para">info@example.com</p>

                                            </div>

                                        </div>

                                        
                                        <div class="call">
                                            <div class="mail-icon">
                                                <i class="fa fa-phone" aria-hidden="true"></i>
                                            </div>
                                            <div class="call-details">
                                                <h5 class="call-head">Call:</h5>
                                                <p class="call-para">+1 5589 55488 55s</p>

                                            </div>

                                        </div>

                                        <div class="maps">
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31528.69863560108!2d77.29387868733338!3d8.964100521941052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0429c15ac547f7%3A0x9a707276cd8ae327!2sTenkasi%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1688877994368!5m2!1sen!2sin" style={{width:"500px", height:"300px" ,border:0 , allowfullscreen:"", loading:"lazy" ,referrerpolicy:"no-referrer-when-downgrade"}}></iframe>

                                        </div>

                                    </div>

                                </div>

                                <div class="contact-col2">
                                    <form>
                                        <div class=" form-row">
                                            <div class="form-col">
                                                <div class="input-box">
                                                    <span>Your Name</span>
                                                    <label for="name"></label>
                                                    <input id="name" type="text" />
                                                
                                                </div>
                                                
                                                <div class="input-email">
                                                    <span>Your Email</span>
                                                    <label for="email"></label>
                                                    <input id="email"type="text" />
                                                </div>
                                            </div>
                                            
                                                <div class="sub">
                                                    <span>Subject</span>
                                                <label for="name"></label>
                                                <input  id="name" type="text" />
                                                </div>
                                                
                                                <div class="meg">
                                                    <span>Message</span>
                                                <label for="address"></label>
                                                <textarea id="address" rows="10" cols="73"></textarea>
                                                </div>
                                                <div class="form-bt">
                                                <button class="form-btn">Send Message</button>
                                                </div>
                                            
                                        </div>
                                        
                                        
                                    </form>	

                                </div>

                            </div>

                        </div>

                       </section>

        </div>
    )
}
export default Conduct