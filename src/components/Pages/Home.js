import React, { Component } from 'react';
import Header from '../Common/Header';
import image from '../assets/img/header-bg.jpg';

//Re-usable components
import Services from '../Common/Services'
import Portfolio from '../Common/Portfolio'

class Home extends Component {

    render() {
        return (
            <div>
                <Header 
                    title = "Welcome To Our School"
                    subtitle = "IT's NICE TO MEET YOU"
                    buttonText = "Tell me more"
                    link="/services"
                    showButton = {true}
                    image={image}
                />
                <Services />
                <Portfolio />
            </div>
        )
    }
}

export default Home;


