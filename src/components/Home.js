import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from 'react-scroll';
import img1 from '../images/cute-astronaut-outer-space-with-alien-planets.png'
import '../styles/Home.css'
import { useInView } from 'react-intersection-observer';
import Typewriter from 'typewriter-effect';
import { Element } from 'react-scroll';
function Home(){
    const { ref, inView } = useInView({
        threshold: 0.1, // Adjust when the animation should trigger (0.1 = 10% visible)
        triggerOnce: true, // Trigger the animation only once
      });
    return(
        <Element name="Home">
             <section className='Home'>
                <div className='container '>
                    <div  ref={ref} className={`row content-section ${inView ? 'animate' : ''}`}>
                        <div className='col-lg-6 col-md-12'>
                            <div className='home_content'>
                                <p>
                                    Welcome All in my portfolio
                                </p>
                                <h2>
                                    Hi! I'm Momen Tarek Nagaty ,
                                    <Typewriter 
                                            options={{
                                            strings: [
                                                'FullStack Web Developer',
                                                'Frontend Developer',
                                                'Backend Developer',
                                                'Software Engineer',
                                            ],
                                            autoStart: true,
                                            loop: true, // Keep repeating
                                            deleteSpeed: 50, // Speed of deleting the text
                                            delay: 100, // Speed of typing
                                    }}/>
                                </h2>
                                <span className='hello-statment'>Hello Everyone. I have 8 years of Experience in Web development </span>
                                <Link className='Home_link'>

                                    <span>Let's Connect</span>
                                    <span className='icon'><i class="fas fa-long-arrow-alt-right"></i></span>
                                </Link>
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-12 '>
                            <div className='d-flex justify-content-center w-100 h-100'>
                                <div className='image_home'>
                                    <img src={img1}></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Element>
    )
};
export default Home