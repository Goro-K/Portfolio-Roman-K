import Header from '../../components/header/index';
import Gallery from '../../components/gallery/gallery';

function Home() {
  return (
    <div className="mx-auto bg-gray-300 dark:bg-slate-600 transition duration-500">
      <Header />
      <Gallery />
    </div>
  );
}
export default Home;
