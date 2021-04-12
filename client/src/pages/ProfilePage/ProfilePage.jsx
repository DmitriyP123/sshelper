import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

function ProfilePage() {
  const { nickname, email, id } = useSelector(state => state.users)
  return (
    <>
     <h3>{nickname}</h3> 
     <h3>{email}</h3> 
     <h3>{id}</h3> 
    <Link to="/">Вернуться на главную</Link>
    </>
  );
}

export default ProfilePage;
