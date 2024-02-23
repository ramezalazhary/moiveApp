import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchDataFromApi } from './utils/api';
import { getApiConfiguration } from './store/homeSlice';
import { Outlet } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

function App() {
  const dispatch = useDispatch();
  const { urlRes } = useSelector(state => state.home)


  const getConfigurApiData = () => {

    fetchDataFromApi("/configuration").then((res) => {
      const url = {
        backdrop: res?.images.secure_base_url + "original",
        poster: res?.images.secure_base_url + "original",
        profile: res?.images.secure_base_url + "original",
      };
      dispatch(getApiConfiguration(url))
    })

  }

  useEffect(() => {


    getConfigurApiData()


  }, [])


  // useEffect(() => {
  //   fetchApiConfig();
  //   genresCall();
  // }, []);

  // const fetchApiConfig = () => {
  //   fetchDataFromApi("/configuration").then((res) => {
  //     console.log(res);

  //     const url = {
  //       backdrop: res.images.secure_base_url + "original",
  //       poster: res.images.secure_base_url + "original",
  //       profile: res.images.secure_base_url + "original",
  //     };

  //     dispatch(getApiConfiguration(url));
  //   });
  // };

  // const genresCall = async () => {
  //   let promises = [];
  //   let endPoints = ["tv", "movie"];
  //   let allGenres = {};

  //   endPoints.forEach((url) => {
  //     promises.push(fetchDataFromApi(`/genre/${url}/list`));
  //   });

  //   const data = await Promise.all(promises);
  //   console.log(data);
  //   data.map(({ genres }) => {
  //     return genres.map((item) => (allGenres[item.id] = item));
  //   });

  //   dispatch(getGenres(allGenres));
  // };


  return (
    <div className="App">
      <Header />

      <Outlet />

      <Footer />
    </div>
  );
}

export default App;
