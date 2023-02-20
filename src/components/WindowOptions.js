import React from 'react';
import FormSectionPanel from './FormSectionPanel';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import {updateGlassType, updateSectionGlazed, updateFraming} from '../store/index';

export default function WindowOptions() {
    const dispatch = useDispatch();
    const {glassType, sectionGlazed, framing} = useSelector((state)=>{
        return {
            glassType:state.windowOptions.glassType,
            sectionGlazed:state.windowOptions.sectionGlazed,
            framing:state.windowOptions.framing
        }
    });

    const handleGlassTypeChange = (event)=>{
        dispatch(updateGlassType(event.target.value));
    }
    const handleSectionGlazedChange = (event)=>{
        dispatch(updateSectionGlazed(event.target.value));
    }
    const handleFramingChange = (event)=>{
        dispatch(updateFraming(event.target.value));
    }

    return (
        <div>
            <FormSectionPanel heading="Window Options">
                <Form className='container col-md-10'>
                    <Form.Group className='row p-3'>
                        <div className='col-4'>
                            <Form.Label >Glass Type</Form.Label>
                        </div>
                        <div className='col-8'>
                            <Form.Select onChange={handleGlassTypeChange} value={glassType}>
                                <option disabled value=""></option>
                                <option value="Solid">Solid (No Windows)</option>
                                <option value="Partially Glazed">Partially Glazed</option>
                                <option value="Fully Glazed">Fully Glazed</option>
                            </Form.Select>
                        </div>
                    </Form.Group>

                    <Form.Group className='row p-3'>
                        <div className='col-4'>
                            <Form.Label >Section(s) Glazed</Form.Label>
                        </div>
                        <div className='col-8'>
                            <Form.Select onChange={handleSectionGlazedChange} value={sectionGlazed}>
                                <option disabled value=""></option>
                                <option value="None">None</option>
                                <option value="2">2 Sections</option>
                                <option value="4">4 Sections</option>
                            </Form.Select>
                        </div>
                    </Form.Group>

                    <Form.Group className='row p-3'>
                        <div className='col-4'>
                            <Form.Label >Framing</Form.Label>
                        </div>
                        <div className='col-8'>
                            <Form.Select onChange={handleFramingChange} value={framing}>
                                <option disabled value=""></option>
                                <option value="Arch 1 Design">Arch 1 Design</option>
                                <option value="Arch 2 Design">Arch 2 Design</option>
                                <option value="Bar Design">Bar Design</option>
                            </Form.Select>
                        </div>
                    </Form.Group>
                </Form>
            </FormSectionPanel>
        </div>
    )
}
