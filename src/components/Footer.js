import '../styles/Header.css'
import '../styles/Footer.css'
function Footer(){
    return (
        <footer className='footer'>
            <div className='Email_Section d-flex justify-content-center align-items-center'>
                <div className='px-5'>
                    <div className='row'>
                        <div className='col-lg-5 col-12'>
                            <div className='Email_Text d-flex justify-content-center align-items-center'>
                                <p>See My Projects At Once & Leave Here Your E-Mail Address</p>
                            </div>
                        </div>
                        <div className='col-lg-7 col-12'>
                            <div className='d-flex justify-content-start align-items-center h-100'>
                                <div className='Email_input w-100'>
                                    <input className='form-control' type="email" placeholder="Email Address"></input>
                                    <button className='btn text-center'>Sumbit</button>
                                </div>
                            </div>
                        </div>  
                    </div>
                </div>
            </div>
            <div className='Footer_content'>
                <div className="container">
                    <div className="row">
                        <div className="d-flex justify-content-between align-content-end align-items-center pb-4 ">
                            <div className="Footer_logo">
                                <p>Logo</p>
                            </div>
                            <div className="d-flex flex-column gap-2 footer_dsc">
                                <div className="links-social-midea">
                                    <ul>
                                        <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                                        <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                        <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                    </ul>

                                </div>
                                <p className=''> © 2021 Edugo.com All Right Reserved </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer