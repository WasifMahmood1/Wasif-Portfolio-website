import "./work-card.css";
import React from "react";
import shifa1 from "../../../Assets/shifa1.jpg";
import shifa2 from "../../../Assets/shifa2.jpg";
import resturant from "../../../Assets/resturant.jpg";
import weather from "../../../Assets/weather.jpg";
import logo from "../../../Assets/logo.jpg";
import { NavLink } from "react-router-dom";
const WorkCard = (props) => {
  return (
    // <div className="work-container">
    //   <div className="project-container">
    //     {/* <div className="project-card">
    //       <img src={shifa1} alt="image1" />
    //       <h2 className="project-title">Shifa Online</h2>
    //       <div className="details">
    //         <p>
    //           Shifa Online is the medical app used for the purpose of Online
    //           appointment with doctors. This website was build up using Mern
    //           technologis including React,Redux,Node and Express.
    //         </p>
    //         <div className="details-btn">
    //           <NavLink to="url.com" className="btn">
    //             View
    //           </NavLink>
    //           <NavLink
    //             to="https://github.com/MudabbarHussain/Shifa-Online-Frontend/tree/appointment/shifa-online-frontend/src"
    //             className="btn"
    //           >
    //             Source
    //           </NavLink>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="project-card">
    //       <img src={shifa2} alt="image1" />
    //       <h2 className="project-title">Shifa Online Admin Dashboard</h2>
    //       <div className="details">
    //         <p>
    //           Shifa Online Admin Dashboard have functionality of a complete CRUD
    //           operation. On frontend doctor crud operation performs and on
    //           backend data saved in the database.
    //         </p>
    //         <div className="details-btn">
    //           <NavLink to="url.com" className="btn">
    //             View
    //           </NavLink>
    //           <NavLink
    //             to="https://github.com/MudabbarHussain/Shifa-Online-Frontend/tree/crud-dashboard"
    //             className="btn"
    //           >
    //             Source
    //           </NavLink>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="project-card">
    //       <img src={resturant} alt="image2" />
    //       <h2 className="project-title">Resto Chef</h2>
    //       <div className="details">
    //         <p>
    //           Resto Chef is an resturant webpage made up of html, css and
    //           bootstrap. It include types and food offering by resturant with
    //           the price tags and also the information about the resturant.
    //         </p>
    //         <div className="details-btn">
    //           <NavLink to="url.com" className="btn">
    //             View
    //           </NavLink>
    //           <NavLink
    //             to="https://github.com/WasifMahmood1/Html-Resturant-site"
    //             className="btn"
    //           >
    //             Source
    //           </NavLink>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="project-card">
    //       <img src={logo} alt="image5s" />
    //       <h2 className="project-title"> Company Website</h2>
    //       <div className="details">
    //         <p>
    //           Company Website is an webpage design made up of html and css. It
    //           include types and services offered by the company and also the
    //           information about the organization.
    //         </p>
    //         <div className="details-btn">
    //           <NavLink to="url.com" className="btn">
    //             View
    //           </NavLink>
    //           <NavLink
    //             to="https://github.com/WasifMahmood1/Html-Webpage"
    //             className="btn"
    //           >
    //             Source
    //           </NavLink>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="project-card">
    //       <img src={weather} alt="image3" />
    //       <h2 className="project-title">Weather Site</h2>
    //       <div className="details">
    //         <p>
    //           Its an weather Website. It was created by using Javascript and
    //           html language. By using the weather api of google, we fetch the
    //           weather as temperature in Celsius with icons of respective degree
    //           of the respected city or country.
    //         </p>
    //         <div className="details-btn">
    //           <NavLink to="url.com" className="btn">
    //             View
    //           </NavLink>
    //           <NavLink
    //             to="https://github.com/WasifMahmood1/Weather-App"
    //             className="btn"
    //           >
    //             Source
    //           </NavLink>
    //         </div>
    //       </div>
    //     </div> */}
    //     <div className="project-card">
    //       <img src={shifa1} alt="image1" />
    //       <h2 className="project-title">Shifa Online</h2>
    //       <div className="details">
    //         <p>
    //           Shifa Online is the medical app used for the purpose of Online
    //           appointment with doctors. This website was build up using Mern
    //           technologis including React,Redux,Node and Express.
    //         </p>
    //         <div className="details-btn">
    //           <NavLink to="url.com" className="btn">
    //             View
    //           </NavLink>
    //           <NavLink
    //             to="https://github.com/MudabbarHussain/Shifa-Online-Frontend/tree/appointment/shifa-online-frontend/src"
    //             className="btn"
    //           >
    //             Source
    //           </NavLink>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="project-card">
      <img src={props.imgsrc} alt="image1" />
      <h2 className="project-title">{props.title}</h2>
      <div className="details">
        <p>{props.text}</p>
        <div className="details-btn">
          <NavLink to={props.view} className="btn">
            View
          </NavLink>
          <NavLink to={props.source} className="btn">
            Source
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
