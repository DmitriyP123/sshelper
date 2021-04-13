import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

function ProfilePage() {
  const { nickname, email, id, isAdmin } = useSelector(state => state.users)
  return (
    <>
    {isAdmin && <h2>Админская учётка</h2>}
     <h3>Ник: {nickname}</h3> 
     <h3>Мыло: {email}</h3> 
     <h3>Айди(просто так){id}</h3> 
    <Link to="/">Вернуться на главную</Link>
    </>
  );
}

export default ProfilePage;
