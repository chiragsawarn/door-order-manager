import React from 'react';
import FormSectionPanel from './FormSectionPanel';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import {updateSpring, updateTrackSize, updateTrackMount, updateTrackLift, updateTrackRadius} from '../store/index';

export default function TrackOptions() {
    const dispatch = useDispatch();
    const {spring, trackSize, trackMount, trackLift, trackRadius} = useSelector((state)=>{
        return {
            spring:state.trackOptions.spring,
            trackSize:state.trackOptions.trackSize,
            trackMount:state.trackOptions.trackMount,
            trackLift:state.trackOptions.trackLift,
            trackRadius:state.trackOptions.trackRadius
        }
    });

    const handleSpringChange = (event)=>{
        dispatch(updateSpring(event));
    }
    const handleTrackSizeChange = (event)=>{
        dispatch(updateTrackSize(event.target.value));
    }
    const handleTrackMountChange = (event)=>{
        dispatch(updateTrackMount(event.target.value));
    }
    const handleTrackLiftChange = (event)=>{
        dispatch(updateTrackLift(event.target.value));
    }
    const handleTrackRadiusChange = (event)=>{
        dispatch(updateTrackRadius(event.target.value));
    }
    return (
        <div>
            <FormSectionPanel heading="Track Options">
                <Form className='container col-md-10'>
                    <Form.Group className='row p-3'>
                        <div className='col-4'>
                            <Form.Label >Spring</Form.Label>
                        </div>
                        <div className='col-8'>
                            <Form.Select onChange={handleSpringChange} value={spring}>
                                <option disabled value=""></option>
                                <option value="Galvanized Torsion">Galvanized Torsion</option>
                                <option value="Oxidized Aluminium">Oxidized Aluminium</option>
                            </Form.Select>
                        </div>
                    </Form.Group>

                    <Form.Group className='row p-3'>
                        <div className='col-4'>
                            <Form.Label >Track Size</Form.Label>
                        </div>
                        <div className='col-8'>
                            <Form.Select onChange={handleTrackSizeChange} value={trackSize}>
                                <option disabled value=""></option>
                                <option value='2” Flag & Jamb Brackets Loose'>2” Flag & Jamb Brackets Loose</option>
                                <option value='4” Flag & Jamb Brackets Loose'>4” Flag & Jamb Brackets Loose</option>
                            </Form.Select>
                        </div>
                    </Form.Group>

                    <Form.Group className='row p-3'>
                        <div className='col-4'>
                            <Form.Label >Track Mount</Form.Label>
                        </div>
                        <div className='col-8'>
                            <Form.Select onChange={handleTrackMountChange} value={trackMount}>
                                <option disabled value=""></option>
                                <option value='Bracket'>Bracket</option>
                                <option value='Steep'>Steep</option>
                            </Form.Select>
                        </div>
                    </Form.Group>

                    <Form.Group className='row p-3'>
                        <div className='col-4'>
                            <Form.Label >Track Lift</Form.Label>
                        </div>
                        <div className='col-8'>
                            <Form.Select onChange={handleTrackLiftChange} value={trackLift}>
                                <option disabled value=""></option>
                                <option value='Standary'>Standary</option>
                                <option value='Elevated'>Elevated</option>
                            </Form.Select>
                        </div>
                    </Form.Group>

                    <Form.Group className='row p-3'>
                        <div className='col-4'>
                            <Form.Label >Track Radius</Form.Label>
                        </div>
                        <div className='col-8'>
                            <Form.Select onChange={handleTrackRadiusChange} value={trackRadius}>
                                <option disabled value=""></option>
                                <option value='6" Radius'>6" Radius</option>
                                <option value='12" Radius'>12" Radius</option>
                                <option value='18" Radius'>18" Radius</option>
                            </Form.Select>
                        </div>
                    </Form.Group>

                </Form>
            </FormSectionPanel>
        </div>
    )
}
