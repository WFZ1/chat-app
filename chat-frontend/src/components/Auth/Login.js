import loginImage from '../../assets/images/login.svg';
import styles from './Auth.module.scss';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { authService } from '../../services/authService';

export const Login = () => {
  const { register, handleSubmit } = useForm();

  const submitForm = async (data) => {
    try {
      const res = await authService.login(data);
      console.log(res);
    } catch (err) {
      console.log('Auth service err', err);
    }

    console.log(data)
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