import React from "react";
import PropTypes from 'prop-types';
// nodejs library that concatenates classes
import classNames from "classnames";
// react components used to create a google map
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
// @material-ui/icons
import PinDrop from "@material-ui/icons/PinDrop";
import Phone from "@material-ui/icons/Phone";
// core components
import Header from "components/Header/Header.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Footer from "components/Footer/Footer.jsx";

import contactUsStyle from "assets/jss/material-kit-pro-react/views/contactUsStyle.jsx";
import Axios from 'axios';

const CustomSkinMap = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={13}
      defaultCenter={{ lat: 30.267153, lng: -97.7430608 }}
      defaultOptions={{
        scrollwheel: false,
        zoomControl: true,
        styles: [
          {
            featureType: "water",
            stylers: [
              { saturation: 43 },
              { lightness: -11 },
              { hue: "#0088ff" }
            ]
          },
          {
            featureType: "road",
            elementType: "geometry.fill",
            stylers: [
              { hue: "#ff0000" },
              { saturation: -100 },
              { lightness: 99 }
            ]
          },
          {
            featureType: "road",
            elementType: "geometry.stroke",
            stylers: [{ color: "#808080" }, { lightness: 54 }]
          },
          {
            featureType: "landscape.man_made",
            elementType: "geometry.fill",
            stylers: [{ color: "#ece2d9" }]
          },
          {
            featureType: "poi.park",
            elementType: "geometry.fill",
            stylers: [{ color: "#ccdca1" }]
          },
          {
            featureType: "road",
            elementType: "labels.text.fill",
            stylers: [{ color: "#767676" }]
          },
          {
            featureType: "road",
            elementType: "labels.text.stroke",
            stylers: [{ color: "#ffffff" }]
          },
          { featureType: "poi", stylers: [{ visibility: "off" }] },
          {
            featureType: "landscape.natural",
            elementType: "geometry.fill",
            stylers: [{ visibility: "on" }, { color: "#b8cb93" }]
          },
          { featureType: "poi.park", stylers: [{ visibility: "on" }] },
          {
            featureType: "poi.sports_complex",
            stylers: [{ visibility: "on" }]
          },
          { featureType: "poi.medical", stylers: [{ visibility: "on" }] },
          {
            featureType: "poi.business",
            stylers: [{ visibility: "simplified" }]
          }
        ]
      }}
    >
      <Marker position={{ lat: 30.267153, lng: -97.7430608 }} />
    </GoogleMap>
  ))
);

class ContactUsPage extends React.Component {
  state = {
    user: '',
    email: '',
    company: '',
    message: '',
    date: new Date()
    //multiline: 'Controlled'
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }

  change = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  reset = () => {
    this.setState({
      user: '',
      email: '',
      company: '',
      message: '',
      date: new Date()
    })
  }

  onSubmit = async () => {
    const url = 'api/contact'
    const contact = this.state

    await Axios.post(url, contact).then(() =>{})

    console.log(this.state)
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Header
          brand="Mark's Portfolio"
          links={<HeaderLinks dropdownHoverColor="dark" />}
          fixed
          color="dark"
        />
        <div className={classes.bigMap}>
          <CustomSkinMap
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyB6kASRMis5abYOVOoo-j6Q-RT4RwBlKno"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={
              <div
                style={{
                  height: `100%`,
                  borderRadius: "6px",
                  overflow: "hidden"
                }}
              />
            }
            mapElement={<div style={{ height: `100%` }} />}
          />
        </div>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.contactContent}>
            <div className={classes.container}>
              <h2 className={classes.title}>Contact me!</h2>
              <GridContainer>
                <GridItem md={6} sm={6}>
                  <p>
                    Feel free to contact me with anything related to my portfolio, and
                    I'll get in touch with you as soon as possible. I look forward to talking with you.
                    <br />
                    <br />
                  </p>
                  <form>
                    <FormControl className={classes.margin} fullWidth margin="normal">
                      <InputLabel
                        htmlFor="custom-css-standard-input"
                      >
                        Your Name
                      </InputLabel>
                      <Input
                        name="user"
                        id="custom-css-standard-input"
                        classes={{
                          underline: classes.cssUnderline
                        }}
                        value={this.state.user}
                        onChange={e => this.change(e)}
                      />
                    </FormControl>
                    <FormControl className={classes.margin} fullWidth margin="normal">
                      <InputLabel htmlFor="custom-css-standard-input">
                        Email Address
                      </InputLabel>
                      <Input
                        name="email"
                        id="custom-css-standard-input"
                        classes={{
                          underline: classes.cssUnderline
                        }}
                        onChange={e => this.change(e)}
                      />
                    </FormControl>
                    <FormControl className={classes.margin} fullWidth margin="normal">
                      <InputLabel
                        htmlFor="custom-css-standard-input"
                      >
                        Company
                      </InputLabel>
                      <Input
                        name="company"
                        id="custom-css-standard-input"
                        classes={{
                          underline: classes.cssUnderline
                        }}
                        onChange={e => this.change(e)}
                      />
                    </FormControl>
                    <FormControl className={classes.margin} fullWidth margin="normal" multiline="true">
                      <InputLabel
                        htmlFor="custom-css-standard-input"
                        classes={{
                          root: classes.cssLabel
                        }}
                      >
                        Your Message
                      </InputLabel>
                      <Input
                        name="message"
                        multiline
                        rows="4"
                        id="custom-css-standard-input"
                        classes={{
                          underline: classes.cssUnderline
                        }}
                        onChange={e => this.change(e)}
                      />
                    </FormControl>
                    <br /><br />
                    <div className={classes.textCenter}>
                      <Button 
                        color="primary" 
                        round
                        onClick={() => this.onSubmit()}
                      >
                        Contact me
                      </Button>
                    </div>
                  </form>
                </GridItem>
                <GridItem md={4} sm={4} className={classes.mlAuto}>
                  <InfoArea
                    className={classes.info}
                    title="Find me at"
                    description={
                      <p>
                        2131 William Barton Dr, <br /> Austin, TX{" "}
                        <br /> 78746
                      </p>
                    }
                    icon={PinDrop}
                    iconColor="primary"
                  />
                  <InfoArea
                    className={classes.info}
                    title="Give me a ring"
                    description={
                      <p>
                        Mark Mayfield <br /> +1 512 850 3002 <br /> Mon - Fri,
                        8:00-22:00
                      </p>
                    }
                    icon={Phone}
                    iconColor="primary"
                  />
                </GridItem>
              </GridContainer>
            </div>
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
                <a href="https://www.linkedin.com/in/mark-mayfield-88051b147/">Mark</a> for your viewing pleasure.
              </div>
            </div>
          }
        />
      </div>
    );
  }
}

ContactUsPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(contactUsStyle)(ContactUsPage);
