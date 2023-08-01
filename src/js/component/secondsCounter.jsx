import React from 'react';

const SecondsCounter = (props) => {

    const segundo = (tiempo, pos) => {
        let segundos = tiempo
        let longitud = String(segundos).length
        let ultimaPosicion = String(segundos)[longitud - pos]
        return ultimaPosicion
    }
    return (
        <>
            <div className='container'>
                <div className='row mx-9 p-3 mt-3'>
                    <div className='col rounded text-white text-center display-5 me-2 border-start border-end'><i class="fa-regular fa-clock"></i></div>
                    <div className='col rounded text-white text-center display-5 me-2 border-start border-end'><h1>{segundo(props.seconds, 6) ? segundo(props.seconds, 6) : "0"}</h1></div>
                    <div className='col rounded text-white text-center display-5 me-2 border-start border-end'><h1>{segundo(props.seconds, 5) ? segundo(props.seconds, 5) : "0"}</h1></div>
                    <div className='col rounded text-white text-center display-5 me-2 border-start border-end'><h1>{segundo(props.seconds, 4) ? segundo(props.seconds, 4) : "0"}</h1></div>
                    <div className='col rounded text-white text-center display-5 me-2 border-start border-end'><h1>{segundo(props.seconds, 3) ? segundo(props.seconds, 3) : "0"}</h1></div>
                    <div className='col rounded text-white text-center display-5 me-2 border-start border-end'><h1>{segundo(props.seconds, 2) ? segundo(props.seconds, 2) : "0"}</h1></div>
                    <div className='col rounded text-white text-center display-5 me-2 border-start border-end'><h1>{segundo(props.seconds, 1) ? segundo(props.seconds, 1) : "0"}</h1></div>
                </div>
            </div>
        </>
    )
}

export default SecondsCounter;