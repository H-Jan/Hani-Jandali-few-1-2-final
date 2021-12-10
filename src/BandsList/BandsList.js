import Bands from '../Bands/Bands.js';
import data from '../metal.json';
import './BandsList.css';

//Challenge 5 Completed

function BandsList () {

    const allbands = data.map((obj) => {
        return(
            <Bands
                key={obj.band_name}
                band_name={obj.band_name}
                formed={obj.formed}
                origin={obj.origin}
                fans={obj.fans}
                split={obj.split}
            />
        )
    })
    return(
        <div className="BandsList">
            { allbands }
        </div>
    )
}

export default BandsList