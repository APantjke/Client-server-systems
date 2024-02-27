import React,{useState} from 'react';
import ListGroup from 'react-bootstrap/ListGroup'
import Tab from 'react-bootstrap/Tab'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./busList.css";
import moment from 'moment';
import Table from 'react-bootstrap/Table'

const BusList = props => {

const [tabSelected, setTabSelected] = useState("")

const handleTabSelect = (e) =>{
  props.handleFetchTimeline(e.substring(1),props.stopSelected.value)
  setTabSelected(e)
}

return  (
  <Tab.Container id="list-group-tabs" onSelect={handleTabSelect}>
  <Row className="row-bus">
    <div className="titleText fs-5">
          {props.busesList.length>0? "This is list of buses available on selected stop"
                                   : "There are no available busses for this stop currently"}
    </div>
    <Col sm={3} xs={4}>
      <ListGroup>
        {props.busesList.map((bus,i)=>(
          <ListGroup.Item action href={`#${bus.route_short_name}`} key={bus.route_id}>
            {bus.route_short_name}
        </ListGroup.Item>
        ))}
      </ListGroup>
    </Col>
    <Col sm={9} >
      <Tab.Content>
        <Tab.Pane eventKey={tabSelected}>
          <Table striped bordered hover variant="dark">
                    <thead>
                      <tr>
                        <th>Arrival Date</th>
                        <th>Arrival Time</th>
                        <th>Direction</th>
                        <th>Trip Headsign</th>
                      </tr>
                    </thead>
                    <tbody>
                      {props.timelineList.map((time,i)=>(
                        <tr key={i}>
                          <td>{moment(time.date).format("dddd, MMM Do YY")}</td>
                          <td>{time.arrival_time.substring(0,5)}</td>
                          <td>{time.direction_code}</td>
                          <td>{time.trip_headsign}</td>
                        </tr>
                      ))}

                      {props.timelineList.length < 1 &&
                        <tr>
                          <td colSpan={4}>No registered arrivals in database for these options.</td>
                        </tr>
                      }
                    </tbody>
            </Table>
        </Tab.Pane>
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container>

)}

export default BusList;
