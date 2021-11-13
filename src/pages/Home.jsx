import Anuncement from '../components/Anuncement';
import Slider from '../components/Slider';
import Navbar from '../components/Navbar';
import Products from '../components/Products';
import Categoreize from '../components/Categoreize';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <Anuncement />
      <Navbar />
      <Slider />
      <Categoreize />
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
