import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import MainMenu from './Components/Shared/MainMenu';
import Feed from './Components/Feed/Feed';
import Shop from './Components/Shop/Shop';
import Upcoming from './Components/Upcoming/Upcoming';
import JsonProvider from './Components/Shared/JsonProvider';

class App extends Component {
  provider = null;
  state = { spacing: '16' };

  componentDidMount = () => {
    this.provider = new JsonProvider();
    var json = this.provider.getJson()
    this.setState({
      app: json.app
    })
  }

  refreshState = () => {
    var json = this.provider.getJson()
    this.setState({
      app: json.app
    })
  }

  toggleIsOnboarded = () => {
    this.provider.toggleIsOnboarded();
    this.refreshState();
  }

  FeedMethods = {
    toggleIsOnboarded: this.toggleIsOnboarded
  }


  render() {

    if(this.state.app.isOnboarded){
      return (<h1>You need to onboard first!</h1>);
    }
    return (
      <Router>
        <div className="App">
          <MainMenu />

          <div>
            <Route exact
              path="/"
              render={(props) => <Feed {...props} app={this.state.app} methods={this.FeedMethods} />} />
            <Route exact path="/in-stock" component={Shop} />
            <Route exact path="/upcoming" component={Upcoming} />
          </div>
          {/* /.routes */}
        </div>
        {/* /.App */}
      </Router>
    );
  }
}

export default App;
