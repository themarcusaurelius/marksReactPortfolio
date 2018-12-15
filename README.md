# [Mark's React Portoflio](https://marksreactportfolio.herokuapp.com/) 


 ![version](https://img.shields.io/badge/version-1.2.0-blue.svg)  [![GitHub issues open](https://img.shields.io/github/issues/creativetimofficial/ct-material-kit-pro-react.svg?maxAge=2592000)](https://github.com/creativetimofficial/ct-material-kit-pro-react/issues?q=is%3Aopen+is%3Aissue) [![GitHub issues closed](https://img.shields.io/github/issues-closed-raw/creativetimofficial/ct-material-kit-pro-react.svg?maxAge=2592000)](https://github.com/creativetimofficial/ct-material-kit-pro-react/issues?q=is%3Aissue+is%3Aclosed) [![Join the chat at https://gitter.im/NIT-dgp/General](https://badges.gitter.im/NIT-dgp/General.svg)](https://gitter.im/creative-tim-general/Lobby) [![Chat](https://img.shields.io/badge/chat-on%20discord-7289da.svg)](https://discord.gg/E4aHAQy)

![Product Presentation Image](https://s3.amazonaws.com/creativetim_bucket/products/89/original/opt_mkp_react_thumbnail.jpg)

**[Material Kit PRO React](https://demos.creative-tim.com/material-kit-pro-react/#/components)** is a beautiful resource built for Material Design. It was made over the powerful Material-UI. We used and have redesigned all components to make it look flat, minimalist and easy to use. We are proud of this new Material-UI skin and the possibilities for customisation.

Using it is very simple and it will enable you to refresh you classic looking application. To get the desired effect you will also need to integrate ReactJS plugins that take a little bit more effort. In the end the result will be worth it.

**[Material Kit PRO React](https://demos.creative-tim.com/material-kit-pro-react/#/components)** uses a framework built by our friend Olivier and his team - [Material-UI](https://material-ui.com/) and was created starting with [create-react-app](https://github.com/facebook/create-react-app), who did an amazing job creating the backbone for the material effects, animations, ripples and transitions. Big thanks to his team for the effort and forward thinking they put into it.


## Table of Contents


* [Demo](#demo)
* [Quick Start](#quick-start)
* [Documentation](#documentation)
* [File Structure](#file-structure)
* [Browser Support](#browser-support)
* [Resources](#resources)
* [Reporting Issues](#reporting-issues)
* [Technical Support or Questions](#technical-support-or-questions)
* [Licensing](#licensing)
* [Useful Links](#useful-links)




## Demo

- [Landing page](https://demos.creative-tim.com/material-kit-pro-react/#/landing-page)
- [Profile page](https://demos.creative-tim.com/material-kit-pro-react/#/profile-page)
- [Contact page](https://demos.creative-tim.com/material-kit-pro-react/#/components)


## Documentation
The documentation for the Material Kit PRO React is hosted at [website](https://demos.creative-tim.com/material-kit-pro-react/#/documentation/tutorial).


## File Structure
Within this repository you'll find the following directories and files:

```
React Portfolio
.
├── CHANGELOG.md
├── README.md
├── package.json
├── .env
├── public
│   ├── mushroom.ico
│   ├── index.html
│   └── manifest.json
└── src
    ├── assets
    │   ├── img
    │   │   └── faces
    │   ├── jss
    │   │   ├── material-kit-pro-react
    │   │   │   ├── components
    │   │   │   └── views
    │   │   │       ├── contactUsStyle
    │   │   │       ├── landingPageStyle
    │   │   │       └── profilePageStyle
    │   │   └── material-kit-pro-react.jsx
    │   └── scss
    │       ├── core
    │       │   ├── mixins
    │       │   └── variables
    │       ├── plugins
    │       └── material-kit-pro-react.scss
    ├── components
    │   ├── Accordion
    │   │   └── Accordion.jsx
    │   ├── Badge
    │   │   └── Badge.jsx
    │   ├── Card
    │   │   ├── Card.jsx
    │   │   ├── CardAvatar.jsx
    │   │   ├── CardBody.jsx
    │   │   ├── CardFooter.jsx
    │   │   └── CardHeader.jsx
    │   ├── Clearfix
    │   │   └── Clearfix.jsx
    │   ├── CustomButtons
    │   │   └── Button.jsx
    │   ├── CustomDropdown
    │   │   └── CustomDropdown.jsx
    │   ├── CustomFileInput
    │   │   └── CustomFileInput.jsx
    │   ├── CustomInput
    │   │   └── CustomInput.jsx
    │   ├── CustomLinearProgress
    │   │   └── CustomLinearProgress.jsx
    │   ├── CustomTabs
    │   │   └── CustomTabs.jsx
    │   ├── CustomUpload
    │   │   └── ImageUpload.jsx
    │   ├── Footer
    │   │   └── Footer.jsx
    │   ├── Grid
    │   │   ├── GridContainer.jsx
    │   │   └── GridItem.jsx
    │   ├── Header
    │   │   ├── Header.jsx
    │   │   └── HeaderLinks.jsx
    │   ├── InfoArea
    │   │   └── InfoArea.jsx
    │   ├── Instruction
    │   │   └── Instruction.jsx
    │   ├── Media
    │   │   └── Media.jsx
    │   ├── NavPills
    │   │   └── NavPills.jsx
    │   ├── Pagination
    │   │   └── Pagination.jsx
    │   ├── Parallax
    │   │   └── Parallax.jsx
    │   ├── Snackbar
    │   │   └── SnackbarContent.jsx
    │   ├── Table
    │   │   └── Table.jsx
    │   └── Typography
    │       ├── Danger.jsx
    │       ├── Info.jsx
    │       ├── Muted.jsx
    │       ├── Primary.jsx
    │       ├── Quote.jsx
    │       ├── Rose.jsx
    │       ├── Small.jsx
    │       ├── Success.jsx
    │       └── Warning.jsx
    ├── index.js
    ├── logo.svg
    ├── routes
    │   └── index.jsx
    └── views
        ├── ContactUsPage
        │   └── ContactUsPage.jsx
        ├── LandingPage
        │   └── LandingPage.jsx
        └── ProfilePage
            └── ProfilePage.jsx
       
```


## Browser Support


<img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/chrome.png" width="64" height="64"> <img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/firefox.png" width="64" height="64"> <img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/edge.png" width="64" height="64"> <img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/safari.png" width="64" height="64"> <img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/opera.png" width="64" height="64">


## Resources

+ [Material Dashboard Pro React](https://demos.creative-tim.com/material-dashboard-pro-react/#/dashboard)




##### Social Media


Facebook: <https://www.facebook.com/profile.php?id=29616235>

Linkedin: 

Instagram: <https://www.instagram.com/CreativeTimOfficial>
