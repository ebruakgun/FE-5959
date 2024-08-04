
// eslint-disable-next-line no-unused-vars
import React from "react";
import OurCard from "../components/Cards";

const featuresArray =[
    {
        id: 1,
        icon:<i className="icon bi-envelope"></i>,
        title:"Fresh new layout",
        description:"With Bootstrap 5, we've created a fresh new layout for this template!",
        
    },
    {
        id: 2,
        icon:<i className="icon bi-envelope"></i>,
        title:"Free to download",
        description:"As always, Start Bootstrap has a powerful collection of free templates.",
    },
    {
        id: 3,
        icon:<i className="icon bi-envelope"></i>,
        title:"Jumbotron hero header",
        description:"The heroic part of this template is the jumbotron hero header!",
    },
    {
        id: 4,
        icon:<i className="icon bi-envelope"></i>,
        title:"Feature boxes",
        description:"We've created some custom feature boxes using Bootstrap icons!",
    },
    {
        id: 5,
        icon:<i className="icon bi-envelope"></i>,
        title:"Simple clean code",
        description:"We keep our dependencies up to date and squash bugs as they come!",
    },
    {
        id: 6,
        icon:<i className="icon bi-envelope"></i>,
        title:"A name you trust",
        description:"Start Bootstrap has been the leader in free Bootstrap templates since 2013!",
    },
]

function OurFeatures() {
  return (<>
  <div className="container">
  <div className="row">
    {featuresArray.map((feature)=>(
     <OurCard key={feature.id} icon={feature.icon} title={feature.title} description={feature.description}/>
     ))}
     </div>
     </div>
   </>);
}

export default OurFeatures;