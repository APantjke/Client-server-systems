import React,{useState} from 'react';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Select from 'react-select';

const SelectBox = props => {

  const [isLoading,setIsLoading] = useState(false)

  return(
  <React.Fragment>
    <Row className="align-items-center row justify-content-center mb-4">
      <Col md={5} sm={8}>
        <Select options={props.options}
                isSearchable
                value={props.value}
                onChange={props.changeHandler}
                className="mb-4 mb-md-0" />
      </Col>

      <Col md={{ span: 'auto', offset: 1 }} className='col-xs-1 text-center'>
        <Button
            variant="primary"
            className="btnConfirm"
            size="lg"
            disabled={!props.value? true: false}
            onClick={!props.value ? null : props.clickHandler}
            >
                {props.loading ? 'Loading' : 'Confirm'}
        </Button>
      </Col>
    </Row>
  </React.Fragment>
)}

export default SelectBox;
