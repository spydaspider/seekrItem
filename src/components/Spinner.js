import styles from './Spinner.module.css';

const Spinner = ({ size = 'medium', fullscreen = true }) => {
  const spinner = (
    <div className={`${styles.spinner} ${styles[size]}`} />
  );

  return fullscreen ? (
    <div className={styles.wrapper}>{spinner}</div>
  ) : (
    spinner
  );
};

export default Spinner;
