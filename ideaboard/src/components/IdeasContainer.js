import React, { Component } from 'react';
import axios from 'axios';
import update from 'immutability-helper';

import Idea from './Idea';

class IdeasContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      ideas: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3001/api/v1/ideas.json')
      .then(response => {
        console.log(response);
        this.setState({ideas: response.data});
      })
      .catch(error => console.log(error));
  }

  addNewIdea = () => {
    axios.post(
      'http://localhost:3001/api/v1/ideas',
      { idea:
        {
          title: '',
          body: ''
        }
      }
    )
      .then(response => {
        console.log(response);
        const ideas = update(this.state.ideas, {
          $splice: [[0, 0, response.data]]
        });
        this.setState({ideas: ideas});
      })
      .catch(error => console.log(error));
  }

  render() {



    return (
      <div>

        <button className="newIdeaButton"
          onClick={this.addNewIdea} >
          New Idea
        </button>

        {this.state.ideas.map((idea) => {
          return(
            <Idea idea={idea} key={idea.id} />);
        })}

      </div>
    );
  }
}

export default IdeasContainer;
