import React, {Component} from "react";
import axios from "axios";
import PageWrapper from "../sections/PageWrapper";
import LineView from "../components/LineView";

class Index extends Component {
  constructor() {
    super();

    this.state = {
      current: null,
      line: [],
    };
  }


  static async getInitialProps() {
    return {
      pageProps: {},
    };
  }

  render() {
    const serveNextInLine = async () => {
      try {
        const res = await axios.get(`${window.location.href}/serveNextInLine`);
        const {data: {current, line}} = res;
        this.setState({current, line});
      } catch (e) {
        console.info(e);
      }
    };

    const {current} = this.state;
    return (
      <>
        <PageWrapper>
          <LineView lineNumber={current} serveNextInLine={serveNextInLine}/>
        </PageWrapper>
      </>
    );
  }
}

export default Index;
