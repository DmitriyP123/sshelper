import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { fetchInitRequests } from '../../redux/reduxThunk/asyncFuncs'
import Navbar from '../../components/Navbar/Navbar'
function RequestPage() {
  const dispatch = useDispatch()
  let { requests } = useSelector(state=> state.requests)
  useEffect(()=> {
    dispatch(fetchInitRequests())
  }, [dispatch])

  return (
    <>
    <Navbar />
    <ul>
     {requests?.map(el=> 
      <li key = {el._id}>
        <span>Lat: {el.lat}</span>
        <span>Lng: {el.lng}</span>
        <p>FieldName: {el.fieldTitle}</p>
        <p>FieldContent: {el.fieldContent}</p>
        <button>Принять</button>
        <br />
        <button>Отклонить</button>
        <hr />
      </li>)} 
     </ul>
    </>
  )
}

export default RequestPage;
