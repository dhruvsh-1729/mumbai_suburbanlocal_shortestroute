// App.js
import React, { useEffect, useState } from 'react';
import RailwayMap from './components/RailwayMap';
import 'bootstrap/dist/css/bootstrap.css'
import { Button, Form } from 'react-bootstrap';
import AsyncSelect from 'react-select/async';
import axios from 'axios'

const App = () => {

  const [src, setSrc] = useState("")
  const [dest, setDest] = useState("")
  const [stations, setStations] = useState([])
  const [loading, setLoading] = useState(false)
  const [disabled, setDisabled] = useState(false)
  const [shortestPath, setShortestPath] = useState([])

  useEffect(() => {
    if (src.length > 0 && dest.length > 0) {
      setDisabled(false)
    }
    else {
      setDisabled(true)
    }
  }, [src, dest])

  useEffect(() => {

    const getStations = async () => {
      try {
        setLoading(true);
        const res = await axios.get('http://localhost:4000/api/stations');

        if (res.status === 201) {
          setStations(res.data);
        }
      }
      catch (err) {
        console.log(err);
      }
      finally {
        setLoading(false)
      }
    }

    getStations();
  }, [])

  const handleSrcChange = (e) => {
    setSrc(e.value)
  }

  const handleDestChange = (e) => {
    setDest(e.value)
  }

  const callApi = async (inputValue) => {
    const res = await axios.post('http://localhost:4000/api/station', { inputValue }).catch(err => console.log(err));

    if (res.status === 200) {
      return res.data.result;
    }
    else {
      return [];
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post('http://localhost:4000/api/shortestpath', { src, dest })

      if (response.status === 200) {
        setShortestPath(response.data.message)
        setLoading(false)
      }
    }
    catch (err) {
      console.log(err);
    }
    finally{
      setLoading(false)
    }


  }
  return (
    <div className='flex flex-row'>
      <div>
        <h1 className='text-center mx-4 my-3'>Mumbai Suburban Railway Network</h1>
        <Form className='flex flex-row justify-center align-center px-4'>
          <div className='col-lg-6 flex flex-row m-4'>

            <label className='col-lg-3'>Select Source Station</label>
            <AsyncSelect className='m-2'
              cacheOptions
              defaultOptions={false}
              loadOptions={callApi}
              onChange={handleSrcChange}
            />

            <label className='col-lg-3'>Select Destination Station</label>
            <AsyncSelect className='m-2'
              cacheOptions
              defaultOptions={false}
              loadOptions={callApi}
              onChange={handleDestChange}
            />

            <Button className='m-4' disabled={disabled} onClick={(e) => handleSubmit(e)}>{!loading ? "Search Shortest Route" : "Finding..."}</Button>
          </div>

        </Form>
        <RailwayMap stations={stations} shortestPath={shortestPath}/>

      </div>

    </div>
  );
};

export default App;
