import React, { Component, Fragment } from 'react';
import 'tachyons';
import './App.css';
import Carddetails from './Components/Card/Carddetails';
import { robots } from './robots.js'
import RobotDetails from './Components/Card/RobotDetails';
import SearchField from './SearchField'


export default class App extends Component {
  state = {
    robots,
    robotDetails: [],
    searchField: '',
    newRobot: robots,
    show: false
  }

  router = (router) =>
    this.setState(({ robots }) => ({
      robotDetails: robots.find(robot => robot.id === router),
      show: true
    }))

  handleBackNavigation = () => {
    this.setState({
      show: false
    })
  }

  handleRobotSearch = (event) => {

    this.setState({
      searchField: event.target.value,
      // newRobot:this.state.robots.filter(robot => robot.name.toLowerCase().includes(this.state.searchField.toLowerCase()))
    })
  }

  render() {
    const { robots, show, robotDetails } = this.state;
    const searchRobots = this.state.robots.filter(robot => robot.name.toLowerCase().match(this.state.searchField.toLowerCase()));
    return (
      <div className="App tc">
        <SearchField SearchField={this.handleRobotSearch} />
        {show ? <RobotDetails robotDetails={robotDetails} back={this.handleBackNavigation} /> :
          <Fragment>
            {robots.length === 0 ? <h1>Search not Available</h1> : <Carddetails robots={searchRobots} show={this.router} />}

          </Fragment>}
      </div>
    );
  }
}

