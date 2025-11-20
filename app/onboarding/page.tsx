'use client'

import { submitApplication } from '@/app/actions/submit-application'
import styles from './onboarding.module.css'

export default function OnboardingPage() {
    return (
        <div className={styles.container}>
            <div className={styles.formWrapper}>
                <h1 className={styles.title}>Join us at Tri-Models</h1>

                <form action={submitApplication} className={styles.form}>
                    <div className={styles.formGroup}>
                        <label htmlFor="name" className={styles.label}>Name *</label>
                        <input type="text" id="name" name="name" required className={styles.input} />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="nationality" className={styles.label}>Nationality *</label>
                        <select id="nationality" name="nationality" required className={styles.select}>
                            <option value="">Select nationality</option>
                            <option value="UAE">United Arab Emirates</option>
                            <option value="Saudi Arabia">Saudi Arabia</option>
                            <option value="Egypt">Egypt</option>
                            <option value="Lebanon">Lebanon</option>
                            <option value="Jordan">Jordan</option>
                            <option value="India">India</option>
                            <option value="Pakistan">Pakistan</option>
                            <option value="Philippines">Philippines</option>
                            <option value="Russia">Russia</option>
                            <option value="Ukraine">Ukraine</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="age" className={styles.label}>Age *</label>
                        <input type="number" id="age" name="age" required className={styles.input} min="16" max="65" />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="height" className={styles.label}>Height</label>
                        <input type="number" id="height" name="height" className={styles.input} placeholder="cm" />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="whatsapp" className={styles.label}>Whatsapp Number *</label>
                        <div className={styles.phoneGroup}>
                            <select name="whatsappCode" className={styles.phoneCode}>
                                <option value="+971">🇦🇪 +971</option>
                                <option value="+966">🇸🇦 +966</option>
                                <option value="+20">🇪🇬 +20</option>
                                <option value="+91">🇮🇳 +91</option>
                                <option value="+92">🇵🇰 +92</option>
                                <option value="+63">🇵🇭 +63</option>
                            </select>
                            <input type="tel" id="whatsapp" name="whatsapp" required className={styles.phoneInput} />
                        </div>
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="calling" className={styles.label}>Calling Number</label>
                        <div className={styles.phoneGroup}>
                            <select name="callingCode" className={styles.phoneCode}>
                                <option value="+971">🇦🇪 +971</option>
                                <option value="+966">🇸🇦 +966</option>
                                <option value="+20">🇪🇬 +20</option>
                                <option value="+91">🇮🇳 +91</option>
                                <option value="+92">🇵🇰 +92</option>
                                <option value="+63">🇵🇭 +63</option>
                            </select>
                            <input type="tel" id="calling" name="calling" className={styles.phoneInput} />
                        </div>
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="email" className={styles.label}>Email</label>
                        <input type="email" id="email" name="email" className={styles.input} />
                    </div>

                    <div className={styles.formGroup}>
                        <label className={styles.label}>Portfolio • Polaroids • CV • Video Resume *</label>
                        <div className={styles.uploadArea}>
                            <div className={styles.uploadIcon}>📤</div>
                            <p className={styles.uploadText}>
                                <span className={styles.uploadLink}>Choose a file to upload</span> or drag and drop here
                            </p>
                            <input type="text" name="portfolio" placeholder="Or paste image URL here" className={styles.input} style={{ marginTop: '1rem' }} />
                        </div>
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="instagram" className={styles.label}>Instagram *</label>
                        <input type="text" id="instagram" name="instagram" required className={styles.input} placeholder="Drop your Instagram URL" />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="location" className={styles.label}>Current Location *</label>
                        <select id="location" name="location" required className={styles.select}>
                            <option value="">Select location</option>
                            <option value="Dubai">Dubai</option>
                            <option value="Abu Dhabi">Abu Dhabi</option>
                            <option value="Sharjah">Sharjah</option>
                            <option value="Ajman">Ajman</option>
                            <option value="Ras Al Khaimah">Ras Al Khaimah</option>
                            <option value="Fujairah">Fujairah</option>
                            <option value="Umm Al Quwain">Umm Al Quwain</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="passion" className={styles.label}>Choose your Passion *</label>
                        <select id="passion" name="passion" required className={styles.select}>
                            <option value="">Select your passion</option>
                            <option value="Fashion">Fashion Modeling</option>
                            <option value="Commercial">Commercial Modeling</option>
                            <option value="Runway">Runway</option>
                            <option value="Editorial">Editorial</option>
                            <option value="Fitness">Fitness Modeling</option>
                            <option value="Acting">Acting</option>
                            <option value="Hosting">Event Hosting</option>
                            <option value="Influencer">Social Media Influencer</option>
                        </select>
                    </div>

                    <button type="submit" className={styles.submitButton}>Submit</button>
                </form>
            </div>
        </div>
    )
}
