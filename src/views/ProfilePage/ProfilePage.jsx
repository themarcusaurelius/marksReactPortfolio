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
import video from "assets/img/VID.png";
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
              Full Stack Software Engineer with the ability to design and engineer progressive web applications 
              with unique and responsive code from development to deployment. A developer adept at working in a 
              diverse team environment to deliver customized software solutions and scripts, and effective at 
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
                                      Clicky
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
                                    color="success"
                                    className={classes.badge}
                                  >
                                    March 2019
                                  </Badge>
                                  <a href="https://reactvideos.herokuapp.com/">
                                    <h2 className={classes.cardTitleWhite}>
                                      Video Player
                                    </h2>
                                  </a>
                                  <div>
                                    <Button
                                      href={"https://github.com/projectGreenbelt/GreenToad"}
                                      justIcon
                                      color="danger"
                                    >
                                      <i className={classes.socials + " fab fa-github-alt"} />
                                    </Button>
                                  </div>
                                </CardBody>
                              </Card>
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
                              <b>2</b> Major Deployments
                            </li>
                            <li>
                              <b>2</b> Challenges
                            </li>
                          </ul>
                          <hr />
                          <h4 className={classes.title}>About this work</h4>
                          <p className={classes.description}>
                            Some of my most recent work including two major full-stack deployments as well as a memory  
                            game and a video player. Below is a breakdown of specific technologies and skill sets used in these applications.
                          </p>
                          <hr />
                          <h4 className={classes.title}>Focus</h4>
                          <Badge color="primary">React.js</Badge>
                          <Badge color="info">JSX</Badge>
                          <Badge color="success">ES6+</Badge>
                          <Badge color="rose">MongoDB</Badge>
                          <Badge color="danger">Constructors</Badge>
                          <Badge color="warning">Heroku</Badge>
                          <Badge color="primary">Material-UI</Badge>
                          <Badge color="info">Authentication</Badge>
                          <Badge color="success">JSS</Badge>
                          <Badge color="rose">API Calls</Badge>
                          <Badge color="danger">Heroku</Badge>
                          <Badge color="warning">Life-cycle Methods</Badge>
                          <Badge color="primary">CRUD</Badge>
                          <Badge color="info">Express.js</Badge>
                          <Badge color="success">Node.js</Badge>
                          <Badge color="rose">NPM Packages</Badge>
                          <Badge color="danger">MySQL</Badge>
                          <Badge color="warning">Sequelize</Badge>
                          <Badge color="primary">Mongoose</Badge>
                          <Badge color="info">Material-Kit</Badge>
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
                            A few examples of some front-end work that showcase various web development technologies such as JavaScript, 
                            jQuery, CSS, and HTML. These were a lot of fun to work on and a great learning experience. 
                          </p>
                          <hr />
                          <h4 className={classes.title}>Focus</h4>
                          <Badge color="danger">JavaScript</Badge>
                          <Badge color="warning">jQuery</Badge>
                          <Badge color="rose">CSS</Badge>
                          <Badge color="primary">HTML</Badge>
                          <Badge color="info">Responsive Design</Badge>
                          <Badge color="success">Timers</Badge>
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
                            <GridItem xs={12} sm={12} md={6}>
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
                                      CLI App
                                    </h2>
                                  </a>
                                </CardBody>
                              </Card>
                            </GridItem>
                            <GridItem xs={12} sm={12} md={6}>
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
                                      LIRI App
                                    </h2>
                                  </a>
                                </CardBody>
                              </Card>
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
                            Here are a few samples I've built particulary for the back-end
                            that handle user requests through the command line interface as well
                            as working with API call to pull data from online sources.  
                          </p>
                          <hr />
                          <h4 className={classes.title}>Focus</h4>
                          <Badge color="primary">JavaScript</Badge>
                          <Badge color="success">Node.js</Badge>
                          <Badge color="rose">mySQL</Badge>
                          <Badge color="danger">Sequelize</Badge>
                          <Badge color="warning">CLI</Badge>
                          <Badge color="info">Express.js</Badge>
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
