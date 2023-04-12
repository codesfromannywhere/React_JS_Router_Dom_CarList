import { Link } from 'react-router-dom';

const CarItem = (props) => {
    console.log(props);
    return (
        <div className="grid-item">
            <h3>{props.CarMake}</h3>
            <Link to={`/cars/${props.id}`}>Show More</Link>
        </div>
    );
}

export default CarItem;