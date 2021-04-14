import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { fetchInitRequests, fetchDeleteRequests } from '../../redux/reduxThunk/asyncFuncs'

function RequestPage() {
  const dispatch = useDispatch()
  let { requests } = useSelector(state=> state.requests)
  useEffect(()=> {
    dispatch(fetchInitRequests())
  }, [dispatch])
  const deleteRequestHandler = (e) => {
    const { id } = e.target
    dispatch(fetchDeleteRequests(id))
  }
  return (
    <>
    <ul>
     {requests?.map(el=> 
      <li key = {el._id}>
        <span>Lat: {el.lat}</span>
        <span>Lng: {el.lng}</span>
        <p>FieldName: {el.fieldTitle}</p>
        <p>FieldContent: {el.fieldContent}</p>
        <button style={{color:'blue'}}>Принять</button>
        <br />
        <button style={{color:'red'}} onClick={deleteRequestHandler} id={el._id}>Отклонить</button>
        <hr />
      </li>)} 
     </ul>
    </>
  )
}

export default RequestPage;
