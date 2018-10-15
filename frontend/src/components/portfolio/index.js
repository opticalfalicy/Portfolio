import React, { Component } from 'react';

import { connect } from 'react-redux';

import { getProjects } from '../../actions';
import './portfolio.css';


class Portfolio extends Component{

    constructor(props){
        super(props);
        this.props.getProjects();
        this.state = {
            toggle: false,
        };

    }

    clickHandler = () => {
        this.setState({toggle: !this.state.toggle});
        console.log('click', this);
    }


    render(){

        let randBottomToggle;
        let portBottomToggle;
        let buttonLabel;


        if(this.state.toggle == false){
            randBottomToggle = (
                                 <ul className="card-stack"> Tech Stack: 
                                     <li>Bootstrap</li>
                                    <li>Javascript</li>
                                    <li>React / Redux</li> 
                                     <li>Node.js / MongoDB</li>
                                    <li>Git</li>
                                    <li>Mongoose</li> 
                                     <li>Axios</li>
                                    <li>Jquery</li>
                                    <li>Heroku</li>
                                    
                                </ul>
            

            );

            portBottomToggle = (
                <ul className="card-stack port-card-stack"> Tech Stack:
                <li>HTML / CSS</li>
                <li>Javascript</li>
                <li>React / Redux</li>
                <li>Node.js / MongoDB</li>
                <li>Git</li>
                <li>Mongoose</li>
                <li>Heroku</li>
            </ul>
            )

            
            buttonLabel = (<button onClick={this.clickHandler} className="card-button">About</button>);
        }

        else if(this.state.toggle == true){
            randBottomToggle = (
                <p className="card-desc">

                I worked on this app with a team of four other students for our Capstone Project. 
                It's an app geared towards teachers that allows them to input the students in their class and randomly select their students to
                participate.
                <br/>

                It features an "All Go" mode that makes sure every student is called before reshuffling the class and picking through it again;
                as well as a class participation tracker.

            </p>
            );

            portBottomToggle = (

                <p className="card-desc port-card-desc">

                This website is rebuilt from my original personal one. 
                I have reworked it into a React / Redux app that utilizes a MongoDB backend. 
                <br/>
                In between other projects I will be expanding upon this website and adding more features to 
                show off what I've been learning. Check back occasionally and you'll see something new.

            </p>

            )

            buttonLabel = (<button onClick={this.clickHandler} className="card-button">Stack</button>);
        }

    



        return(
            <div className="portfolio-page">     

                <h1 className="portfolio-title">Portfolio</h1>

                <div className="portfolio-display">

                </div>

            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        projects: state.projects
    };
};

export default connect(
    mapStateToProps,
        { getProjects })(Portfolio);
