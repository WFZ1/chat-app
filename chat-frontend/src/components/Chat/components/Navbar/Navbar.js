import { useDispatch, useSelector } from 'react-redux';
import { getAuth } from '../../../../store/selectors';
import styles from './Navbar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Fragment, useState } from 'react';
import { logout } from '../../../../store/auth/authSlice';
import { deleteToken } from '../../../../services/authTokenService';
import { deleteUser } from '../../../../services/userService';
import { Modal } from '../../../Modal/Modal';
import { useForm } from 'react-hook-form';
import { updateProfile } from '../../../../store/auth/thunk';
import { setUser } from '../../../../services/userService';

export const Navbar = () => {
  const dispatch = useDispatch();
  const { user } = useSelector(getAuth);

  const [showProfileOptions, setShowProfileOptions] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);

  const handleLogout = () => {
    try {
      dispatch(logout());

      deleteToken();
      deleteUser();
    } catch (err) {
      console.log('Logout err', err);
    }
  };

  const { register, handleSubmit, getValues } = useForm();

  const formAndUpdateUserProfile = () => {
    const values = getValues();
    updateUserProfile(values);
  };

  const updateUserProfile = async (data) => {
    data.avatar = data.avatar[0];

    if (!data.password) delete data.password;

    const formData = new FormData();

    for (const key in data) {
      formData.append(key, data[key]);
    }

    try {
			const user = await dispatch(updateProfile(formData)).unwrap();
      setUser(user);
      setShowProfileModal(false);
		} catch (err) {
			console.log('Update user err', err);
		}
  };

  return (
    <div className={ `${styles.navbar} card-shadow` }>
      <h2 className={styles.title}>Chat io</h2>
      <div 
        className={styles.profileMenu}
        onClick={() => setShowProfileOptions(!showProfileOptions)}
      >
        <img className={styles.avatar} src={user.avatar} alt='Avatar' />
        <p className={styles.userFullName}>{user.firstName} {user.lastName}</p>
        <FontAwesomeIcon className={styles.faIcon} icon='caret-down' />

        {
          showProfileOptions &&
          
          <div className={styles.profileOptions}>
            <p
              className={styles.profileOption}
              onClick={() => setShowProfileModal(true)}
            >Update profile</p>
            <p className={styles.profileOption} onClick={handleLogout}>Logout</p>
          </div>
        }
      </div>

      {
        showProfileModal &&

        <Modal close={() => setShowProfileModal(false)}>
          <Fragment key='header'>
            <h3 className='m-0'>Update profile</h3>
          </Fragment>

          <Fragment key='body'>
            <form className={styles.form} onSubmit={handleSubmit(updateUserProfile)}>
              <div className={ `${styles.inputField} mb-1` }>
                <input
                  defaultValue={user.firstName}
                  {...register('firstName', { required: true })}
                  placeholder='First name'
                />
              </div>

              <div className={ `${styles.inputField} mb-1` }>
                <input
                  defaultValue={user.lastName}
                  {...register('lastName', { required: true })}
                  placeholder='Last name'
                />
              </div>

              <div className={ `${styles.inputField} mb-1` }>
                <input
                  defaultValue={user.email}
                  {...register('email', { required: true })}
                  placeholder='Email'
                />
              </div>

              <div className={ `${styles.inputField} mb-1` }>
                <select
                  defaultValue={user.gender}
                  {...register('gender', { required: true })}
                >
                  <option value='male'>Male</option>
                  <option value='female'>Female</option>
                </select>
              </div>

              <div className={ `${styles.inputField} mb-2` }>
                <input
                  {...register('password', { required: true })}
                  placeholder='Password'
                />
              </div>

              <div className={ `${styles.inputField} mb-2` }>
                <input
                  {...register('avatar')}
                  type='file'
                />
              </div>
            </form>
          </Fragment>

          <Fragment key='footer'>
            <button className={styles.btnSuccess} onClick={formAndUpdateUserProfile}>Update</button>
          </Fragment>
        </Modal>
      }
    </div>
  )
};