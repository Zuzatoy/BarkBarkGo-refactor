import React from 'react'
import './styles.css'
import { Button } from 'semantic-ui-react'


export class Recepie extends React.Component {
    state = {
        recepie: '',
        ingregients: [],
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
            <div>
                <input name="recepie" type="text" value={this.state.recepie} onChange={this.handleChange} />
                <Button onClick={this.getIngregients}>See what we have</Button>
                <Button onClick={this.refreshSubmit}>Refresh</Button>
                {this.state.ingregients.map(ingregient => (
                    <div key={ingregient.f2f_url}>
                        <div className="col-6">
                            <a href={ingregient.f2f_url} target="_blank">{ingregient.title}</a>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}