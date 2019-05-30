import React from "react";
import { Link } from "react-router-dom";


// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import landingPageStyle from "assets/jss/material-kit-pro-react/views/landingPageStyle.jsx";
const dashboardRoutes = [];

class LandingPage extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <Header
          color="transparent"
          routes={dashboardRoutes}
          brand="Mark's Portfolio"
          links={<HeaderLinks dropdownHoverColor="info" />}
          fixed
          changeColorOnScroll={{
            height: 300,
            color: "info"
          }}
          {...rest}
        />
        <Parallax image={require("assets/img/bg9.jpg")} filter="dark">
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={6} md={6}>
                <h1 className={classes.title}>Welcome to my world.</h1>
                <h4>
                  This site showcases and documents my ongoing journey as a Full-Stack Web Developer. 
                  My portfolio includes multiple full stack deployed real-world applications as well as front-end and back-end applications highlighting the 
                  use of specific skill sets and technologies. I hope you enjoy!
                </h4>
                <br />
                <Link to="/profile-page">
                  <Button
                    color="primary"
                    size="lg"
                    target=""
                    rel="noopener noreferrer"
                  >
                    <i className="fas fa-arrow-right" />Continue
                  </Button>
                </Link>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
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

export default withStyles(landingPageStyle)(LandingPage);
