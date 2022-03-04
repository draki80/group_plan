import React from 'react'
import { plan } from '../plan'

function TitleComponent () {

    return (
        <div className="header" data-testid="title-component">
            <h1>{plan.name}</h1>
            <p>{plan.userCreated}</p>
      </div>
    )
}
export default TitleComponent