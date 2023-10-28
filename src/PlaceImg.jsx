export default function PlaceImg({ place, index = 0, className = null }) {

    if (!place.photos?.length) {
        return '';
    }

    if (!className) {
        className = 'object-cover';
    }

    return (
        <img className={className} src={'https://nodejs-hotelbookingapp.onrender.com/' + place.photos[index]} alt="" />
    );



}