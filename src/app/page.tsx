import Summary from './components/Summary';
import Payment from './components/Payment';
import Hero from './components/Hero';
import Nav from './components/Nav';
const Home: React.FC = () => (
  <>
    <div className="w-full overflow-hidden">
      <Nav />
      <Hero />
      <Summary />
      <Payment />
    </div>
  </>
);

export default Home;
