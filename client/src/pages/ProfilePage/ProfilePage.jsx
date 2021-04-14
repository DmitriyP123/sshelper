import React, { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { fetchEditUser } from '../../redux/reduxThunk/asyncFuncs'

function ProfilePage() {
  const { nickname, email, id, isAdmin, expirience, about } = useSelector(state => state.users)
  const [edit, setEdit] = useState(false)
  const aboutInput = useRef()
  const expInput = useRef()
  const dispatch = useDispatch()
  const editHandler = () => {
    setEdit(true)
  }

  const saveHandler = () => {
    setEdit(false)
    dispatch(fetchEditUser(id,aboutInput.current.value,expInput.current.value))
  }

  return (
    <>
    {isAdmin && <h2>Админская учётка</h2>}
     <h3>Ник: {nickname}</h3> 
     <h3>Мыло: {email}</h3> 
     <h3>Айди(просто так){id}</h3> 
     <hr/>
     <hr/>
     {!edit &&
     <>
      <h3>exp: {expirience}</h3>
     <h3>O SEBE: {about}</h3>
     <div>
     <button style={{color:'blue'}} onClick={editHandler}>Редактировать</button>
     </div>
     </>}
     {edit &&
     <>
     <span>exp: </span><input defaultValue={expirience} ref = {expInput}/>
     <span>O SEBE: </span><input defaultValue={about} ref = {aboutInput}/>
     <div>
     <button style={{color:'red'}} onClick={saveHandler}>Сохранить</button>
     </div>
     </>}
    <Link to="/">Вернуться на главную</Link>
    </>
  );
}

export default ProfilePage;
