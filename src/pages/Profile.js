import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import api from '../api/pm.api';

import Loading from '../components/Loading';

const Profile = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    api.getProfile()
      .then((response) => setProfile(response))
      .catch((error) => window.alert(error));
  }, [])

  return (
    <div>
      {profile ? (
        <>
          <div>
            <img src={profile.profileImageUrl} alt='profile' />
          </div>
          <h2>Bem vindo, {profile.username}</h2>
          <p>Seu email: {profile.email}</p>
          <Link to='/profile/edit'>Edit</Link>
        </>
      ) : (
        <Loading />
      )}
    </div>
  )
}

export default Profile;