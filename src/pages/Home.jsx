import Anuncement from '../components/Anuncement';
import Slider from '../components/Slider';
import Navbar from '../components/Navbar';
import Products from '../components/Products';
import Categoreize from '../components/Categoreize';

const Home = () => {
  return (
    <div>
      <Anuncement />
      <Navbar />
      <Slider />
      <Categoreize />
      <Products />
    </div>
  );
};

export default Home;
