import React from 'react'
import './styles.css'
import { Button } from 'semantic-ui-react'


export class Recepie extends React.Component {


    render() {
        const { ingregients, getIngregients, recepie, handleInputChange } = this.props;

        return (
            <div>
                <input name="recepie" type="text" value={recepie} onChange={handleInputChange} />
                <Button onClick={getIngregients}>See what we have</Button>
                {ingregients.map(ingregient => (
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