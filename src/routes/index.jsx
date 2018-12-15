
import ContactUsPage from "views/ContactUsPage/ContactUsPage.jsx";
import LandingPage from "views/LandingPage/LandingPage.jsx";
import ProfilePage from "views/ProfilePage/ProfilePage.jsx";

var indexRoutes = [
  
  { path: "/contact-us", name: "ContactUsPage", component: ContactUsPage },
  { path: "/profile-page", name: "ProfilePage", component: ProfilePage },
  { path: "/", name: "LandingPage", component: LandingPage }
   
];

export default indexRoutes;
