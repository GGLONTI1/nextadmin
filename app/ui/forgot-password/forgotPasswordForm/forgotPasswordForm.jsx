"use client"
import { authenticate, resetPassword } from "@/app/lib/actions";
import styles from "./forgotPasswordForm.module.css";
import { useFormState } from "react-dom";
import Link from "next/link";

const LoginForm = () => {
   const [state, formAction] = useFormState(resetPassword, undefined);
  
    return (
  
      <form action={formAction} className={styles.form}>
        <h1>Forgot Password</h1>
        <input type="email" placeholder="email" name="email" />
        <button>Send Email</button>
      </form>
  
    );
  };
  
  export default LoginForm;