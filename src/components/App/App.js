import React, { PureComponent } from 'react';
import { Main } from '../Main/Main';

class App extends PureComponent {
  state = {
    recepie: '',
    ingregients: [],
    goodLisaImageKey: '',
  }

  handleInputChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    })
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
    const { ingregients, recepie } = this.state;

    return (
      <div className="App">
        <Main
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
