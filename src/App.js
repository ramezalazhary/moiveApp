import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchDataFromApi } from './utils/api';
import { getApiConfiguration } from './store/homeSlice';
import { Outlet } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

function App() {
  const dispatch = useDispatch();
  
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


  return (
    <div className="App">
      <Header />

      <Outlet />

      <Footer />
    </div>
  );
}

export default App;
