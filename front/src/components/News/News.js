import React from 'react';
import './styles.css';
import { Button } from 'semantic-ui-react';

export class News extends React.Component {
    
    componentDidMount() {
        this.props.getRSSdata()
    };

    render() {

        const { rssItems, getRSSdata } = this.props;

        return (
        <div>
                <h2>News for today!(here should be todays date but well maybe later)</h2>
                <Button onClick={getRSSdata}>Refresh</Button>
                {rssItems.map(({ title, description, url }) => (
                    <div key={title}>
                        <h3>{title}</h3>
                        <p>{description}</p>
                        <a href={url} target="_blank">Read</a>
                    </div>
                ))}
            </div>
        )
    }
}