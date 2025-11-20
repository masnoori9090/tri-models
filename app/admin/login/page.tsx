import { login } from '@/app/actions/auth'
import styles from './login.module.css'

export default function LoginPage({
    searchParams,
}: {
    searchParams: Promise<{ error?: string }>
}) {
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <h1 className={styles.title}>Client Login</h1>
                <p className={styles.subtitle}>Access the Tri Models dashboard.</p>

                <form action={login} className={styles.form}>
                    <div className={styles.group}>
                        <label htmlFor="username" className={styles.label}>Username</label>
                        <input type="text" id="username" name="username" required className={styles.input} />
                    </div>

                    <div className={styles.group}>
                        <label htmlFor="password" className={styles.label}>Password</label>
                        <input type="password" id="password" name="password" required className={styles.input} />
                    </div>

                    <button type="submit" className={styles.button}>Login</button>
                </form>

                <p className={styles.hint}>Default: admin / admin123</p>
            </div>
        </div>
    )
}
