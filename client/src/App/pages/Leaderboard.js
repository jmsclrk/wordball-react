import React, { Component } from 'react';

class Leaderboard extends Component {
  // Initialize the state
  constructor(props){
    super(props);
    this.state = {
      list: []
    }
  }

  componentDidMount() {
    this.getList();
  }

  getList = () => {
    console.log('requested')
    fetch('/api/getLeaderboard')
    .then(res => res.json())
    .then(list => this.setState({ list }))
  }

  render() {
    const { list } = this.state;

    return (
      <ul>
      {list.map(function(item, index){
        return <li key={ index }>{item.name+" -----smartscore----- "+item.smartscore+" -----skillscore----- "+item.skillscore}</li>;
      })}
    </ul>
  )}
}

export default Leaderboard;
