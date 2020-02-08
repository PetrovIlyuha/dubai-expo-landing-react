import React from "react";

export default function Location() {
  return (
    <div className="location_wrapper">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3617.1516498588803!2d55.14856035811527!3d24.960954554236977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f73e7a7768bc9%3A0xc63e8388df416fb0!2sAl%20Wasl%20Plaza!5e0!3m2!1sru!2sru!4v1581166192365!5m2!1sru!2sru"
        width="100%"
        height="500px"
        frameBorder="0"
        allowFullScreen="true"
        title="expo_location"
      ></iframe>
      <div className="location_tag">
        <div>Location</div>
      </div>
    </div>
  );
}
