import React from 'react'
import './styles.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

export class Main extends React.Component {
    state = {
        recepie: '',
        ingregients: [],
        goodLisaImageKey: '',
        url: '',
        refresh: '',
        rssItems: [],

    }

    handleChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value
        })
      }

    refreshSubmit = () => {
        this.setState({
            recepie: ''
          })
    }

    routes = [
        {
          path: "/myfriends",
          exact: true,
          sidebar: () => <div className='pageFontSize'>Lisa, be nice ^___^</div>,
          main: () => (
            // <Advice /> 
            <h1>Yo</h1>
          )
        },
        {
          path: "/myinfo",
          sidebar: () => <div className='pageFontSize'>Some new for today from Meduza.io</div>,
          main: () => //<News />
          <h1>Yo</h1>
        },
        {
          path: "/shoelaces",
          sidebar: () => <div className='pageFontSize'>Chuck is cool, be like Chuck</div>,
          main: () => //<Chuck />
          <h1>Yo</h1>
        },
        {
          path: "/mymusiclist",
          sidebar: () => <div>Well now lets find what we have for dinnertonight</div>,
          main: () => //<Recepie />
          <h1>Yo</h1>
        }
      ]
    
      render() {
        return (
          <Router>
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