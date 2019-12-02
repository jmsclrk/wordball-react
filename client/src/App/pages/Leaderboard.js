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
    fetch('/api/getLeaderboard')
    .then(res => res.json())
    .then(list => this.setState({ list }))
  }

  render() {
    const { list } = this.state;

    return (
      <div className="App">
        <h1>Leaderboard</h1>
        {list.length ? (
          <div>
            {list.map((item) => {
              return(
                <div>
                  {item}
                </div>
              );
            })}
          </div>
        ) : (
          <div>
            <h2>No Scores Found</h2>
          </div>
        )
      }
      </div>
    );
  }
}

export default Leaderboard;
