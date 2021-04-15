import React, { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom'
import { fetchEditUser } from '../../redux/reduxThunk/asyncFuncs'

function ProfilePage() {
  const { userId } = useParams()
  const { allUsers, id } = useSelector(state => state.users)
  const [edit, setEdit] = useState(false)
  const [myProfile, setMyProfile] = useState(false)
  const aboutInput = useRef()
  const expInput = useRef()
  const dispatch = useDispatch()
  let userProfile = allUsers.find(el => el._id === userId)
  console.log(userProfile);

  setTimeout(() => {
    if (userProfile?._id === id) {
      setMyProfile(true)
    }  
  }, 0);

  const editHandler = () => {
    setEdit(true)
  }

  const saveHandler = () => {
    setEdit(false)
    dispatch(fetchEditUser(userId,aboutInput.current.value,expInput.current.value))
  }

  return (
    <>
    {userProfile?.isAdmin && <h2>Админская учётка</h2>}
     <h3>Ник: {userProfile?.nickname}</h3> 
     <h3>Мыло: {userProfile?.email}</h3> 
     <h3>Айди(просто так){userProfile?._id}</h3> 
     <hr/>
     <hr/>
     {!edit &&
     <>
      <h3>exp: {userProfile?.expirience}</h3>
     <h3>O SEBE: {userProfile?.about}</h3>
     <div>
     {myProfile && <button style={{color:'blue'}} onClick={editHandler}>Редактировать</button>}
     </div>
     </>}
     {edit &&
     <>
     <span>exp: </span><input defaultValue={userProfile.expirience} ref = {expInput}/>
     <span>O SEBE: </span><input defaultValue={userProfile.about} ref = {aboutInput}/>
     <div>
     <button style={{color:'red'}} onClick={saveHandler}>Сохранить</button>
     </div>
     </>}
    <Link to="/">Вернуться на главную</Link>
    </>
  );
}

export default ProfilePage;
