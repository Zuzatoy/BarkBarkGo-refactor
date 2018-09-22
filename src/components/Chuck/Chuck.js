import React from 'react';
import './styles.css';
import { Image, Button } from 'semantic-ui-react';


export class Chuck extends React.Component {
    componentDidMount() {
        this.props.getJoke();
    }

    render() {
        const { url, getJoke } = this.props;

        return (
            <div>
                <h1>Here is some facts about Chuck</h1>
                {url && <p className="joke">{url} </p>}
                <Button onClick={getJoke}>New joke?</Button>
                <Image src='images/ChuckN.jpg' size="big" />
            </div>

        )
    }

}