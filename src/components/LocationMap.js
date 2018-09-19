import React from "react";
export default (props) => {
  const address = [
    props.name,
    props.address.address_1,
    props.address.address_2,
    props.address.region,
    `${props.address.locality} ${props.address.postal_code}`
  ].join(', ');
  const key = 'AIzaSyCsl3C4pA6XgLeeFxghq3UkAIMs8kUt57A';
  return <iframe
  width="600"
  height="450"
  frameBorder="0"
  style={{border:"0"}}
  src={`https://www.google.com/maps/embed/v1/place?key=${key}&q=${address}`}
  allowFullScreen={true}>
  </iframe>
}
