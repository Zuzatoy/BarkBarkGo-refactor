import React from 'react'
import { Button } from 'semantic-ui-react'
import * as api from '../../api'
import {getAllUsers} from '../../api'



export class ApiPlay extends React.Component {

    state = {
        name: '',
        email: '',
        password: '',
        country: ''
      }
    
      handleChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value
        })
      }
    
      handleClick = (e) => {
        api.addUser(this.state)
          .then(this.props.updateUserList)
      }
    
      render() {
        return (
          <div className='container'>
            <form method="post" action="http://localhost:3000/api/register">
              <p>Name: <input name='name' onChange={this.handleChange} /></p>
              <p>Email: <input name='email' onChange={this.handleChange} /></p>
              <p>Passwod: <input name='password' onChange={this.handleChange} /></p>
              <p>Country: <input name='country' onChange={this.handleChange} /></p>
            </form>
            <Button onClick={this.handleClick}>Add user</Button>
          </div>
    
        )
    
      }
}

// () => this.props.registerUser(this.state)