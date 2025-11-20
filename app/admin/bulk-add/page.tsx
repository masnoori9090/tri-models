import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { bulkAddModel } from '@/app/actions/admin'
import styles from './bulk-add.module.css'

export default async function BulkAddPage() {
    const cookieStore = await cookies()
    const session = cookieStore.get('admin_session')

    if (!session) {
        redirect('/admin/login')
    }

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>Add Model</h1>
                <a href="/admin/dashboard" className={styles.backLink}>← Back to Dashboard</a>
            </div>

            <div className={styles.formCard}>
                <form action={bulkAddModel} className={styles.form}>
                    <div className={styles.grid}>
                        <div className={styles.formGroup}>
                            <label htmlFor="firstName" className={styles.label}>First Name *</label>
                            <input type="text" id="firstName" name="firstName" required className={styles.input} />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="lastName" className={styles.label}>Last Name *</label>
                            <input type="text" id="lastName" name="lastName" required className={styles.input} />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="email" className={styles.label}>Email *</label>
                            <input type="email" id="email" name="email" required className={styles.input} />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="phone" className={styles.label}>Phone *</label>
                            <input type="tel" id="phone" name="phone" required className={styles.input} />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="dateOfBirth" className={styles.label}>Date of Birth *</label>
                            <input type="date" id="dateOfBirth" name="dateOfBirth" required className={styles.input} />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="gender" className={styles.label}>Gender *</label>
                            <select id="gender" name="gender" required className={styles.select}>
                                <option value="Female">Female</option>
                                <option value="Male">Male</option>
                                <option value="Non-Binary">Non-Binary</option>
                            </select>
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="city" className={styles.label}>City *</label>
                            <input type="text" id="city" name="city" required className={styles.input} placeholder="Dubai" />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="country" className={styles.label}>Country *</label>
                            <input type="text" id="country" name="country" required className={styles.input} placeholder="UAE" />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="height" className={styles.label}>Height (cm) *</label>
                            <input type="number" step="0.1" id="height" name="height" required className={styles.input} />
                        </div>

                        <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                            <label htmlFor="categories" className={styles.label}>Categories (JSON format)</label>
                            <input type="text" id="categories" name="categories" className={styles.input} defaultValue='["Fashion"]' />
                        </div>
                    </div>

                    <div className={styles.section}>
                        <h3 className={styles.sectionTitle}>Photos (URLs)</h3>
                        <div className={styles.grid}>
                            <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                                <label htmlFor="photo1" className={styles.label}>Photo 1 (Primary) *</label>
                                <input type="url" id="photo1" name="photo1" required className={styles.input} placeholder="https://..." />
                            </div>

                            <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                                <label htmlFor="photo2" className={styles.label}>Photo 2</label>
                                <input type="url" id="photo2" name="photo2" className={styles.input} placeholder="https://..." />
                            </div>

                            <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                                <label htmlFor="photo3" className={styles.label}>Photo 3</label>
                                <input type="url" id="photo3" name="photo3" className={styles.input} placeholder="https://..." />
                            </div>

                            <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                                <label htmlFor="photo4" className={styles.label}>Photo 4</label>
                                <input type="url" id="photo4" name="photo4" className={styles.input} placeholder="https://..." />
                            </div>

                            <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                                <label htmlFor="photo5" className={styles.label}>Photo 5</label>
                                <input type="url" id="photo5" name="photo5" className={styles.input} placeholder="https://..." />
                            </div>
                        </div>
                    </div>

                    <button type="submit" className={styles.submitButton}>Add Model</button>
                </form>
            </div>
        </div>
    )
}
