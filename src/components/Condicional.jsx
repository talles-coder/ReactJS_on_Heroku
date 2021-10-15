import React from 'react'

export default props => {

    return (
        <div>
            <h2>Onúmero é {props.numero}</h2>
            {props.numero % 2 == 0
                ?
                <span>Par</span>
                :
                <span>Ímpar</span>
            }
        </div>
    )
}