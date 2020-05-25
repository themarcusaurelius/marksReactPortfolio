/* eslint-disable */
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Tooltip from "@material-ui/core/Tooltip";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


// @material-ui/icons
import fullStack from "@material-ui/icons/LaptopMac";
import Add from "@material-ui/icons/AssignmentInd";
import Code from "@material-ui/icons/Code"
import BarChartIcon from '@material-ui/icons/BarChart';
import TimelineIcon from '@material-ui/icons/Timeline';
import ArtTrackIcon from '@material-ui/icons/ArtTrack';
import WebAssetIcon from '@material-ui/icons/WebAsset';


// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import NavPills from "components/NavPills/NavPills.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import Badge from "components/Badge/Badge.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import Clearfix from "components/Clearfix/Clearfix.jsx";
import Button from "components/CustomButtons/Button.jsx";
import mark from "assets/img/faces/mark.jpg";
import clicky from "assets/img/CCS.png";
import offTheChain from "assets/img/OTC.png";
import Dev from "assets/img/Dev.png";
import friendFinder from "assets/img/FF.jpg";
import quiz from "assets/img/Quiz.png";
import Bamazon from "assets/img/Bamazon.gif";
import Liri from "assets/img/liri.gif";
import Bebop from "assets/img/Bebop.png";
import GreenToad from "assets/img/GT.png";
import Emaily from "assets/img/emaily.png";
import Streamy from "assets/img/Streameo.png";
import video from "assets/img/VID.png";
import context from "assets/img/context.png";
import api from "assets/img/api.gif";
import reading from "assets/img/reading.png";
import apd from "assets/img/apd.png";
import cv from 'assets/img/cv.png';
import media from 'assets/img/media.png';
import sample from 'assets/img/sample.png';
import windows from 'assets/img/windows.gif';
import autobeats from 'assets/img/autobeats.gif';
import "./Profile.css";

import profilePageStyle from "assets/jss/material-kit-pro-react/views/profilePageStyle.jsx";

