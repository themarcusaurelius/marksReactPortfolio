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
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import People from "@material-ui/icons/People";
import Add from "@material-ui/icons/Add";


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
import clicky from "assets/img/SmashBrosClicky.gif";
import offTheChain from "assets/img/OTC.gif";
import friendFinder from "assets/img/FF.gif";
import quiz from "assets/img/Quiz.gif";
import rooted from "assets/img/Rooted.gif";
import Bamazon from "assets/img/Bamazon.gif";
import Liri from "assets/img/liri.gif";
import Bebop from "assets/img/Bebop.gif";
import oluEletu from "assets/img/image_placeholder.jpg";
import clemOnojeghuo from "assets/img/image_placeholder.jpg";
import mariyaGeorgieva from "assets/img/image_placeholder.jpg";



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
                I have been many things in my life. An athlete, musician, realtor, world traveler, chef, etc. 
                Adding to this repertoire, I can confidently say 
                that I am also a full-stack web developer. I hope you enjoy this snapshot into the 
                journey I have gone through to get to where I am now. It's had it's ups and downs and at often times been
                a painful process, but it's been well worth it in the end!
                {" "}
              </p>
            </div>
            <div className={classes.profileTabs}>
              <NavPills
                alignCenter
                color="primary"
                tabs={[
                  {
                    tabButton: "React",
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
                                  backgroundImage:
                                    "url(" + mariyaGeorgieva + ")"
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
                                  <a href="#mark">
                                    <h2 className={classes.cardTitleWhite}>
                                      React Project
                                    </h2>
                                  </a>
                                </CardBody>
                              </Card>
                            </GridItem>
                            <GridItem xs={12} sm={12} md={6}>
                              <Card
                                background
                                style={{
                                  backgroundImage: "url(" + clemOnojeghuo + ")"
                                }}
                              >
                                <a href="#mark" />
                                <CardBody
                                  background
                                  className={classes.cardBody}
                                >
                                  <Badge color="info" className={classes.badge}>
                                    December 2018
                                  </Badge>
                                  <a href="#mark">
                                    <h2 className={classes.cardTitleWhite}>
                                      React App
                                    </h2>
                                  </a>
                                </CardBody>
                              </Card>
                            </GridItem>
                            <GridItem xs={12} sm={12} md={6}>
                              <Card
                                background
                                style={{
                                  backgroundImage: "url(" + oluEletu + ")"
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
                                    December 2018
                                  </Badge>
                                  <a href="#mark">
                                    <h2 className={classes.cardTitleWhite}>
                                      React App
                                    </h2>
                                  </a>
                                </CardBody>
                              </Card>
                            </GridItem>
                            <GridItem xs={12} sm={12} md={6}>
                              <Card
                                background
                                style={{
                                  backgroundImage:
                                    "url(" + clicky + ")"
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
                                    December 2018
                                  </Badge>
                                  <a href="https://clickclicksmash.herokuapp.com/">
                                    <h2 className={classes.cardTitleWhite}>
                                      Clicky App
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
                              <b>5</b> Challenges
                            </li>
                            <li>
                              <b>1</b> Major Deployment
                            </li>
                          </ul>
                          <hr />
                          <h4 className={classes.title}>About this work</h4>
                          <p className={classes.description}>
                            Here are a few samples of applications I've built using JavaScript React. 
                            I'm very excited to see where this journey with React.js will take me. 
                            It has been quite the adventure so far and is only just beginning!
                          </p>
                          <hr />
                          <h4 className={classes.title}>Focus</h4>
                          <Badge color="primary">React.js</Badge>
                          <Badge color="info">JSX</Badge>
                          <Badge color="success">ES6+</Badge>
                          <Badge color="rose">MongoDB</Badge>
                          <Badge color="danger">Constructors</Badge>
                          <Badge color="danger">Constructors</Badge>
                        </GridItem>
                      </GridContainer>
                    )
                  },
                  {
                    tabButton: "Advanced",
                    tabIcon: People,
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
                                    "url(" + offTheChain + ")"
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
                                    Novemeber 2018
                                  </Badge>
                                  <a href="https://offthechain-app.herokuapp.com/">
                                    <h2 className={classes.cardTitleWhite}>
                                      Pet Finder
                                    </h2>
                                  </a>
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
                                  <Badge color="info" className={classes.badge}>
                                    October 2018
                                  </Badge>
                                  <a href="https://friendfinder555.herokuapp.com/">
                                    <h2 className={classes.cardTitleWhite}>
                                      Friend Match
                                    </h2>
                                  </a>
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
                                    color="danger"
                                    className={classes.badge}
                                  >
                                    September 2018
                                  </Badge>
                                  <a href="https://themarcusaurelius.github.io/TriviaGame/">
                                    <h2 className={classes.cardTitleWhite}>
                                      Trivia Game
                                    </h2>
                                  </a>
                                </CardBody>
                              </Card>
                            </GridItem>
                            <GridItem xs={12} sm={12} md={6}>
                              <Card
                                background
                                style={{
                                  backgroundImage:
                                    "url(" + rooted + ")"
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
                                    September 2018
                                  </Badge>
                                  <a href="https://themarcusaurelius.github.io/Rooted/">
                                    <h2 className={classes.cardTitleWhite}>
                                      Room Search
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
                              <b>3</b> Challenges
                            </li>
                            <li>
                              <b>1</b> Major Deployment
                            </li>
                          </ul>
                          <hr />
                          <h4 className={classes.title}>About this work</h4>
                          <p className={classes.description}>
                            Here are samples of work I have done using a variety of different applications and interfaces 
                            combined with javaScript and jQuery code. Some are fully deployed front-to-back, 
                            while others are samples of using particular JS code(timers, etc.).
                          </p>
                          <hr />
                          <h4 className={classes.title}>Focus</h4>
                          <Badge color="danger">JavaScript</Badge>
                          <Badge color="success">Node.js</Badge>
                          <Badge color="warning">Express</Badge>
                          <Badge color="info">Sequelize</Badge>
                          <Badge color="rose">MySQL</Badge>
                          <Badge color="danger">JSON</Badge>
                          <Badge color="warning">jQuery</Badge>
                          <Badge color="info">Responsive Design</Badge>
                          <Badge color="rose">CSS</Badge>
                          <Badge color="primary">HTML</Badge>
                          <Badge color="danger">API's</Badge>
                          <Badge color="success">Firebase</Badge>
                        </GridItem>
                      </GridContainer>
                    )
                  },
                  {
                    tabButton: "Beginner",
                    tabIcon: Camera,
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
                                    "url(" + mariyaGeorgieva + ")"
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
                                    November 2018
                                  </Badge>
                                  <a href="#mark">
                                    <h2 className={classes.cardTitleWhite}>
                                      Handlebars
                                    </h2>
                                  </a>
                                </CardBody>
                              </Card>
                            </GridItem>
                            <GridItem xs={12} sm={12} md={6}>
                              <Card
                                background
                                style={{
                                  backgroundImage: "url(" + Bamazon + ")"
                                }}
                              >
                                <a href="#mark" />
                                <CardBody
                                  background
                                  className={classes.cardBody}
                                >
                                  <Badge color="info" className={classes.badge}>
                                    October 2018
                                  </Badge>
                                  <a href="#mark">
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
                                  <a href="#mark">
                                    <h2 className={classes.cardTitleWhite}>
                                      LIRI App
                                    </h2>
                                  </a>
                                </CardBody>
                              </Card>
                            </GridItem>
                            <GridItem xs={12} sm={12} md={6}>
                              <Card
                                background
                                style={{
                                  backgroundImage:
                                    "url(" + Bebop + ")"
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
                                    September 2018
                                  </Badge>
                                  <a href="#mark">
                                    <h2 className={classes.cardTitleWhite}>
                                      Multiplayer
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
                              <b>5</b> Challenges
                            </li>
                            <li>
                              <b>1</b> Major Deployment
                            </li>
                          </ul>
                          <hr />
                          <h4 className={classes.title}>About this work</h4>
                          <p className={classes.description}>
                            Here are a few samples of applications I've built using JavaScript React. 
                            I'm very excited to see where this journey with React.js will take me. 
                            It has been quite the adventure so far and is only just beginning!
                          </p>
                          <hr />
                          <h4 className={classes.title}>Focus</h4>
                          <Badge color="primary">JavaScript</Badge>
                          <Badge color="info">Jquery</Badge>
                          <Badge color="success">Node.js</Badge>
                          <Badge color="danger">Sequelize</Badge>
                          <Badge color="warning">CLI</Badge>
                          <Badge color="rose">Handlebars</Badge>
                          <Badge color="primary">HTML</Badge>
                          <Badge color="info">CSS</Badge>
                          <Badge color="success">Express</Badge>
                          <Badge color="danger">Bootsrap 4</Badge>
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
