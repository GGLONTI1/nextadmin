import styles from '@/app/ui/login/login.module.css';
import Loginform from "../ui/login/loginForm/loginForm";


const LoginPage = () => {
    return (
        <div className={styles.container}>
            <Loginform/>
        </div>
    )
}

export default LoginPage;