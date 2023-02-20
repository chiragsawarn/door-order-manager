import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { updateCategory, updateSeries, updateDoorType } from '../store/index';
import { Link } from 'react-router-dom';


export default function ConfigureNewDoor1() {
  const dispatch = useDispatch();
  const { category, series, doorType } = useSelector((state) => {
    return {
      category: state.form.category,
      series: state.form.series,
      doorType: state.form.doorType
    }
  });

  const handleCategoryChange = (event) => {
    dispatch(updateCategory(event.target.value));
  }

  const handleSeriesChange = (event) => {
    dispatch(updateSeries(event.target.value));
  }

  const handleDoorTypeChange = (event) => {
    dispatch(updateDoorType(event.target.value));
  }

  return (
    <div className='col-md-8 mx-auto mt-3 bg-light' style={{ height: "100vh" }}>
      <Form className='col-md-10 mx-auto p-3'>
        <Form.Group className='d-flex col-md-8 p-3'>
          <Form.Label className='col-md-6'>Select Category</Form.Label>
          <Form.Select className='col-md-6' onChange={handleCategoryChange} value={category}>
            <option disabled value=""></option>
            <option value="Commercial Door">Commercial Door</option>
            <option value="Residential Door">Residential Door</option>
            <option value="Garage Door">Garage Door</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className='d-flex col-md-8 p-3'>
          <Form.Label className='col-md-6'>Select Series</Form.Label>
          <Form.Select className='col-md-6' onChange={handleSeriesChange} value={series}>
            <option disabled value=""></option>
            <option value="Intellicore">Intellicore</option>
            <option value="Canyon Ridge Collection">Canyon Ridge Collection</option>
            <option value="Classic Collection">Classic Collection</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className='d-flex col-md-8 p-3'>
          <Form.Label className='col-md-6'>Door Type</Form.Label>
          <Form.Select className='col-md-6' onChange={handleDoorTypeChange} value={doorType}>
            <option disabled value=""></option>
            <option value="CAN211CCW1">CAN211CCW1</option>
            <option value="CAN212">CAN212</option>
            <option value="GRC415">GRC415</option>
          </Form.Select>
        </Form.Group>
      </Form>
      <div className='position-fixed bottom-0 shadow rounded bg-light col-12 col-md-8 d-md-flex justify-content-end'>
        <Link to="/configure-new-door-2" className='me-5'>
          <Button className='my-3 col-12' variant="dark" style={{ backgroundColor: "#66332B" }}>
            CONFIGURE
          </Button>
        </Link>
      </div>
    </div>
  )
}
