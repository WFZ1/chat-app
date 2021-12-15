import loginImage from '../../assets/images/login.svg';
import styles from './Auth.module.scss';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { login as loginThunk } from '../../store/auth/thunk';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitForm = async (data) => {
    try {
			await dispatch(loginThunk(data)).unwrap();
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
            <img className={styles.image} src={loginImage} alt='Login' />
          </div>
          <div className={styles.formSection}>
            <h2 className={styles.formSectionTitle}>Welcome back</h2>

            <form className={styles.form} onSubmit={handleSubmit(submitForm)}>
              <div className={ `${styles.inputField} mb-1` }>
                <input
                  {...register('email', { required: true })}
                  defaultValue='john.doe@gmail.com'
                  placeholder='Email'
                />
              </div>

              <div className={ `${styles.inputField} mb-2` }>
                <input 
                  {...register('password', { required: true })}
                  defaultValue='secret'
                  type="password"
                  placeholder='Password'
                />
              </div>

              <button className={styles.btn}>Login</button>
            </form>

            <p>Don't have an account? <Link to='/register'>Register</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};