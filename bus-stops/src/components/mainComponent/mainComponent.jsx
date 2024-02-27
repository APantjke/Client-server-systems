import React,{useState} from 'react';
import Row from 'react-bootstrap/Row';
import SelectBox from "../selectBox/selectBox.jsx";
import BusList from "../busList/busList";

import "./mainComponent.css";

const MainComponent = props => {

  return(

      <div className="container main-component">
        <Row className="titleText row justify-content-center text-light fs-5 ">Please select area:</Row>
        <SelectBox options={props.areaList}
                   value={props.areaSelected}
                   changeHandler={props.handleAreaSelected}
                   clickHandler={props.fetchStops}
                   loading={props.stopBtnLoading}/>

                 <Row className="titleText row justify-content-center text-light fs-5">Please select stop for specified area:</Row>
        <SelectBox options={props.stopList}
                   value={props.stopSelected}
                   changeHandler={props.handleStopSelected}
                   clickHandler={props.fetchBuses}
                   loading={props.busBtnLoading}
                   stopSelect={true}/>

        {props.showBuses && <BusList busesList={props.busesList}
                                     handleFetchTimeline={props.handleFetchTimeline}
                                     stopSelected={props.stopSelected}
                                     timelineList={props.timelineList}/>}
      </div>
)};

export default MainComponent;
/*disabled={isLoading}
onClick={!isLoading ? handleClick : null}*/
