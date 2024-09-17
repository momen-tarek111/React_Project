import img2 from '../images/5615681_2917233-1024x662.jpg'
import img3 from '../images/5361469_2815130-1024x639.jpg'
import img4 from '../images/cb2eb9152243301.Y3JvcCwxODkwLDE0NzksMTY4LDA.jpg'
// import { Element } from 'react-scroll'
import '../styles/Projects.css'
function Projects(){
    return(
        // <Element name="Projects">
        <div className='Projects mt-5'>
            <div className='container'>
                <div className="row">
                    <div className="col-xl-4 col-md-6 col-12">
                        <div className="singleProject mb-5">
                            <img src={img2}></img>
                            <div className='overlay'>
                                <h3>Project 1</h3>
                                <p>Design & Development</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6 col-12">
                        <div className="singleProject mb-5">
                            <img src={img3}></img>
                            <div className='overlay'>
                                <h3>Project 2</h3>
                                <p>Design & Development</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6 col-12">
                        <div className="singleProject mb-5">
                            <img src={img4}></img>
                            <div className='overlay'>
                                <h3>Project 3</h3>
                                <p>Design & Development</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6 col-12">
                        <div className="singleProject mb-5">
                            <img src={img2}></img>
                            <div className='overlay'>
                                <h3>Project 4</h3>
                                <p>Design & Development</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6 col-12">
                        <div className="singleProject mb-5">
                            <img src={img3}></img>
                            <div className='overlay'>
                                <h3>Project 5</h3>
                                <p>Design & Development</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6 col-12">
                        <div className="singleProject mb-5">
                            <img src={img4}></img>
                            <div className='overlay'>
                                <h3>Project 6</h3>
                                <p>Design & Development</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        // </Element>
    );
};
export default Projects