import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import api from '../api/pm.api';

const EditProfile = () => {
  const [image, setImage] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    api.getProfile()
      .then((response) => {
        setUsername(response.username);
        setEmail(response.email);
      })
      .catch((error) => {
        window.alert(error);
      });
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    try {
      formData.append('imageUrl', image);
      formData.append('username', username);
      formData.append('email', email);
      const response = await api.updateProfile(formData);
      window.alert(response);
      navigate('/profile');
    } catch (error) {
      window.alert(error);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        {/* <img src={profile.profileImageUrl} alt='profile' /> */}
        <input type='file' onChange={(e) => setImage(e.target.files[0])} />
      </div>
      <div>
        <label>Username: </label>
        <input type='text' value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div>
        <label>Email: </label>
        <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <button type='submit'>Save</button>
    </form>
  )
}

export default EditProfile