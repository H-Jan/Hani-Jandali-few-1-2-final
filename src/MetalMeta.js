import data from './metal.json'
import './MetalMeta.css'
//Challenge 3 Completed Here
const number = data.map((obj) => {
    return <h1>{obj.ID}</h1>
})
const total = number.length

function MetalMeta() {
    return(
        <div className="MetalMeta">
            <h3> Metal Bands </h3>
            <h5> BANDS: {total} </h5> 
        </div>
    )
}

export default MetalMeta