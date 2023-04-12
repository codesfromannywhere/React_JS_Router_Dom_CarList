import carsData from '../data/cars.json'
import { useParams } from 'react-router-dom';

const CarsDetails = () => {
    const carsParams = useParams();
    console.log(carsParams);

    const detailCar = carsData.filter((elt) => {
        return elt.id.toString() === carsParams.carsid
    })

    return (
        <section>
            <h2>{detailCar[0].CarMake}</h2>
            <h2>{detailCar[0].carModel}</h2>
            <h2>{detailCar[0].CarYear}</h2>
        </section>
    );
}

export default CarsDetails;