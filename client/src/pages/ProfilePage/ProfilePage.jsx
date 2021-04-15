import React, { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import {
  fetchEditUser,
  fetchUpdatePhotoUser,
} from "../../redux/reduxThunk/asyncFuncs";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

function ProfilePage() {
  const { userId } = useParams();
  const { allUsers, id, expirience, about, email, nickname, portrait } = useSelector((state) => state.users);
  const [edit, setEdit] = useState(false);
  const [myProfile, setMyProfile] = useState(false);
  const aboutInput = useRef();
  const expInput = useRef();
  const fileInput = useRef();
  const dispatch = useDispatch();

  let userProfile = allUsers.find((el) => el._id === userId);

  setTimeout(() => {
    if (userProfile?._id === id) {
      setMyProfile(true);
    }
  }, 0);

  const editHandler = () => {
    setEdit(true);
  };

  const saveHandler = () => {
    setEdit(false);
    dispatch(
      fetchEditUser(userId, aboutInput.current.value, expInput.current.value)
    );
  };

  let imageUrl;
  const [imageSelect, setImageSelect] = useState("");
  const uploadImage = async () => {
    const formData = new FormData();
    formData.append("file", imageSelect);
    formData.append("upload_preset", "xk24ty94");
    let response = await axios.post(
      "https://api.cloudinary.com/v1_1/mikhailssh/image/upload",
      formData
    );
    imageUrl = await response.data.secure_url;
    dispatch(fetchUpdatePhotoUser(userProfile._id, imageUrl));
  };
  console.log(myProfile);
  return (
    <>
      {myProfile ? (
        <>
          {userProfile?.isAdmin && <h2>Админская учётка</h2>}
          <h3>Ник: {nickname}</h3>
          <h3>Мыло: {email}</h3>
          <h3>Айди(просто так){id}</h3>
          <h3>
            Картинка: <img src={portrait} alt="" />
          </h3>
          <hr />
          <hr />
          {!edit && (
            <>
              <h3>exp: {expirience}</h3>
              <h3>O SEBE: {about}</h3>
              <div>
                {myProfile && (
                  <button style={{ color: "blue" }} onClick={editHandler}>
                    Редактировать
                  </button>
                )}
              </div>
            </>
          )}
          {edit && (
            <>
              <span>exp: </span>
              <input defaultValue={userProfile.expirience} ref={expInput} />
              <span>O SEBE: </span>
              <input defaultValue={userProfile.about} ref={aboutInput} />
              <div>
                <button style={{ color: "red" }} onClick={saveHandler}>
                  Сохранить
                </button>
              </div>
            </>
          )}
          <div>
            <input
              type="file"
              onChange={(event) => {
                setImageSelect(event.target.files[0]);
              }}
            />
            <button onClick={uploadImage}>Upload img</button>
            {imageUrl && <img src={imageUrl} />}
          </div>
          <Link to="/">Вернуться на главную</Link>
        </>
      ) : (
        <>
          {userProfile?.isAdmin && <h2>Админская учётка</h2>}
          <h3>Ник: {userProfile?.nickname}</h3>
          <h3>Мыло: {userProfile?.email}</h3>
          <h3>Айди(просто так){userProfile?._id}</h3>
          <h3>
            Картинка: <img src={userProfile?.portrait} alt="" />
          </h3>
          <hr />
          <hr />
          <h3>exp: {userProfile?.expirience}</h3>
          <h3>O SEBE: {userProfile?.about}</h3>
          <div></div>
          <div></div>
          <Link to="/">Вернуться на главную</Link>
        </>
      )}
    </>
  );
}

export default ProfilePage;
