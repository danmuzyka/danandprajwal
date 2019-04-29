import React from "react"

const RSVP = () => {
  return (
    <iframe id="RSVPifyIFrame" style={{width: '100%', border: 'none', overflow: 'hidden', height: '1175px'}}
            onLoad={window.parent.scrollTo(0,0)} title="RSVP Form"
            src="http://danandprajwal.app.rsvpify.com/?embed=1&amp;js=1" frameBorder="0" scrolling="no" />
  );
};

export default RSVP;
