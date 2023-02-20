import React, { useState } from 'react'
import FormSectionPanel from './FormSectionPanel'
import Form from 'react-bootstrap/Form'
import { useDispatch, useSelector } from 'react-redux';
import {updateLock, updateMiscLockOptions, updatePackaging, addAdditionalOptions, removeAdditionalOptions} from '../store/index';

export default function OtherOptions() {
    const dispatch = useDispatch();
    const {lock, miscLockOptions, packaging} = useSelector((state)=>{
        return {
            lock:state.otherOptions.lock,
            miscLockOptions:state.otherOptions.miscLockOptions,
            packaging:state.otherOptions.packaging,
            additionalOptions:state.otherOptions.additionalOptions,
        }
    })
    const [isExtraStutsSelected, setIsExtraStutsSelected] = useState(false);
    const [noOfExtraStruts, setNoOfExtraStruts] = useState("5");

    const handleLockChange = (event)=>{
        dispatch(updateLock(event.target.value));
    }

    const handleMiscLockOptionsChange = (event)=>{
        dispatch(updateMiscLockOptions(!miscLockOptions));
    }

    const handlePackagingChange = (event)=>{
        dispatch(updatePackaging(event.target.value));
    }

    const handleAdditionalOptionsChange = (event)=>{
        const boxChecked = event.target.value;
        const name = event.target.label;
        if(boxChecked){
            const payload = (name === 'Extra Strut(s)') ? {name, value:noOfExtraStruts} : {name};
            addAdditionalOptions(payload);
        }else{
            removeAdditionalOptions(name);
        }
    }

    return (
        <div className='mb-5'>
            <FormSectionPanel heading="Other Options">
                <Form className='container col-md-10'>
                    <Form.Group className='row p-3'>
                        <div className='col-4'>
                            <Form.Label >Lock</Form.Label>
                        </div>
                        <div className='col-8'>
                            <Form.Select onChange={handleLockChange} value={lock}>
                                <option default value=""></option>
                                <option value="Inside Slide Lock (#1)">Inside Slide Lock (#1)</option>
                                <option value="Inside Slide Lock (#2)">Inside Slide Lock (#2)</option>
                                <option value="Outside Lock">Outside Lock</option>
                            </Form.Select>
                        </div>
                    </Form.Group>

                    <Form.Group className='row p-3'>
                        <div className='col-4'>
                            <Form.Label >MISC lock options</Form.Label>
                        </div>
                        <div className='col-8'>
                            <Form.Check
                                type="radio"
                                label="No lock hole"
                                onChange={handleMiscLockOptionsChange}
                                value={miscLockOptions}
                            />
                        </div>
                    </Form.Group>

                    <Form.Group className='row p-3'>
                        <div className='col-4'>
                            <Form.Label >Packaging</Form.Label>
                        </div>
                        <div className='col-8'>
                            <Form.Select onChange={handlePackagingChange} value={packaging}>
                                <option default value=""></option>
                                <option value="Distributor">Distributor</option>
                                <option value="Retailer">Retailer</option>
                            </Form.Select>
                        </div>
                    </Form.Group>


                    <Form.Group className='row p-3'>
                        <div className='col-4'>
                            <Form.Label >MISC lock options</Form.Label>
                        </div>
                        <div className='col-8'>
                            <div className="row mb-3">
                                <div className='col-6'>
                                    <Form.Check
                                        type="checkbox"
                                        label="Extra Strut(s)"
                                        value={isExtraStutsSelected}
                                        onClick={()=>setIsExtraStutsSelected((isExtraStutsSelected) => !isExtraStutsSelected)}
                                        onChange={handleAdditionalOptionsChange}
                                    />
                                </div>
                                {isExtraStutsSelected &&
                                <div className='col-6'>
                                    <Form.Select onChange={(e)=>setNoOfExtraStruts(e.target.value)} value={noOfExtraStruts}>
                                        <option value="5">5 Extra Strut(s)</option>
                                        <option value="10">10 Extra Strut(s)</option>
                                        <option value="15">15 Extra Strut(s)</option>
                                    </Form.Select>
                                </div>}
                            </div>
                            <Form.Check
                                className='mb-3'
                                type="checkbox"
                                label="Spade Strap Hinges(s)"
                                onChange={handleAdditionalOptionsChange}
                            />
                            <Form.Check
                                className='mb-3'
                                type="checkbox"
                                label="14 GA Quiet Hinge"
                                onChange={handleAdditionalOptionsChange}
                            />
                            <Form.Check
                                className='mb-3'
                                type="checkbox"
                                label="Less Bottom Astragal"
                                onChange={handleAdditionalOptionsChange}
                            />
                            <Form.Check
                                className='mb-3'
                                type="checkbox"
                                label="Gold Bar Gurantee"
                                onChange={handleAdditionalOptionsChange}
                            />
                            <Form.Check
                                className='mb-3'
                                type="checkbox"
                                label="Medallion Hardware Upgrade"
                                onChange={handleAdditionalOptionsChange}
                            />
                            <Form.Check
                                className='mb-3'
                                type="checkbox"
                                label="Light Seal Kit"
                                onChange={handleAdditionalOptionsChange}
                            />
                            <Form.Check
                                className='mb-3'
                                type="checkbox"
                                label='Side Lock Mounted at 54"'
                                onChange={handleAdditionalOptionsChange}
                            />
                            <Form.Check
                                className='mb-5'
                                type="checkbox"
                                label="2 Spear Lift Handles"
                                onChange={handleAdditionalOptionsChange}
                            />
                        </div>
                    </Form.Group>
                </Form>
            </FormSectionPanel>
        </div>
    )
}
