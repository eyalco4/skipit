import React, {Component} from "react";
import axios from "axios";
import PageWrapper from "../sections/PageWrapper";
import Wait from "../components/Wait";
import Register from "../components/Register";
import Loader from "../components/Loader";
import Card from '../components/Card';
const isServer = typeof window === 'undefined';
class Index extends Component {
  constructor() {
    super();

    this.state = {
      id: null,
      lineNumber: null,
      isLoading: false,
    };
  }

  componentDidMount() {
    if (!isServer && localStorage.getItem('SkipIT')) {
      const {id, lineNumber} = JSON.parse(localStorage.getItem('SkipIT'));
      this.setState({id, lineNumber});
    }
  }

  static async getInitialProps() {
    return {
      pageProps: {},
    };
  }

  render() {
    const register = async () => {
      try {
        this.setState({isLoading: true});
        const res = await axios.get(`${window.location.href}/register`);
        const {data: {id, place}} = res;
        this.setState({id, lineNumber: place, isLoading: false});
        localStorage.setItem('SkipIT', JSON.stringify(this.state));
      } catch (e) {
        this.setState({isLoading: false});
      }
    };

    const {id, lineNumber, isLoading} = this.state;
    if (isLoading) {
      return (
        <Card>
          <Loader/>
        </Card>
      );
    }
    return (
      <>
        <PageWrapper>
          {id ? <Wait lineNumber={lineNumber}/> : <Register handler={register}/>}
        </PageWrapper>
      </>
    );
  }
}

export default Index;
