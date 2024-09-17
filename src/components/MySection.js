import "../styles/MySection.css"
import { NavLink, BrowserRouter ,Route,Routes,Redirect } from "react-router-dom"
import {React} from "react"
import { Element } from "react-scroll";
import Contact from "./Contact"
import Projects from "./Projects"
import Message from "./Message"
function MySection(){
    return(
        <Element name="Products">
            <BrowserRouter>
                <div className="my_section">
                    <div className="TabsSection mb-5">
                        <div className="container">
                            <div className="row">
                                    <div className="section-title-box pt-5">
                                        <h2>My Project</h2>
                                        <p>My Name is Momen , I Live in Cairo , this is my projects</p>
                                    </div>
                            </div>
                            <div className="tabs d-flex justify-content-center align-items-center">
                                <NavLink className="tab-link link_1" to="/React_Project/" end  
                                  style={({ isActive }) => ({background: isActive ? 'linear-gradient(to right, #fc466b, #3f5efb)' : '#1c1c1c',})}>
                                    1st Section</NavLink>
                                <NavLink className="tab-link link_2" to="/React_Project/ContentForm"
                                 style={({ isActive }) => ({background: isActive ? 'linear-gradient(to right, #fc466b, #3f5efb)' : '#1c1c1c',})}>
                                    2nd Section</NavLink>
                                <NavLink className="tab-link link_3" to="/React_Project/Message"
                                 style={({ isActive }) => ({background: isActive ? 'linear-gradient(to right, #fc466b, #3f5efb)' : '#1c1c1c',})}>
                                    3rd Section</NavLink>
                               
                            </div>
                        </div>
                    </div>
                    <Routes>
                        <Route  path="/React_Project/" element={<Projects />} />
                        <Route path="/React_Project/Message" element={<Message />} />
                    </Routes>
                    <Contact/>
                </div>
            </BrowserRouter>
        </Element>
    )
}
export default MySection