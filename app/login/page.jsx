import LoginForm from '../ui/login/loginForm/loginForm.jsx';
import styles from '../ui/login/login.module.css';

const LoginPage = () => {
  return (
    <div className={styles.container}>
    <div className={styles.wrapper}>
     <LoginForm/>
    </div>
    </div>
  );
};

export default LoginPage;