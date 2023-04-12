import carsData from '../data/cars.json'
import CarItem from '../components/CarItem';
console.log(carsData);

const Home = () => {
    return (
        <section className='grid'>
            {carsData.map((elt) => {
                return (
                    <CarItem
                        key={elt.id}
                        id={elt.id}
                        CarMake={elt.CarMake}
                    />
                )
            })}

        </section>);
}

export default Home;