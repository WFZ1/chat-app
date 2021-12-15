import registerImage from '../../assets/images/register.svg';
import styles from './Auth.module.scss';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { register as registerThunk } from '../../store/auth/thunk';
import { useNavigate } from 'react-router-dom';

export const Register = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitForm = async (data) => {
    try {
			await dispatch(registerThunk(data)).unwrap();
      navigate('/');
		} catch (err) {
			console.log('Auth service err', err);
		}
  }

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={ `${styles.wrapper} card-shadow` }>
          <div className={styles.imageSection}>
            <img className={styles.image} src={registerImage} alt='Register' />
          </div>
          <div className={styles.formSection}>
            <h2 className={styles.formSectionTitle}>Create an account</h2>

            <form className={styles.form} onSubmit={handleSubmit(submitForm)}>
              <div className={ `${styles.inputField} mb-1` }>
                <input
                  {...register('firstName', { required: true })}
                  placeholder='First name'
                />
              </div>

              <div className={ `${styles.inputField} mb-1` }>
                <input
                  {...register('lastName', { required: true })}
                  placeholder='Last name'
                />
              </div>

              <div className={ `${styles.inputField} mb-1` }>
                <input
                  {...register('email', { required: true })}
                  placeholder='Email'
                />
              </div>

              <div className={ `${styles.inputField} mb-1` }>
                <select {...register('gender', { required: true })}>
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

              <button className={styles.btn}>Register</button>
            </form>

            <p>Already have an account? <Link to='/login'>Login</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};