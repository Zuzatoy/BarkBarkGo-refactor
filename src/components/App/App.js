import React, { PureComponent } from 'react';
import { Main } from '../Main/Main';
import { getRandomJoke } from '../../api'

class App extends PureComponent {
  state = {
    recepie: '',
    ingregients: [],
    goodLisaImageKey: '',
    url: '',
    refresh: '',
    goodLisaImageKey: '',
    rssItems: [],
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  getJoke = () => {
    getRandomJoke()
      .then((data) => (
        this.setState(() => ({
          url: data.value
        })))
      )
  }

  getIngregients = () => {
    const apiKey = 'f54092bddcda7d43b61fc7889d1f439e';
    const recepie = this.state.recepie;

    fetch(`https://www.food2fork.com/api/search?key=${apiKey}&q=${recepie}`)
        .then((response) => response.json())
        .then((data) => {
            this.setState({
                ingregients: data.recipes
            })
        })
        .catch((err) => {
            console.error(err)
        })
  }

  render() {
    const { ingregients, recepie, url } = this.state;
    

    return (
      <div className="App">
        <Main
          url={url}
          getJoke={this.getJoke}
          ingregients={ingregients}
          getIngregients={this.getIngregients}
          recepie={recepie}
          handleInputChange={this.handleInputChange}
        />
      </div>
    )
  }
}
export default App;
