import registerImage from '../../assets/images/register.svg';
import styles from './Auth.module.scss';
import { Link } from 'react-router-dom';

export const Register = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={ `${styles.wrapper} card-shadow` }>
          <div className={styles.imageSection}>
            <img className={styles.image} src={registerImage} alt='Register' />
          </div>
          <div className={styles.formSection}>
            <h2 className={styles.formSectionTitle}>Create an account</h2>

            <form className={styles.form}>
              <div className={ `${styles.inputField} mb-1` }>
                <input placeholder='First name' />
              </div>

              <div className={ `${styles.inputField} mb-1` }>
                <input placeholder='Last name' />
              </div>

              <div className={ `${styles.inputField} mb-1` }>
                <input placeholder='Email' />
              </div>

              <div className={ `${styles.inputField} mb-1` }>
                <select>
                  <option value='male'>Male</option>
                  <option value='female'>Female</option>
                </select>
              </div>

              <div className={ `${styles.inputField} mb-2` }>
                <input placeholder='Password' />
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