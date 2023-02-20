import React from 'react';
import FormSectionPanel from './FormSectionPanel';
import Form from 'react-bootstrap/Form';
import {updateAssemblyType, updateWidthByFeet, updateWidthByInches, updateHeightByFeet, updateHeightByInches, updateWindCode, updateDesign, updateColor} from '../store/index';
import { useDispatch, useSelector } from 'react-redux';

export default function LayoutOptions() {
    const dispatch = useDispatch();
    const {assemblyType, width, height, windCode, design, color} = useSelector((state)=>{
        return {
            assemblyType:state.layoutOptions.assemblyType,
            width:state.layoutOptions.measureSize.width,
            height:state.layoutOptions.measureSize.height,
            windCode:state.layoutOptions.windCode,
            design:state.layoutOptions.design,
            color:state.layoutOptions.color
        }
    });

    const handleAssemblyTypeChange = (event)=>{
        dispatch(updateAssemblyType(event.target.value));
    }
    const handleWidthByFeetChange = (event)=>{
        dispatch(updateWidthByFeet(event.target.value));
    }
    const handleWidthByInchesChange = (event)=>{
        dispatch(updateWidthByInches(event.target.value));
    }
    const handleHeightByFeetChange = (event)=>{
        dispatch(updateHeightByFeet(event.target.value));
    }
    const handleHeightByInchesChange = (event)=>{
        dispatch(updateHeightByInches(event.target.value));
    }
    const handleWindCodeChange = (event)=>{
        dispatch(updateWindCode(event.target.value));
    }
    const handleDesignChange = (event)=>{
        dispatch(updateDesign(event.target.value));
    }
    const handleColorChange = (event)=>{
        dispatch(updateColor(event.target.value));
    }

    return (
        <div>
            <FormSectionPanel heading="Layout Options">
                <Form className='container col-md-10'>
                    <Form.Group className='row p-3'>
                        <div className='col-4'>
                            <Form.Label >Assembly Type</Form.Label>
                        </div>
                        <div className='col-8'>
                            <Form.Select onChange={handleAssemblyTypeChange} value={assemblyType}>
                                <option disabled value=""></option>
                                <option value="Commercial Door">Complete Door</option>
                                <option value="Residential Door">Partial Door</option>
                            </Form.Select>
                        </div>
                    </Form.Group>

                    <Form.Group className='row p-3'>
                        <div className='col-4'>
                            <Form.Label>Measure Size</Form.Label>
                        </div>
                        <div className='col-8 container'>
                            <Form.Group className='row'>
                                <div className='col-4'>
                                    <Form.Label>Width</Form.Label>
                                </div>
                                <div className='col-4'>
                                    <Form.Select onChange={handleWidthByFeetChange} value={width.feet}>
                                        <option disabled value=""></option>
                                        <option value="12">12 ft.</option>
                                        <option value="10">10 ft.</option>
                                        <option value="8">8 ft.</option>
                                        <option value="6">6 ft.</option>
                                        <option value="4">4 ft.</option>
                                        <option value="3">3 ft.</option>
                                    </Form.Select>
                                </div>
                                <div className='col-4'>
                                    <Form.Select onChange={handleWidthByInchesChange} value={width.inches}>
                                        <option value="0">0 in.</option>
                                        <option value="2">2 in.</option>
                                        <option value="4">4 in.</option>
                                        <option value="6">6 in.</option>
                                        <option value="8">8 in.</option>
                                        <option value="10">10 in.</option>
                                        <option value="12">12 in.</option>
                                    </Form.Select>
                                </div>
                            </Form.Group>

                            <Form.Group className='row pt-3'>
                                <div className='col-4'>
                                    <Form.Label>Height</Form.Label>
                                </div>
                                <div className='col-4'>
                                    <Form.Select onChange={handleHeightByFeetChange} value={height.feet}>
                                        <option disabled value=""></option>
                                        <option value="12">12 ft.</option>
                                        <option value="10">10 ft.</option>
                                        <option value="8">8 ft.</option>
                                        <option value="6">6 ft.</option>
                                        <option value="4">4 ft.</option>
                                        <option value="3">3 ft.</option>
                                    </Form.Select>
                                </div>
                                <div className='col-4'>
                                    <Form.Select onChange={handleHeightByInchesChange} value={height.inches}>
                                        <option value="0">0 in.</option>
                                        <option value="2">2 in.</option>
                                        <option value="4">4 in.</option>
                                        <option value="6">6 in.</option>
                                        <option value="8">8 in.</option>
                                        <option value="10">10 in.</option>
                                        <option value="12">12 in.</option>
                                    </Form.Select>
                                </div>
                            </Form.Group>
                        </div>
                    </Form.Group>

                    <Form.Group className='row p-3'>
                        <div className='col-4'>
                            <Form.Label >Wind Code</Form.Label>
                        </div>
                        <div className='col-8'>
                            <Form.Select onChange={handleWindCodeChange} value={windCode}>
                                <option disabled value=""></option>
                                <option value="W1">WindCode W1</option>
                                <option value="W2">WindCode W2</option>
                                <option value="W3">WindCode W3</option>
                                <option value="W4">WindCode W4</option>
                                <option value="W5">WindCode W5</option>
                            </Form.Select>
                        </div>
                    </Form.Group>

                    <Form.Group className='row p-3'>
                        <div className='col-4'>
                            <Form.Label >Design</Form.Label>
                        </div>
                        <div className='col-8'>
                            <Form.Select onChange={handleDesignChange} value={design}>
                                <option disabled value=""></option>
                                <option value="CC">CC</option>
                                <option value="AC">AC</option>
                                <option value="BB">BB</option>
                            </Form.Select>
                        </div>
                    </Form.Group>

                    <Form.Group className='row p-3'>
                        <div className='col-4'>
                            <Form.Label >Color</Form.Label>
                        </div>
                        <div className='col-8'>
                            <Form.Select onChange={handleColorChange} value={color}>
                                <option disabled value=""></option>
                                <option value="Dark Finish">Dark Finish</option>
                                <option value="Matt Black">Matt Black</option>
                                <option value="Brass Finish">Brass Finish</option>
                            </Form.Select>
                        </div>
                    </Form.Group>
                </Form>
            </FormSectionPanel>
        </div>
    )
}
