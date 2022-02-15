import React, {Fragment} from "react";

import App from "next/app";

class skipITApp extends App {
  render() {
    const {Component: Page, pageProps} = this.props;

    return (
      <>
        <style jsx global>{`        
          html body {
            width: 100vw;
            font-family: Helvetica, Arial; 
          }`
        }</style>
        <Page {...pageProps}/>
      </>
    );
  }
}

export default skipITApp;