class ProfilePage extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }
  render() {
    const { classes, ...rest } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    
    return (
      <div>
        <Header
          color="transparent"
          brand="Mark's Portfolio"
          links={<HeaderLinks dropdownHoverColor="info" />}
          fixed
          changeColorOnScroll={{
            height: 200,
            color: "info"
          }}
          {...rest}
        />
        <Parallax
          image={require("assets/img/city.jpg")}
          filter="dark"
          className={classes.parallax}
        />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <div>
                    <img src={mark} alt="..." className={imageClasses} />
                  </div>
                  <div className={classes.name}>
                    <h3 className={classes.title}>Mark Mayfield</h3>
                    <h6>Full-Stack Software Developer</h6>
                    <Button
                      href={"https://github.com/themarcusaurelius"}
                      justIcon
                      simple
                      color="github"
                      className={classes.margin5}
                      title="GitHub"
                    >
                      <i className={classes.socials + " fab fa-github-alt"} />                    
                    </Button>
                    <Button
                      href={"https://www.linkedin.com/in/mark-mayfield-88051b147/"}
                      justIcon
                      simple
                      color="linkedin"
                      className={classes.margin5}
                      title="Linkedin"
                    >
                      <i className={classes.socials + " fab fa-linkedin-in"} />
                    </Button>
                    <Button
                      href={"https://vizion.ai/forum/"}
                      justIcon
                      simple
                      color="google"
                      className={classes.margin5}
                      title="Forum"
                    >
                      <i className={classes.socials + " fas fa-clipboard-list"} />
                    </Button>
                  </div>
                </div>
                <div className={classes.follow}>
                  <Tooltip
                    id="tooltip-top"
                    title="My Resume"
                    placement="top"
                    classes={{ tooltip: classes.tooltip }}
                  >
                    <Button
                      href={"https://docs.google.com/document/d/1flyNLcg-imtlU25sKY7Sk00caMYNFJDKsjiRX6MvK3I/edit?usp=sharing"}
                      justIcon
                      round
                      color="primary"
                      className={classes.followButton}
                    >
                      <Add className={classes.followIcon} />
                    </Button>
                  </Tooltip>
                </div>
              </GridItem>
            </GridContainer>
            <div
              className={classNames(classes.description, classes.textCenter)}
            >
              <p>
                Full Stack Software Developer with the ability to design progressive web applications 
                with responsive code from development to deployment. Adept at working in a 
                diverse team environment to deliver customized software solutions, and effective at 
                combining creativity with problem-solving skills to develop public-friendly scalable applications 
                with a one-of-a-kind user experience.
              </p>
            </div>
            <div className={classes.profileTabs}>
              <NavPills
                alignCenter
                color="primary"
                tabs={[
                  {
                    tabButton: "MERN",
                    tabIcon: fullStack,
                    tabContent: (
                      <GridContainer>
                        <GridItem
                          xs={12}
                          sm={12}
                          md={7}
                          className={classes.gridItem}
                        >
                          <h4 className={classes.title}>Recent Work</h4>
                          <GridContainer className={classes.collections}>
                            <GridItem xs={12} sm={12} md={6}>
                              <Card
                                background
                                style={{
                                  backgroundImage:
                                    "url(" + GreenToad + ")"
                                }}
                              >
                                <a href="#mark" />
                                <CardBody
                                  background
                                  className={classes.cardBody}
                                >
                                  <Badge
                                    color="warning"
                                    className={classes.badge}
                                  >
                                    January 2019
                                  </Badge>
                                  <a href="https://greentoad.herokuapp.com/">
                                    <h2 className={classes.cardTitleWhite}>
                                      GreenToad
                                    </h2>
                                  </a>
                                  <div>
                                    <Button
                                      href={"https://github.com/projectGreenbelt/GreenToad"}
                                      justIcon
                                      color="success"
                                    >
                                      <i className={classes.socials + " fab fa-github-alt"} />
                                    </Button>
                                  </div>
                                </CardBody>
                              </Card>
                              <ExpansionPanel elevation={20}>
                                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                  <p className={classes.description}>
                                    Full Stack guide 
                                    for all access points on the Austin Greenbelt. 
                                  </p>
                                </ExpansionPanelSummary>
                                <h5 className={classes.title} id="title">Tech-Stack:</h5>
                                <ExpansionPanelDetails id="details">
                                  <Badge color="danger">React.js</Badge>
                                  <Badge color="warning">Material UI</Badge>
                                  <Badge color="rose">CSS</Badge>
                                  <Badge color="primary">JavaScript</Badge>
                                  <Badge color="warning">React Router 4</Badge>
                                  <Badge color="info">0auth</Badge>
                                  <Badge color="success">JSS</Badge>
                                  <Badge color="danger">D3</Badge>
                                  <Badge color="warning">ES6</Badge>
                                  <Badge color="rose">React-Google-Maps</Badge>
                                  <Badge color="primary">React-Liquid-Gauge</Badge>
                                  <Badge color="info">React-Forecast</Badge>
                                  <Badge color="success">React-Moment</Badge>
                                  <Badge color="danger">Axios</Badge>
                                  <Badge color="info">MongoDB</Badge>
                                  <Badge color="warning">Mongo Labs</Badge>
                                  <Badge color="rose">Mongoose Schema</Badge>
                                  <Badge color="primary">Node.js</Badge>
                                  <Badge color="info">Express.js</Badge>
                                  <Badge color="success">Socket.io</Badge>
                                  <Badge color="danger">Google Maps API</Badge>
                                  <Badge color="info">USG Water Services API</Badge>
                                  <Badge color="warning">Dark Sky API</Badge>
                                </ExpansionPanelDetails>
                              </ExpansionPanel>
                              <br /><br/><br /><br />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={6}>
                              <Card
                                background
                                style={{
                                  backgroundImage: "url(" + offTheChain + ")"
                                }}
                              >
                                <a href="https://offthechain-app.herokuapp.com/" />
                                <CardBody
                                  background
                                  className={classes.cardBody}
                                >
                                  <Badge color="info" className={classes.badge}>
                                    December 2018
                                  </Badge>
                                  <a href="https://offthechain-app.herokuapp.com/">
                                    <h2 className={classes.cardTitleWhite}>
                                      Pet Finder
                                    </h2>
                                  </a>
                                  <div>
                                    <Button
                                      href={"https://github.com/Project2-PetFinder/OffTheChain"}
                                      justIcon
                                      color="primary"
                                    >
                                      <i className={classes.socials + " fab fa-github-alt"} />
                                    </Button>
                                  </div>
                                </CardBody>
                              </Card>
                              <ExpansionPanel elevation={20}>
                                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                  <p className={classes.description}>
                                    Full Stack Application helping people reunite with their lost pets. 
                                  </p>
                                </ExpansionPanelSummary>
                                <h5 className={classes.title} id="title">Tech-Stack:</h5>
                                <ExpansionPanelDetails id="details">
                                  <Badge color="danger">JavaScript</Badge>
                                  <Badge color="success">jQuery</Badge>
                                  <Badge color="warning">HTML5</Badge>
                                  <Badge color="rose">CSS</Badge>
                                  <Badge color="primary">Bootstrap 4 Material Kit</Badge>
                                  <Badge color="info">Leaflet.js</Badge>
                                  <Badge color="success">Tabulator.js</Badge>
                                  <Badge color="danger">MySQL</Badge>
                                  <Badge color="warning">Sequelize</Badge>
                                  <Badge color="rose">Node.js</Badge>
                                  <Badge color="primary">Express.js</Badge>
                                  <Badge color="info">Heroku</Badge>
                                  <Badge color="success">Gulp</Badge>
                                  <Badge color="danger">MySQL2</Badge>
                                  <Badge color="warning">express-fileupload</Badge>
                                  <Badge color="rose">Sass</Badge>
                                </ExpansionPanelDetails>
                              </ExpansionPanel>
                              <br /><br/><br /><br />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={6}>
                              <Card
                                background
                                style={{
                                  backgroundImage:
                                    "url(" + Dev + ")"
                                }}
                              >
                                <a href="#mark" />
                                <CardBody
                                  background
                                  className={classes.cardBody}
                                >
                                  <Badge
                                    color="rose"
                                    className={classes.badge}
                                  >
                                    May 2019
                                  </Badge>
                                  <a href="https://devconnector55.herokuapp.com/">
                                    <h2 className={classes.cardTitleWhite}>
                                      DevConnector
                                    </h2>
                                  </a>
                                  <div>
                                    <Button
                                      href={"https://github.com/themarcusaurelius/devConnector"}
                                      justIcon
                                      color="warning"
                                    >
                                      <i className={classes.socials + " fab fa-github-alt"} />
                                    </Button>
                                  </div>
                                </CardBody>
                              </Card>
                              <ExpansionPanel elevation={20}>
                                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                  <p className={classes.description}>
                                    Full Stack social network built to 
                                    connect programmers.
                                  </p>
                                </ExpansionPanelSummary>
                                <h5 className={classes.title} id="title">Tech-Stack:</h5>
                                <ExpansionPanelDetails id="details">
                                  <Badge color="danger">React.js</Badge>
                                  <Badge color="rose">CSS</Badge>
                                  <Badge color="primary">JavaScript</Badge>
                                  <Badge color="warning">React Router 4</Badge>
                                  <Badge color="info">Json Web Token</Badge>
                                  <Badge color="warning">ES6</Badge>
                                  <Badge color="rose">Redux</Badge>
                                  <Badge color="primary">React Hooks</Badge>
                                  <Badge color="info">Async/Await</Badge>
                                  <Badge color="success">React-Moment</Badge>
                                  <Badge color="danger">Axios</Badge>
                                  <Badge color="info">MongoDB</Badge>
                                  <Badge color="rose">Mongoose Schema</Badge>
                                  <Badge color="primary">Node.js</Badge>
                                  <Badge color="success">Express.js</Badge>
                                </ExpansionPanelDetails>
                              </ExpansionPanel>
                                <br /><br/><br /><br />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={6}>
                              <Card
                                elevation={20}
                                background
                                style={{
                                  backgroundImage:
                                    "url(" + Emaily + ")"
                                }}
                              >
                                <a href="#mark" />
                                <CardBody
                                  background
                                  className={classes.cardBody}
                                >
                                  <Badge
                                    color="danger"
                                    className={classes.badge}
                                  >
                                    May 2019
                                  </Badge>
                                  <a href="https://emailymailer.herokuapp.com">
                                    <h2 className={classes.cardTitleWhite}>
                                      Emaily
                                    </h2>
                                  </a>
                                  <div>
                                    <Button
                                      href={"https://github.com/themarcusaurelius/emaily"}
                                      justIcon
                                      color="info"
                                    >
                                      <i className={classes.socials + " fab fa-github-alt"} />
                                    </Button>
                                  </div>
                                </CardBody>
                              </Card>
                              <ExpansionPanel elevation={20}>
                                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                  <p className={classes.description}>
                                    Full Stack app for sending mass emails to collect feedback. 
                                  </p>
                                </ExpansionPanelSummary>
                                <h5 className={classes.title} id="title">Tech-Stack:</h5>
                                <ExpansionPanelDetails id="details">
                                  <Badge color="danger">React.js</Badge>
                                  <Badge color="warning">Materialize-CSS</Badge>
                                  <Badge color="rose">http-proxy-middleware</Badge>
                                  <Badge color="primary">JavaScript</Badge>
                                  <Badge color="warning">React Router 4</Badge>
                                  <Badge color="info">0auth</Badge>
                                  <Badge color="success">JSS</Badge>
                                  <Badge color="danger">D3</Badge>
                                  <Badge color="warning">ES6</Badge>
                                  <Badge color="rose">Lodash</Badge>
                                  <Badge color="primary">React-Redux</Badge>
                                  <Badge color="info">React-Stripe-Checkout</Badge>
                                  <Badge color="success">Redux</Badge>
                                  <Badge color="danger">Redux-Form</Badge>
                                  <Badge color="info">Redux-Thunk</Badge>
                                  <Badge color="warning">MongoDB</Badge>
                                  <Badge color="rose">Mongoose Schema</Badge>
                                  <Badge color="primary">Node.js</Badge>
                                  <Badge color="info">Express.js</Badge>
                                  <Badge color="success">Passport.js</Badge>
                                  <Badge color="danger">SendGrid</Badge>
                                  <Badge color="info">Path-Parser</Badge>
                                  <Badge color="warning">Local Tunnel</Badge>
                                </ExpansionPanelDetails>
                              </ExpansionPanel>
                              <br /><br/><br /><br />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={6}>
                              <Card
                                background
                                style={{
                                  backgroundImage:
                                    "url(" + Streamy + ")"
                                }}
                              >
                                <a href="https://drive.google.com/file/d/1QqLQrEK_nFegJ1Wp9QBrsvVX0mISG_nA/view" />
                                <CardBody
                                  background
                                  className={classes.cardBody}
                                >
                                  <Badge
                                    color="success"
                                    className={classes.badge}
                                  >
                                    April 2019
                                  </Badge>
                                  <a href="https://drive.google.com/file/d/1QqLQrEK_nFegJ1Wp9QBrsvVX0mISG_nA/view">
                                    <h2 className={classes.cardTitleWhite}>
                                      Streamy
                                    </h2>
                                  </a>
                                  <div>
                                    <Button
                                      href={"https://github.com/themarcusaurelius/streamy"}
                                      justIcon
                                      color="danger"
                                    >
                                      <i className={classes.socials + " fab fa-github-alt"} />
                                    </Button>
                                  </div>
                                </CardBody>
                              </Card>
                              <ExpansionPanel elevation={20}>
                                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                  <p className={classes.description}>
                                    Full-stack real-time streaming application with authentication.
                                  </p>
                                </ExpansionPanelSummary>
                                <h5 className={classes.title} id="title">Tech-Stack:</h5>
                                <ExpansionPanelDetails id="details">
                                  <Badge color="danger">React.js</Badge>
                                  <Badge color="success">Semantic UI</Badge>
                                  <Badge color="warning">Youtube API</Badge>
                                  <Badge color="rose">ES6</Badge>
                                  <Badge color="primary">Google Auth</Badge>
                                  <Badge color="info">Google API</Badge>
                                  <Badge color="success">Redux</Badge>
                                  <Badge color="danger">Async/Await</Badge>
                                  <Badge color="warning">CRUD Methods</Badge>
                                  <Badge color="rose">JSON Server</Badge>
                                  <Badge color="primary">Node Media Server</Badge>
                                  <Badge color="info">Lodash</Badge>
                                  <Badge color="success">React Router 4</Badge>
                                  <Badge color="primary">Redux-Form</Badge>
                                  <Badge color="warning">Redux-Thunk</Badge>
                                  <Badge color="rose">flv.js</Badge>
                                </ExpansionPanelDetails>
                              </ExpansionPanel>
                              <br /><br/><br /><br />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={6}>
                              <Card
                                elevation={20}
                                background
                                style={{
                                  backgroundImage:
                                    "url(" + video + ")"
                                }}
                              >
                                <a href="#mark" />
                                <CardBody
                                  background
                                  className={classes.cardBody}
                                >
                                  <Badge
                                    color="warning"
                                    className={classes.badge}
                                  >
                                    March 2019
                                  </Badge>
                                  <a href="https://reactvideos.herokuapp.com/">
                                    <h2 className={classes.cardTitleWhite}>
                                      Axios Video
                                    </h2>
                                  </a>
                                  <div>
                                    <Button
                                      href={"https://github.com/themarcusaurelius/reactVideos"}
                                      justIcon
                                      color="rose"
                                    >
                                      <i className={classes.socials + " fab fa-github-alt"} />
                                    </Button>
                                  </div>
                                </CardBody>
                              </Card>
                              <ExpansionPanel elevation={20}>
                                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                  <p className={classes.description}>
                                    Youtube clone highlighting REST API calls using Axios.
                                  </p>
                                </ExpansionPanelSummary>
                                <h5 className={classes.title} id="title">Tech-Stack:</h5>
                                <ExpansionPanelDetails id="details">
                                  <Badge color="danger">React.js</Badge>
                                  <Badge color="warning">Semantic UI</Badge>
                                  <Badge color="rose">CSS</Badge>
                                  <Badge color="primary">JavaScript</Badge>
                                  <Badge color="info">0auth</Badge>
                                  <Badge color="success">JSS</Badge>
                                  <Badge color="danger">Axios</Badge>
                                  <Badge color="warning">ES6</Badge>
                                  <Badge color="success">React-Moment</Badge>
                                  <Badge color="primary">Node.js</Badge>
                                  <Badge color="info">Youtube API</Badge>
                                  <Badge color="rose">Heroku</Badge>
                                </ExpansionPanelDetails>
                              </ExpansionPanel>
                              <br /><br/><br /><br />
                            </GridItem>
                          </GridContainer>
                        </GridItem>
                        
                        <GridItem
                          xs={12}
                          sm={12}
                          md={2}
                          className={classes.gridItem}
                        >
                          <h4 className={classes.title}>Stats</h4>
                          <ul className={classes.listUnstyled}>
                            <li>
                              <b>6</b> Deployments
                            </li>
                          </ul>
                          <hr />
                          <h4 className={classes.title}>About this work</h4>
                          <p className={classes.description}>
                            These are a few of the Full-Stack MERN applications I have deployed. There are a variety of technologies 
                            and skill sets used in these examples that highlight my capabilities as a Full-Stack developer.
                          </p>
                        </GridItem>
                      </GridContainer>
                    )
                  },
                  {
                    tabButton: "Front-End",
                    tabIcon: ArtTrackIcon,
                    tabContent: (
                      <GridContainer>
                        <GridItem
                          xs={12}
                          sm={12}
                          md={7}
                          className={classes.gridItem}
                        >
                          <h4 className={classes.title}>Recent Work</h4>
                          <GridContainer className={classes.collections}>
                            <GridItem xs={12} sm={12} md={6}>
                              <Card
                                background
                                style={{
                                  backgroundImage: "url(" + context + ")"
                                }}
                              >
                                <a href="https://github.com/themarcusaurelius/clicky" />
                                <CardBody
                                  background
                                  className={classes.cardBody}
                                >
                                  <Badge
                                    color="info"
                                    className={classes.badge}
                                  >
                                    December 2018
                                  </Badge>
                                  <a href="https://contexttranslator.herokuapp.com/">
                                    <h2 className={classes.cardTitleWhite}>
                                      Context
                                    </h2>
                                  </a>
                                  <div>
                                    <Button
                                      href={"https://github.com/themarcusaurelius/translator"}
                                      justIcon
                                      color="primary"
                                    >
                                      <i className={classes.socials + " fab fa-github-alt"} />
                                    </Button>
                                  </div>
                                </CardBody>
                              </Card>
                              <ExpansionPanel elevation={20}>
                                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                  <p className={classes.description}>
                                    Application using Context API with 
                                    regards to state management.
                                  </p>
                                </ExpansionPanelSummary>
                                <h5 className={classes.title} id="title">Tech-Stack:</h5>
                                <ExpansionPanelDetails id="details">
                                  <Badge color="danger">React.js</Badge>
                                  <Badge color="rose">Context</Badge>
                                  <Badge color="primary">JavaScript</Badge>
                                  <Badge color="warning">ES6</Badge>
                                  <Badge color="primary">Node.js</Badge>
                                  <Badge color="info">Semantic UI</Badge>
                                  <Badge color="rose">Heroku</Badge>
                                </ExpansionPanelDetails>
                              </ExpansionPanel>
                              <br /><br/><br /><br />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={6}>
                              <Card
                                background
                                style={{
                                  backgroundImage: "url(" + clicky + ")"
                                }}
                              >
                                <a href="https://github.com/themarcusaurelius/clicky" />
                                <CardBody
                                  background
                                  className={classes.cardBody}
                                >
                                  <Badge
                                    color="danger"
                                    className={classes.badge}
                                  >
                                    December 2018
                                  </Badge>
                                  <a href="https://clickclicksmash.herokuapp.com/">
                                    <h2 className={classes.cardTitleWhite}>
                                      .map Clicky
                                    </h2>
                                  </a>
                                  <div>
                                    <Button
                                      href={"https://github.com/themarcusaurelius/clicky"}
                                      justIcon
                                      color="warning"
                                    >
                                      <i className={classes.socials + " fab fa-github-alt"} />
                                    </Button>
                                  </div>
                                </CardBody>
                              </Card>
                              <ExpansionPanel elevation={20}>
                                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                  <p className={classes.description}>
                                    Memory game testing users ability pick randomly shuffled images 
                                  </p>
                                </ExpansionPanelSummary>
                                <h5 className={classes.title} id="title">Tech-Stack:</h5>
                                <ExpansionPanelDetails id="details">
                                  <Badge color="danger">React.js</Badge>
                                  <Badge color="rose">CSS</Badge>
                                  <Badge color="primary">JavaScript</Badge>
                                  <Badge color="warning">ES6</Badge>
                                  <Badge color="primary">Node.js</Badge>
                                  <Badge color="info">Express.js</Badge>
                                  <Badge color="rose">Heroku</Badge>
                                </ExpansionPanelDetails>
                              </ExpansionPanel>
                              <br /><br/><br /><br />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={6}>
                              <Card
                                background
                                style={{
                                  backgroundImage: "url(" + Bebop + ")"
                                }}
                              >
                                <a href="#mark" />
                                <CardBody
                                  background
                                  className={classes.cardBody}
                                >
                                  <Badge color="danger" className={classes.badge}>
                                    October 2018
                                  </Badge>
                                  <a href="https://friendfinder555.herokuapp.com/">
                                    <h2 className={classes.cardTitleWhite}>
                                      Multiplayer
                                    </h2>
                                  </a>
                                  <div>
                                    <Button
                                      href={"https://github.com/projectGreenbelt/GreenToad"}
                                      justIcon
                                      color="warning"
                                    >
                                      <i className={classes.socials + " fab fa-github-alt"} />
                                    </Button>
                                  </div>
                                </CardBody>
                              </Card>
                              <ExpansionPanel elevation={20}>
                                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                  <p className={classes.description}>
                                    JavaScript with jQuery multiplayer game.
                                  </p>
                                </ExpansionPanelSummary>
                                <h5 className={classes.title} id="title">Tech-Stack:</h5>
                                <ExpansionPanelDetails id="details">
                                  <Badge color="danger">JavaScript</Badge>
                                  <Badge color="rose">CSS</Badge>
                                  <Badge color="primary">HTML5</Badge>
                                  <Badge color="warning">jQuery</Badge>
                                  <Badge color="success">Bootstrap 4</Badge>
                                </ExpansionPanelDetails>
                              </ExpansionPanel>
                              <br /><br/><br /><br />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={6}>
                              <Card
                                elevation={20}
                                background
                                style={{
                                  backgroundImage:
                                    "url(" + reading + ")"
                                }}
                              >
                                <a href="#mark" />
                                <CardBody
                                  background
                                  className={classes.cardBody}
                                >
                                  <Badge
                                    color="danger"
                                    className={classes.badge}
                                  >
                                    January 2019
                                  </Badge>
                                  <a href="https://marksreadinglist.herokuapp.com/">
                                    <h2 className={classes.cardTitleWhite}>
                                      CRUD Reading List
                                    </h2>
                                  </a>
                                  <div>
                                    <Button
                                      href={"https://github.com/themarcusaurelius/ReadingList"}
                                      justIcon
                                      color="info"
                                    >
                                      <i className={classes.socials + " fab fa-github-alt"} />
                                    </Button>
                                  </div>
                                </CardBody>
                              </Card>
                              <ExpansionPanel elevation={20}>
                                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                  <p className={classes.description}>
                                    CRUD application letting users add/delete books to a reading list.
                                  </p>
                                </ExpansionPanelSummary>
                                <h5 className={classes.title} id="title">Tech-Stack:</h5>
                                <ExpansionPanelDetails id="details">
                                  <Badge color="danger">React.js</Badge>
                                  <Badge color="warning">Bootstrap 4</Badge>
                                  <Badge color="rose">CSS</Badge>
                                  <Badge color="primary">JavaScript</Badge>
                                  <Badge color="success">JSS</Badge>
                                  <Badge color="warning">ES6</Badge>
                                  <Badge color="primary">Node.js</Badge>
                                  <Badge color="danger">Express.js</Badge>
                                  <Badge color="info">MongoDB</Badge>
                                  <Badge color="success">React Router 4</Badge>
                                  <Badge color="rose">Heroku</Badge>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                            <br /><br/><br /><br />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={6}>
                              <Card
                                background
                                style={{
                                  backgroundImage: "url(" + quiz + ")"
                                }}
                              >
                                <a href="#mark" />
                                <CardBody
                                  background
                                  className={classes.cardBody}
                                >
                                  <Badge
                                    color="info"
                                    className={classes.badge}
                                  >
                                    September 2018
                                  </Badge>
                                  <a href="https://themarcusaurelius.github.io/TriviaGame/">
                                    <h2 className={classes.cardTitleWhite}>
                                      Trivia Game
                                    </h2>
                                  </a>
                                  <div>
                                    <Button
                                      href={"https://github.com/themarcusaurelius/TriviaGame"}
                                      justIcon
                                      color="success"
                                    >
                                      <i className={classes.socials + " fab fa-github-alt"} />
                                    </Button>
                                  </div>
                                </CardBody>
                              </Card>
                              <ExpansionPanel elevation={20}>
                                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                  <p className={classes.description}>
                                    JavaScript with jQuery multiple-choice quiz.
                                  </p>
                                </ExpansionPanelSummary>
                                <h5 className={classes.title} id="title">Tech-Stack:</h5>
                                <ExpansionPanelDetails id="details">
                                  <Badge color="danger">JavaScript</Badge>
                                  <Badge color="rose">CSS</Badge>
                                  <Badge color="primary">HTML5</Badge>
                                  <Badge color="warning">jQuery</Badge>
                                  <Badge color="success">Bootstrap 4</Badge>
                                  <Badge color="info">Timers</Badge>
                                </ExpansionPanelDetails>
                              </ExpansionPanel>
                              <br /><br/><br /><br />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={6}>
                              <Card
                                background
                                style={{
                                  backgroundImage: "url(" + friendFinder + ")"
                                }}
                              >
                                <a href="#mark" />
                                <CardBody
                                  background
                                  className={classes.cardBody}
                                >
                                  <Badge
                                    color="warning"
                                    className={classes.badge}
                                  >
                                    September 2018
                                  </Badge>
                                  <a href="https://friendfinder555.herokuapp.com/survey">
                                    <h2 className={classes.cardTitleWhite}>
                                      Friend Match
                                    </h2>
                                  </a>
                                  <div>
                                    <Button
                                      href={"https://github.com/themarcusaurelius/FriendFinder"}
                                      justIcon
                                      color="primary"
                                    >
                                      <i className={classes.socials + " fab fa-github-alt"} />
                                    </Button>
                                  </div>
                                </CardBody>
                              </Card>
                              <ExpansionPanel elevation={20}>
                                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                  <p className={classes.description}>
                                    Helps users find their most compatible friend. 
                                  </p>
                                </ExpansionPanelSummary>
                                <h5 className={classes.title} id="title">Tech-Stack:</h5>
                                <ExpansionPanelDetails id="details">
                                  <Badge color="danger">JavaScript</Badge>
                                  <Badge color="rose">CSS</Badge>
                                  <Badge color="primary">HTML5</Badge>
                                  <Badge color="warning">jQuery</Badge>
                                  <Badge color="success">Bootstrap 4</Badge>
                                  <Badge color="info">Node.js</Badge>
                                  <Badge color="danger">Express.js</Badge>
                                  <Badge color="rose">Heroku</Badge>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                            </GridItem>
                          </GridContainer>
                        </GridItem>
                        <GridItem
                          xs={12}
                          sm={12}
                          md={2}
                          className={classes.gridItem}
                        >
                          <h4 className={classes.title}>Stats</h4>
                          <ul className={classes.listUnstyled}>
                            <li>
                              <b>6</b> Challenges
                            </li>
                          </ul>
                          <hr />
                          <h4 className={classes.title}>About this work</h4>
                          <p className={classes.description}>
                            A few examples of front-end work that showcase various web development technologies such as 
                            React.js, Vanilla JavaScript, jQuery, CSS, HTML, as well as higher order methods such as .map(). 
                          </p>
                        </GridItem>
                      </GridContainer>
                    )
                  },
                  {
                    tabButton: "Back-End",
                    tabIcon: Code,
                    tabContent: (
                      <GridContainer>
                        <GridItem
                          xs={12}
                          sm={12}
                          md={7}
                          className={classes.gridItem}
                        >
                          <h4 className={classes.title}>Recent Work</h4>
                          <GridContainer className={classes.collections}>
                            <GridItem xs={12} sm={12} md={12}>
                              <Card
                                background
                                style={{
                                  backgroundImage: "url(" + api + ")"
                                }}
                              >
                                <a href="#mark" />
                                <CardBody
                                  background
                                  className={classes.cardBody}
                                >
                                  <Badge
                                    color="danger"
                                    className={classes.badge}
                                  >
                                    April 2019
                                  </Badge>
                                  <a href="https://drive.google.com/file/d/1v1dLR_0lRexp-A9rznxgnuFMYhHR3l2o/view">
                                    <h2 className={classes.cardTitleWhite}>
                                     CLI Klaviyo
                                    </h2>
                                  </a>
                                  <div>
                                    <Button
                                      href={"https://github.com/themarcusaurelius/challenge"}
                                      justIcon
                                      color="primary"
                                    >
                                      <i className={classes.socials + " fab fa-github-alt"} />
                                    </Button>
                                  </div>
                                </CardBody>
                              </Card>
                              <ExpansionPanel elevation={20}>
                                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                  <p className={classes.description}>
                                    Node.js back-end application that makes POST/GET requests using
                                    an API key to a Client's Klaviyo account.
                                  </p>
                              </ExpansionPanelSummary>
                              <h5 className={classes.title} id="title">Tech-Stack:</h5>
                              <ExpansionPanelDetails id="details">
                                <Badge color="danger">JavaScript</Badge>
                                <Badge color="success">Node.js</Badge>
                                <Badge color="primary">Express.js</Badge>
                                <Badge color="info">Body-Parser</Badge>
                                <Badge color="rose">Cookie-Parser</Badge>
                                <Badge color="warning">Request</Badge>
                                <Badge color="danger">Klaviyo API</Badge>
                                <Badge color="success">Postman</Badge>
                              </ExpansionPanelDetails>
                            </ExpansionPanel>
                            <br /><br/><br /><br />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={12}>
                              <Card
                                background
                                style={{
                                  backgroundImage: "url(" + Bamazon + ")"
                                }}
                              >
                                <a href="https://drive.google.com/file/d/17M12_me-22Jigm525EIaB4wXT8C3rgYD/view" />
                                <CardBody
                                  background
                                  className={classes.cardBody}
                                >
                                  <Badge color="info" className={classes.badge}>
                                    October 2018
                                  </Badge>
                                  <a href="https://drive.google.com/file/d/17M12_me-22Jigm525EIaB4wXT8C3rgYD/view">
                                    <h2 className={classes.cardTitleWhite}>
                                      CLI Bamazon
                                    </h2>
                                  </a>
                                  <div>
                                    <Button
                                      href={"https://github.com/themarcusaurelius/bamazon"}
                                      justIcon
                                      color="success"
                                    >
                                      <i className={classes.socials + " fab fa-github-alt"} />
                                    </Button>
                                  </div>
                                </CardBody>
                              </Card>
                              <ExpansionPanel elevation={20}>
                                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                  <p className={classes.description}>
                                    Online store built through Node.js allowing users to buy available products through the command line. 
                                    Handles current pricing, inventory, and updates inventory on sale.
                                  </p>
                                </ExpansionPanelSummary>
                                <h5 className={classes.title} id="title">Tech-Stack:</h5>
                                <ExpansionPanelDetails id="details">
                                  <Badge color="danger">JavaScript</Badge>
                                  <Badge color="rose">chalk</Badge>
                                  <Badge color="primary">dotenv</Badge>
                                  <Badge color="warning">inquirer</Badge>
                                  <Badge color="success">mysql</Badge>
                                  <Badge color="info">require</Badge>
                                </ExpansionPanelDetails>
                              </ExpansionPanel>
                              <br /><br/><br /><br />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={12}>
                              <Card
                                background
                                style={{
                                  backgroundImage: "url(" + Liri + ")"
                                }}
                              >
                                <a href="#mark" />
                                <CardBody
                                  background
                                  className={classes.cardBody}
                                >
                                  <Badge
                                    color="danger"
                                    className={classes.badge}
                                  >
                                    October 2018
                                  </Badge>
                                  <a href="https://drive.google.com/file/d/19of5XCochenZgjEoihDpNh2Wl0arEGih/view">
                                    <h2 className={classes.cardTitleWhite}>
                                      CLI Liri
                                    </h2>
                                  </a>
                                  <div>
                                    <Button
                                      href={"https://github.com/themarcusaurelius/liri-node-app"}
                                      justIcon
                                      color="info"
                                    >
                                      <i className={classes.socials + " fab fa-github-alt"} />
                                    </Button>
                                  </div>
                                </CardBody>
                              </Card>
                              <ExpansionPanel elevation={20}>
                                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                  <p className={classes.description}>
                                    Node.js app that takes in the user's commands/requests and returns the appropriate answer.
                                    Set up to handle requests for Songs, Movies, and Concerts.
                                  </p>
                                </ExpansionPanelSummary>
                                <h5 className={classes.title} id="title">Tech-Stack:</h5>
                                <ExpansionPanelDetails id="details">
                                  <Badge color="danger">JavaScript</Badge>
                                  <Badge color="rose">chalk-animation</Badge>
                                  <Badge color="primary">cryptiles</Badge>
                                  <Badge color="warning">dotenv</Badge>
                                  <Badge color="success">fs-extra</Badge>
                                  <Badge color="info">moment</Badge>
                                  <Badge color="danger">node spotify api</Badge>
                                  <Badge color="rose">omdb api</Badge>
                                  <Badge color="primary">bands in town api</Badge>
                                  <Badge color="warning">request</Badge>
                                  <Badge color="success">request-promise</Badge>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                            </GridItem>
                          </GridContainer>
                        </GridItem>
                        <GridItem
                          xs={12}
                          sm={12}
                          md={2}
                          className={classes.gridItem}
                        >
                          <h4 className={classes.title}>Stats</h4>
                          <ul className={classes.listUnstyled}>
                            <li>
                              <b>3</b> Challenges
                            </li>
                          </ul>
                          <hr />
                          <h4 className={classes.title}>About this work</h4>
                          <p className={classes.description}>
                            This section contains a few applications built with Node.js
                            that handle user requests through the command line interface as well
                            as working with API's to pull/push data from/to online sources. 
                          </p>
                        </GridItem>
                      </GridContainer>
                    )
                  },
                  {
                    tabButton: "Elasticsearch",
                    tabIcon: BarChartIcon,
                    tabContent: (
                      <GridContainer>
                        <GridItem
                          xs={12}
                          sm={12}
                          md={7}
                          className={classes.gridItem}
                        >
                          <h4 className={classes.title}>Recent Work</h4>
                          <GridContainer className={classes.collections}>
                            <GridItem xs={12} sm={12} md={6}>
                              <Card
                                background
                                style={{
                                  backgroundImage: "url(" + cv + ")"
                                }}
                              >
                                <a href="https://drive.google.com/file/d/17M12_me-22Jigm525EIaB4wXT8C3rgYD/view" />
                                <CardBody
                                  background
                                  className={classes.cardBody}
                                >
                                  <Badge color="info" className={classes.badge}>
                                    February 2020
                                  </Badge>
                                  <a href="https://covidstats.net">
                                    <h2 className={classes.cardTitleWhite}>
                                      CV Tracker
                                    </h2>
                                  </a>
                                  <div>
                                    <Button
                                      href={"https://github.com/themarcusaurelius/coronaVirus"}
                                      justIcon
                                      color="success"
                                    >
                                      <i className={classes.socials + " fab fa-github-alt"} />
                                    </Button>
                                  </div>
                                </CardBody>
                              </Card>
                              <ExpansionPanel elevation={20}>
                                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                  <p className={classes.description}>
                                    Real-time monitoring and statistical tracking of COVID-19. 
                                  </p>
                                </ExpansionPanelSummary>
                                <h5 className={classes.title} id="title">Tech-Stack:</h5>
                                <ExpansionPanelDetails id="details">
                                  <Badge color="danger">JavaScript</Badge>
                                  <Badge color="rose">Node.js</Badge>
                                  <Badge color="primary">Elasticsearch</Badge>
                                  <Badge color="warning">REST API</Badge>
                                  <Badge color="success">Kibana</Badge>
                                  <Badge color="info">AWS</Badge>
                                </ExpansionPanelDetails>
                              </ExpansionPanel>
                              <br /><br/><br /><br />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={6}>
                              <Card
                                background
                                style={{
                                  backgroundImage: "url(" + apd + ")"
                                }}
                              >
                                <a href="#mark" />
                                <CardBody
                                  background
                                  className={classes.cardBody}
                                >
                                  <Badge
                                    color="danger"
                                    className={classes.badge}
                                  >
                                    October 2019
                                  </Badge>
                                  <a href="https://drive.google.com/file/d/1KfkK0Ha6LgoFuaAjpjORL2_C-OQyLY-E/view?usp=sharing">
                                    <h2 className={classes.cardTitleWhite}>
                                     Crime Watch
                                    </h2>
                                  </a>
                                  <div>
                                    <Button
                                      href={"https://github.com/themarcusaurelius/KERN-Stack-Demo"}
                                      justIcon
                                      color="primary"
                                    >
                                      <i className={classes.socials + " fab fa-github-alt"} />
                                    </Button>
                                  </div>
                                </CardBody>
                              </Card>
                              <ExpansionPanel elevation={20}>
                                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                  <p className={classes.description}>
                                    Real-time crime reporting for the Austin, TX area.  
                                  </p>
                                </ExpansionPanelSummary>
                                <h5 className={classes.title} id="title">Tech-Stack:</h5>
                                <ExpansionPanelDetails id="details">
                                  <Badge color="danger">JavaScript</Badge>
                                  <Badge color="success">Node.js</Badge>
                                  <Badge color="primary">Express.js</Badge>
                                  <Badge color="warning">Kibana</Badge>
                                  <Badge color="rose">Elasticsearch</Badge>
                                  <Badge color="info">REST API</Badge>
                                </ExpansionPanelDetails>
                              </ExpansionPanel>
                              <br /><br/><br /><br />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={6}>
                              <Card
                                background
                                style={{
                                  backgroundImage: "url(" + media + ")"
                                }}
                              >
                                <a href="#mark" />
                                <CardBody
                                  background
                                  className={classes.cardBody}
                                >
                                  <Badge
                                    color="warning"
                                    className={classes.badge}
                                  >
                                    February 2020
                                  </Badge>
                                  <a href="https://d5xcxbtnc4h7q.cloudfront.net/">
                                    <h2 className={classes.cardTitleWhite}>
                                     Video Rek
                                    </h2>
                                  </a>
                                  <div>
                                    <Button
                                      href={"https://github.com/themarcusaurelius/aws-vizion-rek"}
                                      justIcon
                                      color="rose"
                                    >
                                      <i className={classes.socials + " fab fa-github-alt"} />
                                    </Button>
                                  </div>
                                </CardBody>
                              </Card>
                              <ExpansionPanel elevation={20}>
                                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                  <p className={classes.description}>
                                    Video auto-tagging using AWS Rekognition into Elasticsearch. 
                                  </p>
                                </ExpansionPanelSummary>
                                <h5 className={classes.title} id="title">Tech-Stack:</h5>
                                <ExpansionPanelDetails id="details">
                                  <Badge color="danger">JavaScript</Badge>
                                  <Badge color="success">Node.js</Badge>
                                  <Badge color="primary">AWS Rekognition</Badge>
                                  <Badge color="warning">Kibana</Badge>
                                  <Badge color="rose">Elasticsearch</Badge>
                                  <Badge color="info">AWS Lambda</Badge>
                                  <Badge color="danger">AWS S3</Badge>
                                  <Badge color="success">React.js</Badge>
                                </ExpansionPanelDetails>
                              </ExpansionPanel>
                              <br /><br/><br /><br />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={6}>
                              <Card
                                background
                                style={{
                                  backgroundImage: "url(" + sample + ")"
                                }}
                              >
                                <a href="#mark" />
                                <CardBody
                                  background
                                  className={classes.cardBody}
                                >
                                  <Badge
                                    color="rose"
                                    className={classes.badge}
                                  >
                                    December 2019
                                  </Badge>
                                  <a href="https://drive.google.com/file/d/1KfkK0Ha6LgoFuaAjpjORL2_C-OQyLY-E/view?usp=sharing">
                                    <h2 className={classes.cardTitleWhite}>
                                     Earthquakes
                                    </h2>
                                  </a>
                                  <div>
                                    <Button
                                      href={"https://github.com/themarcusaurelius/earthquakes"}
                                      justIcon
                                      color="info"
                                    >
                                      <i className={classes.socials + " fab fa-github-alt"} />
                                    </Button>
                                  </div>
                                </CardBody>
                              </Card>
                              <ExpansionPanel elevation={20}>
                                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                  <p className={classes.description}>
                                    Real-time earthquake monitoring with alerts.  
                                  </p>
                                </ExpansionPanelSummary>
                                <h5 className={classes.title} id="title">Tech-Stack:</h5>
                                <ExpansionPanelDetails id="details">
                                  <Badge color="danger">JavaScript</Badge>
                                  <Badge color="success">Node.js</Badge>
                                  <Badge color="primary">Express.js</Badge>
                                  <Badge color="warning">Kibana</Badge>
                                  <Badge color="rose">Elasticsearch</Badge>
                                  <Badge color="info">REST API</Badge>
                                </ExpansionPanelDetails>
                              </ExpansionPanel>
                              <br /><br/><br /><br />
                            </GridItem>
                          </GridContainer>
                        </GridItem>
                        <GridItem
                          xs={12}
                          sm={12}
                          md={2}
                          className={classes.gridItem}
                        >
                          <h4 className={classes.title}>Stats</h4>
                          <ul className={classes.listUnstyled}>
                            <li>
                              <b>4</b> Challenges
                            </li>
                          </ul>
                          <hr />
                          <h4 className={classes.title}>About this work</h4>
                          <p className={classes.description}>
                            This section contains a few professionally deployed applications built using Elasticsearch 
                            and the various data ingestion methods surrounding it. 
                          </p>
                        </GridItem>
                      </GridContainer>
                    )
                  },
                  {
                    tabButton: "PowerShell",
                    tabIcon: WebAssetIcon,
                    tabContent: (
                      <GridContainer>
                        <GridItem
                          xs={12}
                          sm={12}
                          md={7}
                          className={classes.gridItem}
                        >
                          <h4 className={classes.title}>Recent Work</h4>
                          <GridContainer className={classes.collections}>
                            <GridItem xs={12} sm={12} md={12}>
                              <Card
                                background
                                style={{
                                  backgroundImage: "url(" + windows + ")"
                                }}
                              >
                                <a href="https://github.com/themarcusaurelius/Windows-Monitoring"/>
                                <CardBody
                                  background
                                  className={classes.cardBody}
                                >
                                  <Badge color="info" className={classes.badge}>
                                    February 2020
                                  </Badge>
                                  <a href="https://covidstats.net">
                                    <h2 className={classes.cardTitleWhite}>
                                      Win Security
                                    </h2>
                                  </a>
                                  <div>
                                    <Button
                                      href={"https://github.com/themarcusaurelius/Windows-Monitoring"}
                                      justIcon
                                      color="success"
                                    >
                                      <i className={classes.socials + " fab fa-github-alt"} />
                                    </Button>
                                  </div>
                                </CardBody>
                              </Card>
                              <ExpansionPanel elevation={20}>
                                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                  <p className={classes.description}>
                                   Security monitoring for Windows terminals and servers. 
                                  </p>
                                </ExpansionPanelSummary>
                                <h5 className={classes.title} id="title">Tech-Stack:</h5>
                                <ExpansionPanelDetails id="details">
                                  <Badge color="danger">Powershell</Badge>
                                  <Badge color="rose">Elasticsearch</Badge>
                                  <Badge color="primary">Winlogbeat</Badge>
                                  <Badge color="warning">Auditbeat</Badge>
                                  <Badge color="success">Metricbeat</Badge>
                                  <Badge color="info">Kibana</Badge>
                                  <Badge color="danger">YAML</Badge>
                                </ExpansionPanelDetails>
                              </ExpansionPanel>
                              <br /><br/><br /><br />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={12}>
                              <Card
                                background
                                style={{
                                  backgroundImage: "url(" + autobeats + ")"
                                }}
                              >
                                <a href="#mark" />
                                <CardBody
                                  background
                                  className={classes.cardBody}
                                >
                                  <Badge
                                    color="danger"
                                    className={classes.badge}
                                  >
                                    October 2019
                                  </Badge>
                                  <a href="https://github.com/themarcusaurelius/autoBeats">
                                    <h2 className={classes.cardTitleWhite}>
                                     Auto Beats
                                    </h2>
                                  </a>
                                  <div>
                                    <Button
                                      href={"https://github.com/themarcusaurelius/autoBeats"}
                                      justIcon
                                      color="primary"
                                    >
                                      <i className={classes.socials + " fab fa-github-alt"} />
                                    </Button>
                                  </div>
                                </CardBody>
                              </Card>
                              <ExpansionPanel elevation={20}>
                                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                  <p className={classes.description}>
                                    Automated installation of various Beats into Elasticsearch  
                                  </p>
                                </ExpansionPanelSummary>
                                <h5 className={classes.title} id="title">Tech-Stack:</h5>
                                <ExpansionPanelDetails id="details">
                                  <Badge color="danger">Powershell</Badge>
                                  <Badge color="warning">Kibana</Badge>
                                  <Badge color="rose">Elasticsearch</Badge>
                                  <Badge color="info">The Beats</Badge>
                                  <Badge color="primary">YAML</Badge>
                                </ExpansionPanelDetails>
                              </ExpansionPanel>
                              <br /><br/><br /><br />
                            </GridItem>
                          </GridContainer>
                        </GridItem>
                        <GridItem
                          xs={12}
                          sm={12}
                          md={2}
                          className={classes.gridItem}
                        >
                          <h4 className={classes.title}>Stats</h4>
                          <ul className={classes.listUnstyled}>
                            <li>
                              <b>2</b> Challenges
                            </li>
                          </ul>
                          <hr />
                          <h4 className={classes.title}>About this work</h4>
                          <p className={classes.description}>
                            This section contains a few applications built using PowerShell to compliment and expedite data ingestion into Elasticsearch for analysis.
                          </p>
                        </GridItem>
                      </GridContainer>
                    )
                  },
                  {
                    tabButton: "Python",
                    tabIcon: TimelineIcon,
                    tabContent: (
                      <GridContainer>
                        <GridItem
                          xs={12}
                          sm={12}
                          md={7}
                          className={classes.gridItem}
                        >
                          <h4 className={classes.title}>Latest Work</h4>
                          <GridContainer className={classes.collections}>
                            <GridItem xs={12} sm={12} md={12}>
                              <Card
                                background
                                style={{
                                  backgroundImage: "url(" + api + ")"
                                }}
                              >
                                <a href="#mark" />
                                <CardBody
                                  background
                                  className={classes.cardBody}
                                >
                                  <Badge
                                    color="danger"
                                    className={classes.badge}
                                  >
                                    April 2019
                                  </Badge>
                                  <a href="https://drive.google.com/file/d/1v1dLR_0lRexp-A9rznxgnuFMYhHR3l2o/view">
                                    <h2 className={classes.cardTitleWhite}>
                                     CLI Post/Get
                                    </h2>
                                  </a>
                                  <div>
                                    <Button
                                      href={"https://github.com/themarcusaurelius/challenge"}
                                      justIcon
                                      color="primary"
                                    >
                                      <i className={classes.socials + " fab fa-github-alt"} />
                                    </Button>
                                  </div>
                                </CardBody>
                              </Card>
                              <p className={classes.description}>
                                Node.js based back-end application that makes POST/GET requests using
                                an API key to a Client's Klaviyo account.
                              </p>
                              <h5 className={classes.title}>Tech-Stack:</h5>
                              <Badge color="danger">JavaScript</Badge>
                              <Badge color="success">Node.js</Badge>
                              <Badge color="primary">Express.js</Badge>
                              <Badge color="info">Body-Parser</Badge>
                              <Badge color="rose">Cookie-Parser</Badge>
                              <Badge color="warning">Request</Badge>
                              <Badge color="danger">Klaviyo API</Badge>
                              <Badge color="success">Postman</Badge>
                              <br /><br/><hr /><br /><br />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={12}>
                              <Card
                                background
                                style={{
                                  backgroundImage: "url(" + Bamazon + ")"
                                }}
                              >
                                <a href="https://drive.google.com/file/d/17M12_me-22Jigm525EIaB4wXT8C3rgYD/view" />
                                <CardBody
                                  background
                                  className={classes.cardBody}
                                >
                                  <Badge color="info" className={classes.badge}>
                                    October 2018
                                  </Badge>
                                  <a href="https://drive.google.com/file/d/17M12_me-22Jigm525EIaB4wXT8C3rgYD/view">
                                    <h2 className={classes.cardTitleWhite}>
                                      CLI Bamazon
                                    </h2>
                                  </a>
                                  <div>
                                    <Button
                                      href={"https://github.com/themarcusaurelius/bamazon"}
                                      justIcon
                                      color="success"
                                    >
                                      <i className={classes.socials + " fab fa-github-alt"} />
                                    </Button>
                                  </div>
                                </CardBody>
                              </Card>
                              <p className={classes.description}>
                                Online store built through Node.js that allows users to buy available products through the command line. 
                                Handles current pricing, inventory, and updates inventory on sale completion.
                              </p>
                              <h5 className={classes.title}>Tech-Stack:</h5>
                              <Badge color="danger">JavaScript</Badge>
                              <Badge color="rose">chalk</Badge>
                              <Badge color="primary">dotenv</Badge>
                              <Badge color="warning">inquirer</Badge>
                              <Badge color="success">mysql</Badge>
                              <Badge color="info">require</Badge>
                              <br /><br/><hr /><br /><br />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={12}>
                              <Card
                                background
                                style={{
                                  backgroundImage: "url(" + Liri + ")"
                                }}
                              >
                                <a href="#mark" />
                                <CardBody
                                  background
                                  className={classes.cardBody}
                                >
                                  <Badge
                                    color="danger"
                                    className={classes.badge}
                                  >
                                    October 2018
                                  </Badge>
                                  <a href="https://drive.google.com/file/d/19of5XCochenZgjEoihDpNh2Wl0arEGih/view">
                                    <h2 className={classes.cardTitleWhite}>
                                      CLI Liri
                                    </h2>
                                  </a>
                                  <div>
                                    <Button
                                      href={"https://github.com/themarcusaurelius/liri-node-app"}
                                      justIcon
                                      color="info"
                                    >
                                      <i className={classes.socials + " fab fa-github-alt"} />
                                    </Button>
                                  </div>
                                </CardBody>
                              </Card>
                              <p className={classes.description}>
                                Node.js app that takes in the user's commands/requests and returns the appropriate answer.
                                Set up to handle requests for Songs, Movies, and Concerts.
                              </p>
                              <h5 className={classes.title}>Tech-Stack:</h5>
                              <Badge color="danger">JavaScript</Badge>
                              <Badge color="rose">chalk-animation</Badge>
                              <Badge color="primary">cryptiles</Badge>
                              <Badge color="warning">dotenv</Badge>
                              <Badge color="success">fs-extra</Badge>
                              <Badge color="info">moment</Badge>
                              <Badge color="danger">node spotify api</Badge>
                              <Badge color="rose">omdb api</Badge>
                              <Badge color="primary">bands in town api</Badge>
                              <Badge color="warning">request</Badge>
                              <Badge color="success">request-promise</Badge>
                            </GridItem>
                          </GridContainer>
                        </GridItem>
                        <GridItem
                          xs={12}
                          sm={12}
                          md={2}
                          className={classes.gridItem}
                        >
                          <h4 className={classes.title}>Stats</h4>
                          <ul className={classes.listUnstyled}>
                            <li>
                              <b>3</b> Challenges
                            </li>
                          </ul>
                          <hr />
                          <h4 className={classes.title}>About this work</h4>
                          <p className={classes.description}>
                            This section contains a few applications built strictly with Node.js for the back-end
                            that handle user requests through the command line interface as well
                            as working with API calls to pull/push data from/to online sources. 
                          </p>
                        </GridItem>
                      </GridContainer>
                    )
                  }
                ]}
              />
            </div>
            <Clearfix />
          </div>
        </div>
        <Footer
          content={
            <div>
              <div className={classes.left}>
                <List className={classes.list}>
                  <ListItem className={classes.inlineBlock}>
                    <a
                      href="https://github.com/themarcusaurelius"
                      className={classes.block}
                    >
                      GitHub
                    </a>
                  </ListItem>
                </List>
              </div>
              <div className={classes.right}>
                &copy; {1900 + new Date().getYear()} , made by{" "}
                <a href="https://www.linkedin.com/in/mark-mayfield-88051b147/">Mark</a> for your
                viewing pleasure.
              </div>
            </div>
          }
        />
      </div>
    );
  }
}

export default withStyles(profilePageStyle)(ProfilePage);
