import Like from '../LikeButton/Like.js';

function Bands(props) {
    const { band_name, formed, origin, fans, split } = props
    if (split!=='-') {
        return (
        <div>
            <p> {band_name} </p>
            <p> Formed: {formed} </p>
            <p> {origin}</p>
            <p> Fans: {fans} </p>
            <p> Year Split: {split} </p>
        </div>
        )
    } else {
        return(
            <div className="BandsDisplay">
            <p> {band_name} </p>
            <p> Formed: {formed} </p>
            <p> {origin}</p>
            <p> Fans: {fans} </p>
            <Like />
        </div>
        )
    }
}

export default Bands