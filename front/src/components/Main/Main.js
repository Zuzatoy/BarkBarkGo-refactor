import React from 'react'
import './styles.css'
import { Recepie } from '../Recepie'
import { Chuck } from '../Chuck'
import { Advice } from '../Advice'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

export class Main extends React.Component {


    routes = [
        {
          path: "/myfriends",
          exact: true,
          sidebar: () => <div className='pageFontSize'>Lisa, be nice ^___^</div>,
          main: () =>  {
            const { goodLisaImageKey } = this.props
            return (
             <Advice 
             imageKey={goodLisaImageKey}
             onButtonClick={this.updateGoodLisaImage}
             /> 
           
          )
        }
        },
        {
          path: "/myinfo",
          sidebar: () => <div className='pageFontSize'>Some new for today from Meduza.io</div>,
          main: () => 
          <h1>Yo</h1>
        },
        {
            path: "/shoelaces",
            sidebar: () => <div className='pageFontSize'>Chuck is cool, be like Chuck</div>,
            main: () => {
                const { url, getJoke } = this.props;
                return (
                    <Chuck
                        url={url}
                        getJoke={getJoke}
                    />
                )
            }
        },
        {
          path: "/mymusiclist",
          sidebar: () => <div>Well now lets find what we have for dinnertonight</div>,
          main: () => {
              const { ingregients, getIngregients, recepie, handleInputChange } = this.props;
              return (
                <Recepie
                    ingregients={ingregients}
                    getIngregients={getIngregients}
                    recepie={recepie}
                    handleInputChange={handleInputChange}
                />
              )
          }
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