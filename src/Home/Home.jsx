import React from 'react';
import interviewImg from '../assets/images/interview.svg';
import questionGif from '../assets/vids/help.gif';
import infoGif from '../assets/vids/info.gif';

const Home = () => {
    return(
        <section className="home">
            <div className="home__textbox">
                <h3 className="home__subtitle">easiest way to find your next job</h3>
                <h2 className="home__title">find your dream job with minimal hassle</h2>
                <div className="home__buttons">
                    <button className="home__buttons--btn home__buttons--btn--primary">
                        looking for a job
                        <img alt="question mark" src={questionGif} />
                    </button>
                    <button className="home__buttons--btn home__buttons--btn--secondary">
                        hire someone
                        <img alt="information" src={infoGif} />
                    </button>
                </div>
            </div>
            <div className="home__image">
                <img className="home__image--img" src={interviewImg} alt="interview" />
            </div>
        </section>
    )
}
export default Home;