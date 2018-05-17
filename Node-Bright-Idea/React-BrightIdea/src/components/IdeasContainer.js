import React, { Component } from 'react';
import axios from 'axios';
import update from 'immutability-helper';

import Idea from './Idea';
import IdeaForm from './IdeaForm';


class IdeasContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      ideas: [],
      editingIdeaId: null,
      notification: ''
    };
  }

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('http://localhost:4000/api/ideas');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  addNewIdea = () => {
    axios.post(
      'http://localhost:4000/api/ideas',
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
        this.setState({
          ideas: ideas,
          editingIdeaId: response.data.id});
      })
      .catch(error => console.log(error));
  }

  updateIdea = (idea) => {
    const ideaIndex = this.state.ideas.findIndex(x => x.id === idea.id);
    const ideas = update(this.state.ideas, {
      [ideaIndex]: { $set: idea }
    });
    this.setState({
      ideas: ideas,
      notification: 'Your idea has been saved!'});
  }

  resetNotification = () => {
    this.setState({notification: ''});
  }

  enableEditing = (id) => {
    this.setState({editingIdeaId: id},
      () => { this.title.focus() })
  }

  deleteIdea = (id) => {
    axios.delete(`http://localhost:4000/api/ideas/${id}`)
      .then(response => {
        const ideaIndex = this.state.ideas.findIndex(x => x.id === id);
        const ideas = update(this.state.ideas, { $splice: [[ideaIndex, 1]]});
        this.setState({ideas: ideas});
      })
      .catch(error => console.log(error));
  }

  render() {

    return (
      <div className="container">

        <div className="new">
          <button className="newIdeaButton"
            onClick={this.addNewIdea} >
            Ive had an idea!
          </button>

          <span className="notification">
            {this.state.notification}
          </span>
        </div>

        <div className="mapped">
          {this.state.ideas.map((idea) => {
            if(this.state.editingIdeaId === idea.id) {
              return(<IdeaForm idea={idea} key={idea.id}
                updateIdea={this.updateIdea}
                titleRef= {input => this.title = input}
                resetNotification={this.resetNotification} />);
            } else {
              return (<Idea idea={idea} key={idea.id}
                onClick={this.enableEditing}
                onDelete={this.deleteIdea}/>);
            }
          })}
        </div>

      </div>
    );
  }
}

export default IdeasContainer;
