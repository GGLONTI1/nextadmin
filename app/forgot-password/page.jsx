import styles from "@/app/ui/forgot-password/forgotPassword.module.css"
import ForgotPasswordForm from "../ui/forgot-password/forgotPasswordForm/forgotPasswordForm";

const ForgotPassword = () => {
    return (
        <div className={styles.container}>
             <ForgotPasswordForm/>
        </div>
    )
}

export default ForgotPassword;