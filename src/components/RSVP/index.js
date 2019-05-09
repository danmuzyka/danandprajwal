import React from "react"
import ReactIframeResizer from "react-iframe-resizer-super"

const iframeResizerOptions = {
  autoResize: true,
  checkOrigin: false,
  heightCalculationMethod: 'max',
  enablePublicMethods: true
};

const RSVP = () => {
  return (
    <ReactIframeResizer id="RSVPifyIFrame" iframeResizerOptions={iframeResizerOptions}
            title="RSVP Form" style={{width: '100%', border: 'none', overflow: 'hidden', height: '1175px'}}
            src="https://danandprajwal.app.rsvpify.com/?embed=1&js=1" frameBorder={0} scrolling="no" />
  );
};

export default RSVP;
