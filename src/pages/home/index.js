import React from 'react';
import './home.css';
import beard from '../../assets/images/icons8-beard-60.png';
import razor from '../../assets/images/icons8-razor-50.png';
import scissor from '../../assets/images/icons8-hair-shears-64.png';
import curly from '../../assets/images/icons8-curly-hair-64.png';

function Home() {
    return (
        <div className='services-format'>
            <section className='service'>
                <img src={beard} alt='beard' className='service-image'/>
                <div className='service-text'>
                <h3 className='service-header'>Beard</h3>
                    <p className='service-paragraph'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
            </section>
            <section className='service'>
                <img src={razor} alt='razor' className='service-image'/>
                <div className='service-text'>
                <h3 className='service-header'>straight razor shave</h3>
                    <p className='service-paragraph'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
            </section>
            <section className='service'>
                <img src={scissor} alt='scissors' className='service-image'/>
                <div className='service-text'>
                <h3 className='service-header'>Scissor cut</h3>
                    <p className='service-paragraph'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
            </section>
            <section className='service'>
                <img src={curly} alt='curley' className='service-image'/>
                <div className='service-text'>
                <h3 className='service-header'>Curly hair</h3>
                    <p className='service-paragraph'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
            </section>
        </div>
    );
}

export default Home;