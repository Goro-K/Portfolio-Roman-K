import Header from '../../components/header/index';

function Home() {
  return (
    <div className="mx-auto transition duration-500">
      <Header />
      <div className=" bg-gray-300 dark:bg-slate-600 transition duration-500">
        <p className="text-black dark:text-white">Test</p>
      </div>
    </div>
  );
}
export default Home;
