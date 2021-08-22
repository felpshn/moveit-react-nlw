import styles from './Profile.module.scss';

export default function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/felpshn.png" alt="Felipe Lara" />
      <div>
        <strong>Felipe Lara</strong>
      </div>
    </div>
  );
}
