import React from 'react'
import './styles.css'
import { Button } from 'semantic-ui-react'

export function Advice({ onButtonClick, imageKey}) {
    return (
        <div>
            <img src={`http://belikebill.azurewebsites.net/billgen-API.php?default=1&name=James&sex=m&${imageKey}`} />
            <Button onClick={onButtonClick}>Get new Good Lisa advice</Button>
        </div>
    )
}
