
import React, { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom'
import { fetchEditUser, fetchUpdatePhotoUser } from '../../redux/reduxThunk/asyncFuncs';
import { Form } from 'react-bootstrap';
import './ProfilePage.css';
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
      setMyProfile(true)
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
    <div className="page-content page-container" id="page-content">
      <div className="padding">
        <div className="row container d-flex justify-content-center">
          <div className="col-xl-6 col-md-12">
            <div className="card user-card-full">
              <div className="row m-l-0 m-r-0">
                <div className="col-sm-4 bg-c-lite-green user-profile">
                  <div className="card-block text-center text-white">
                    <div className="m-b-25"> <img src="https://support.discord.com/hc/user_images/81TKxGEqVJruMIz7RCN8JA.jpeg" className="img-radius" alt="User-Profile-Image" /> </div>
                    <h6 className="f-w-600">{userProfile?.nickname}</h6>
                    <p>{userProfile?.email}</p>
                    {!edit &&
                      <i onClick={editHandler} className=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
                    }
                    {edit &&
                      <p onClick={saveHandler} className="icon-edit m-b-10 f-w-600">Сохранить</p>
                    }
                  </div>
                </div>
                <div className="col-sm-8">
                  <div className="card-block">
                    {userProfile?.isAdmin && <h4 className="m-b-20 p-b-5 f-w-600">Админская учётка</h4>}
                    <h6 className="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">Информация</h6>
                    {!edit &&
                      <div className="row">
                        <div className="col-sm-6">
                          <p className="m-b-10 f-w-600">Опыт</p>
                          {userProfile?.expirience ?
                            <h6 className="text-muted f-w-400">{userProfile.expirience}</h6>
                            :
                            <h6 className="text-muted f-w-400">- - -</h6>
                          }
                        </div>
                        <div className="col-sm-6">
                          <p className="m-b-10 f-w-600">О себе</p>
                          {userProfile?.about ?
                            <h6 className="text-muted f-w-400">{userProfile.about}</h6>
                            :
                            <h6 className="text-muted f-w-400">- - -</h6>
                          }
                        </div>
                      </div>
                    }
                    {edit &&
                      <div className="row">
                        <div className="col-sm-6">
                          <p className="m-b-10 f-w-600">Опыт</p>
                          {userProfile?.expirience ?
                            <Form.Control className="text-muted f-w-400" placeholder='опыт' defaultValue={userProfile.expirience} ref={expInput} />
                            :
                            <Form.Control className="text-muted f-w-400" placeholder='опыт' ref={expInput} />
                          }
                        </div>
                        <div className="col-sm-6">
                          <p className="m-b-10 f-w-600">О себе</p>
                          {/* {userProfile?.about ? */}
                          <Form.Control as="textarea" className="text-muted f-w-400" placeholder='о себе' defaultValue={userProfile.about} ref={aboutInput} />
                          {/* : */}
                          {/* <input className="text-muted f-w-400" placeholder='о себе' ref={aboutInput} > - - -</input> */}
                          {/* } */}
                        </div>
                      </div>
                    }
                    {/* <h6 className="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">История ивентов</h6> */}
                    <div className="row">
                      <div className="col-sm-6">
                        <p className="m-b-10 f-w-600"></p>
                      </div>
                    </div>
                    {/* <ul className="social-link list-unstyled m-t-40 m-b-10">
                      <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="facebook" data-abc="true"><i className="mdi mdi-facebook feather icon-facebook facebook" aria-hidden="true"></i></a></li>
                      <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="twitter" data-abc="true"><i className="mdi mdi-twitter feather icon-twitter twitter" aria-hidden="true"></i></a></li>
                      <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="instagram" data-abc="true"><i className="mdi mdi-instagram feather icon-instagram instagram" aria-hidden="true"></i></a></li>
                    </ul> */}
                  </div>
                  <Link style={{ marginLeft: '60px', }} to="/">Вернуться на главную</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // <>
    // {userProfile?.isAdmin && <h2>Админская учётка</h2>}
    //  <h3>Ник: {userProfile?.nickname}</h3>
    //  <h3>Мыло: {userProfile?.email}</h3>
    //  <h3>Айди(просто так){userProfile?._id}</h3>
    //  <hr />
    //  <hr />
    //  {!edit &&
    //  <>
    //   <h3>exp: {userProfile?.expirience}</h3>
    //  <h3>O SEBE: {userProfile?.about}</h3>
    //  <div>
    //  {myProfile && <button style={{ color: 'blue' }} onClick={editHandler}>Редактировать</button>}
    //  </div>
    //  </>}
    //  {edit &&
    //  <>
    //  <span>exp: </span><input defaultValue={userProfile.expirience} ref={expInput} />
    //  <span>O SEBE: </span><input defaultValue={userProfile.about} ref={aboutInput} />
    //  <div>
    //  <button style={{ color: 'red' }} onClick={saveHandler}>Сохранить</button>
    //  </div>
    //  </>}
    // <Link to="/">Вернуться на главную</Link>
    // </>

        
        
        // DIMMMMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
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
