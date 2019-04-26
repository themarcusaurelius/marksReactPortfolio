/* eslint-disable */
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Tooltip from "@material-ui/core/Tooltip";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
/* import fullSTack from "@material-ui/icons/laptopMac"; */
import fullStack from "@material-ui/icons/LaptopMac";
import Palette from "@material-ui/icons/Palette";
import Add from "@material-ui/icons/Add";
import Code from "@material-ui/icons/Code"


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
import friendFinder from "assets/img/FF.jpg";
import quiz from "assets/img/Quiz.png";
import Bamazon from "assets/img/Bamazon.gif";
import Liri from "assets/img/liri.gif";
import Bebop from "assets/img/Bebop.png";
import GreenToad from "assets/img/GT.png";
import Streamy from "assets/img/Streameo.png";
import video from "assets/img/VID.png";
import context from "assets/img/context.png";
import api from "assets/img/api.gif";
import reading from "assets/img/reading.png"
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
    const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
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
                    <h6>Full-Stack Web Developer</h6>
                    <Button
                      href={"https://github.com/themarcusaurelius"}
                      justIcon
                      simple
                      color="github"
                      className={classes.margin5}

                    >
                      <i className={classes.socials + " fab fa-github-alt"} />
                      
                    </Button>
                    <Button
                      href={"https://www.linkedin.com/in/mark-mayfield-88051b147/"}
                      justIcon
                      simple
                      color="linkedin"
                      className={classes.margin5}
                    >
                      <i className={classes.socials + " fab fa-linkedin-in"} />
                    </Button>
                  </div>
                </div>
                <div className={classes.follow}>
                  <Tooltip
                    id="tooltip-top"
                    title="Follow Me"
                    placement="top"
                    classes={{ tooltip: classes.tooltip }}
                  >
                    <Button
                      href={"https://www.instagram.com/mm_realtor/?hl=en"}
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
                  {" "}
              </p>
            </div>
            <div className={classes.profileTabs}>
              <NavPills
                alignCenter
                color="primary"
                tabs={[
                  {
                    tabButton: "Full-stack",
                    tabIcon: fullStack,
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
                              <p className={classes.description}>
                                Full Stack React.js based all-in-one-guide and current status update 
                                for every public access point on the Austin Greenbelt. 
                                Users can also check into each location and chat with other users. 
                              </p>
                              <h5 className={classes.title}>Tech-Stack:</h5>
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
                              <br /><br/><hr /><br /><br />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={12}>
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
                              <p className={classes.description}>
                                Full Stack Web App that allows users to post location and description of lost/found pet 
                                to the database or search the database for lost/found pets. 
                              </p>
                              <h5 className={classes.title}>Tech-Stack:</h5>
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
                              <br /><br/> <hr /><br /><br />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={12}>
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
                                      Redux Stream
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
                              <p className={classes.description}>
                              Full-stack real-time streaming application with authentication. Built with a multitude
                              of dependencies such as: Redux, Lodash, React-Router, Axios, Redux-Form, Redux-Thunk, Json Server, GAPI, flv.js.
                              </p>
                              <h5 className={classes.title}>Tech-Stack:</h5>
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
                              <br /><br/> <hr /><br /><br />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={12}>
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
                              <p className={classes.description}>
                              Youtube clone created with React.js and Semantic UI highlighting API calls using Axios.
                              </p>
                              <h5 className={classes.title}>Tech-Stack:</h5>
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
                              <br /><br/><hr /><br /><br />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={12}>
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
                              <p className={classes.description}>
                                Full-Stack React.js based single-page CRUD application that lets users add/delete books to/from a reading list. Book information
                                contains Authors, Title, and Synopsis.
                              </p>
                              <h5 className={classes.title}>Tech-Stack:</h5>
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
                              <b>5</b> Deployments
                            </li>
                          </ul>
                          <hr />
                          <h4 className={classes.title}>About this work</h4>
                          <p className={classes.description}>
                            These are some of my most recent Full-Stack deployed applications. There are a variety of technologies 
                            and skill sets used in these programs that highlight my role as a Full-Stack developer.
                          </p>
                        </GridItem>
                      </GridContainer>
                    )
                  },
                  {
                    tabButton: "Front-End",
                    tabIcon: Palette,
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
                              <p className={classes.description}>
                                React.js based application using Context as an alternative to Redux with 
                                regards to state management to pass down props through React components. .
                              </p>
                              <h5 className={classes.title}>Tech-Stack:</h5>
                              <Badge color="danger">React.js</Badge>
                              <Badge color="rose">Context</Badge>
                              <Badge color="primary">JavaScript</Badge>
                              <Badge color="warning">ES6</Badge>
                              <Badge color="primary">Node.js</Badge>
                              <Badge color="info">Semantic UI</Badge>
                              <Badge color="rose">Heroku</Badge>
                              <br /><br/><hr /><br /><br />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={12}>
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
                              <p className={classes.description}>
                                React.js based memory game testing users ability pick randomly shuffled images without
                                picking the same twice! 
                              </p>
                              <h5 className={classes.title}>Tech-Stack:</h5>
                              <Badge color="danger">React.js</Badge>
                              <Badge color="rose">CSS</Badge>
                              <Badge color="primary">JavaScript</Badge>
                              <Badge color="warning">ES6</Badge>
                              <Badge color="primary">Node.js</Badge>
                              <Badge color="info">Express.js</Badge>
                              <Badge color="rose">Heroku</Badge>
                              <br /><br/><hr /><br /><br />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={12}>
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
                              <p className={classes.description}>
                                Vanilla JavaScript with jQuery multiplayer game where opponents attack each other and the player who depletes
                                all their health first loses! 
                              </p>
                              <h5 className={classes.title}>Tech-Stack:</h5>
                              <Badge color="danger">JavaScript</Badge>
                              <Badge color="rose">CSS</Badge>
                              <Badge color="primary">HTML5</Badge>
                              <Badge color="warning">jQuery</Badge>
                              <Badge color="success">Bootstrap 4</Badge>
                              <br /><br/><hr /><br /><br />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={12}>
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
                              <p className={classes.description}>
                                Vanilla JavaScript with jQuery quiz where users must answer multiple choice questions before the timer runs out.
                              </p>
                              <h5 className={classes.title}>Tech-Stack:</h5>
                              <Badge color="danger">JavaScript</Badge>
                              <Badge color="rose">CSS</Badge>
                              <Badge color="primary">HTML5</Badge>
                              <Badge color="warning">jQuery</Badge>
                              <Badge color="success">Bootstrap 4</Badge>
                              <Badge color="info">Timers</Badge>
                              <br /><br/><hr /><br /><br />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={12}>
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
                              <p className={classes.description}>
                                FriendFinder is a web application that takes the results from the answers a user chooses
                                and compares them to other users' answers to find out who is most compatible with each other as a friend. 
                              </p>
                              <h5 className={classes.title}>Tech-Stack:</h5>
                              <Badge color="danger">JavaScript</Badge>
                              <Badge color="rose">CSS</Badge>
                              <Badge color="primary">HTML5</Badge>
                              <Badge color="warning">jQuery</Badge>
                              <Badge color="success">Bootstrap 4</Badge>
                              <Badge color="info">Node.js</Badge>
                              <Badge color="danger">Express.js</Badge>
                              <Badge color="rose">Heroku</Badge>
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
                              <b>5</b> Challenges
                            </li>
                          </ul>
                          <hr />
                          <h4 className={classes.title}>About this work</h4>
                          <p className={classes.description}>
                            A few examples of some front-end work that showcase various web development technologies such as 
                            React.js, Vanilla JavaScript, jQuery, CSS, and HTML. 
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
