import styles from './Modal.module.scss';

export const Modal = (props) => {

  const findByKey = (name) => {
    return props.children.find(child => child.key === name);
  };

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.header}>
            { findByKey('header') }
          </div>

          <div className={styles.body}>
            { findByKey('body') }
          </div>

          <div className={styles.footer}>
            <button className={styles.close} onClick={props.close}>Close</button>
            { findByKey('footer') }
          </div>
        </div>
      </div>

      <div className={ `${styles.mask} ${styles.modalClose}`} onClick={props.close}></div>
    </>
  );
}