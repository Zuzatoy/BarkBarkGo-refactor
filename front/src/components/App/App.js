import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import { Recepie } from '../Recepie';
import { Chuck } from '../Chuck';
import { Advice } from '../Advice';
import { News } from '../News';
import { ApiPlay } from '../ApiPlay'
import * as api from '../../api'

class App extends PureComponent {
  state = {
    recepie: '',
    ingregients: [],
    url: '',
    refresh: '',
    goodLisaImageKey: '',
    rssItems: []
  }

  routes = [
    {
      path: "/myfriends",
      exact: true,
      sidebar: () => <div className='pageFontSize'>Lisa, be nice ^___^</div>,
      main: () => (
        <Advice
          imageKey={this.state.goodLisaImageKey}
          onButtonClick={this.updateGoodLisaImage}
        />
      )
    },
    {
      path: "/myinfo",
      sidebar: () => <div className='pageFontSize'>Some new for today from Meduza.io</div>,
      main: () => (
        <News
          rssItems={this.state.rssItems} // что бы передать дальше стейт мы должны обращаться через стейт
          getRSSdata={this.getRSSdata} // свойства класса обращаются через просто зис
        />
      )
    },
    {
      path: "/myapi",
      sidebar: () => <div className='pageFontSize'>API play</div>,
      main: () => (
        <ApiPlay
          // handleChange={this.handleChange}
          // handleClick={this.handleClick}
        // name={this.state.name}
        // email={this.state.email}
        // password={this.state.password}
        // country={this.state.country}
        />
      )

    },
    {
      path: "/shoelaces",
      sidebar: () => <div className='pageFontSize'>Chuck is cool, be like Chuck</div>,
      main: () => (
        <Chuck
          url={this.state.url}
          getJoke={this.getJoke}
        />
      )
    },
    {
      path: "/mymusiclist",
      sidebar: () => <div>Well now lets find what we have for dinnertonight</div>,
      main: () => {
        const { ingregients, recepie } = this.state;

        return (
          <Recepie
            ingregients={ingregients}
            recepie={recepie}
            getIngregients={this.getIngregients}
            handleInputChange={this.handleInputChange}
          />
        )
      }
    }
  ]

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  // handleClick = (e) => {
  //   api.addUser(this.state)
  //     .then(this.props.updateUserList)
  // }

  // {
  //   name: 'Test',
  //   email: 'test@test.tes',
  //   password: '',
  //   country: 'Test',
  // }
  // registerUser = (userData) => (
  //   api.addUser(userData)
  //     .then((response) => console.log(response))
  // )

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  getJoke = () => {
    api.getRandomJoke()
      .then((data) => (
        this.setState(() => ({
          url: data.value
        })))
      )
  }

  updateGoodLisaImage = () => {
    const randomKey = Math.random().toString(36).substring(7);

    this.setState(() => ({
      goodLisaImageKey: randomKey,
    }))
  }

  getRSSdata = () => {
    api.getRSS()
      .then((data) => (
        this.setState(() => ({
          rssItems: data.items,
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
    return (
      <Router className="App">
        <div className='mainDiv'>
          <div className='leftCorner'>
            <ul className='support'>
              <li>
                <Link to="/myfriends">Lifehacks</Link>
              </li>
              <li>
                <Link to="/myinfo">News</Link>
              </li>
              <li>
                <Link to="/shoelaces">Chuck Norris</Link>
              </li>
              <li>
                <Link to="/mymusiclist">Recipes</Link>
              </li>
              <li>
                <Link to="/myapi">Some play with ext API</Link>
              </li>
            </ul>

            {this.routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.sidebar}
              />
            ))}
          </div>
          <div className='suppMap'>
            {this.routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.main}
              />
            ))}
          </div>
        </div>
      </Router>
    )
  }
}
export default App;
