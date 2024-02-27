import React,{useState, useEffect} from 'react';
import './App.css';
import Spinner from 'react-bootstrap/Spinner';
import MainComponent from "./components/mainComponent/mainComponent";
import NavBar from "./components/navBar/navBar";
import fetchAreas from "./API/fetchAreas.js";
import fetchStops from "./API/fetchStops.js";
import fetchBuses from "./API/fetchBuses.js";
import fetchTimeline from "./API/fetchTimeline.js";
import fetchNearestStop from "./API/fetchNearestStop.js";

function App() {

  const [areaList, setAreaList] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [areaSelected, setAreaSelected] = useState(null)
  const [stopList, setStopList] = useState([])
  const [stopSelected, setStopSelected] = useState(null)
  const [stopBtnLoading, setStopBtnLoading] = useState(false)
  const [busesList, setBusesList] = useState([])
  const [showBuses, setShowBuses] = useState(false)
  const [busBtnLoading, setBusBtnLoading] = useState(false)
  const [timelineList, setTimelineList] = useState([])
  const [userLatitude, setUserLatitude] = useState("")
  const [userLongitude, setUserLongitude] = useState("")




  const clearStates = () =>{
    setStopList([])
    setStopSelected(null)
    setBusesList([])
    setShowBuses(false)
    setTimelineList([])
  }

  const clearAll =() =>{
    clearStates()
    setAreaSelected(null)
  }

  const clearAreaSelected = () =>{
    setAreaSelected(null)
  }

  const handleFetchStops = async () =>{
    setStopBtnLoading(true)
    await clearStates()
    let response = await fetchStops(areaSelected)
    if(response.msg==="SUCCESS"){
      setStopList(response.data.formatedData)
    }
    setStopBtnLoading(false)
  }

  const handleFetchBuses = async () =>{
    setBusBtnLoading(true)
    let response = await fetchBuses(stopSelected)
    if(response.msg==="SUCCESS"){
      setBusesList(response.data.data)
      setShowBuses(true)
    }
    setBusBtnLoading(false)
  }

  const handleFetchTimeline = async (routeID,stopID) =>{
    let response = await fetchTimeline(routeID,stopID)
    if(response.msg==="SUCCESS"){
      setTimelineList(response.data.data)
    }
  }

  const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
      } else {
        alert("Geolocation is not supported by this browser.")
      }
    }

  const showPosition = (position) => {
    setUserLatitude(position.coords.latitude)
    setUserLongitude(position.coords.longitude)
    handleNearestStop(position.coords.latitude, position.coords.longitude)
  }


  const handleNearestStop = async (lat,lon) =>{
    let response = await fetchNearestStop(lat,lon)
    if(response.msg==="SUCCESS"){
      // For some stops stop_area is empty string, so here we check if our nearest stop has stop_area
      // If it has it, then we will call fetchStops by Area function to fetch all stops from that area
      // If it hasnt it then we will display only the stop that returned to us..

      let stop={"label":response.data.data[0].stop_name,
                   "value":response.data.data[0].stop_id}

      if(response.data.data[0].stop_area.length > 0){
        let area={"label":response.data.data[0].stop_area,
                     "value":response.data.data[0].stop_area};

        setAreaSelected(area)

        // handleFetchStops function
        setStopBtnLoading(true)
        await clearStates()
        let response2 = await fetchStops(area)
        if(response2.msg==="SUCCESS"){
          setStopList(response2.data.formatedData)
        }
        setStopSelected(stop)
        setStopBtnLoading(false)
      }

      else{
        setStopList([stop])
        setStopSelected(stop)
        setAreaSelected(null)
      }

      // Handle fetch busses function
      setBusBtnLoading(true)
      let response3 = await fetchBuses(stop)
      if(response3.msg==="SUCCESS"){
        setBusesList(response3.data.data)
        setShowBuses(true)
      }
      setBusBtnLoading(false)
    }
  }


  useEffect(()=>{
    const fetch = async ()=>{
      let response = await fetchAreas()
      if(response.msg==="SUCCESS"){
        setAreaList(response.data.formatedData)
        setIsLoading(false)
      }
    }
    fetch()
  },[])

  return (
    <div className="App" isloading={isLoading?"true":""}>
        <NavBar clearStates={clearAll} handleNearestStop={getLocation}/>
        {isLoading && <Spinner animation="border" variant="primary" size="lg" />}
        {!isLoading && <MainComponent areaList={areaList}
                                      areaSelected={areaSelected}
                                      stopList={stopList}
                                      stopSelected={stopSelected}
                                      handleStopSelected={setStopSelected}
                                      handleAreaSelected={setAreaSelected}
                                      fetchStops={handleFetchStops}
                                      fetchBuses={handleFetchBuses}
                                      busesList={busesList}
                                      showBuses={showBuses}
                                      handleFetchTimeline={handleFetchTimeline}
                                      timelineList={timelineList}
                                      stopBtnLoading={stopBtnLoading}
                                      busBtnLoading={busBtnLoading}/>}
    </div>
  );
}

export default App;
