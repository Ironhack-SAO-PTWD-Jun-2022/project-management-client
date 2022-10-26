import { useEffect, useState } from 'react';

import api from '../api/pm.api';

import Loading from '../components/Loading';

const Profile = () => {
  // const [profile, setProfile] = useState(null);
  const [image, setImage] = useState(null);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    api.getProfile()
      .then((response) => {
        setUsername(response.username);
        setEmail(response.email);
      })
      .catch((error) => window.alert(error));
  }, [])

  const handleUsername = (e) => setUsername(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handleImage = (e) => setImage(e.target.files[0]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(username, email, image);
    try {
      const uploadData = new FormData();
      uploadData.append('imageUrl', image);
      uploadData.append('username', username);
      uploadData.append('email', email);
      const response = await api.uploadProfileImage(uploadData);
      window.alert(response);
    } catch (error) {
      window.alert(error);
    }
  }


  return (
    <form onSubmit={handleSubmit}>
      <h1>Editar perfil</h1>
      {username || email ? (
        <>
          <div>
            <label>Username</label>
            <input type='text' value={username} onChange={handleUsername} />
          </div>
          <div>
            <label>Email</label>
            <input type='email' value={email} onChange={handleEmail} />
          </div>
          <div>
            <input type='file' onChange={handleImage} />
          </div>
          <button type='submit'>Save</button>
        </>
      ) : (
        <Loading />
      )}
    </form>
  )
}

export default Profile;