'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { useCallback } from 'react'
import styles from './HomeFilters.module.css'

export default function HomeFilters() {
    const router = useRouter()
    const searchParams = useSearchParams()

    const createQueryString = useCallback(
        (name: string, value: string) => {
            const params = new URLSearchParams(searchParams.toString())
            if (value && value !== 'All' && value !== '') {
                params.set(name, value)
            } else {
                params.delete(name)
            }
            return params.toString()
        },
        [searchParams]
    )

    const handleFilterChange = (name: string, value: string) => {
        router.push(`/?${createQueryString(name, value)}`, { scroll: false })
    }

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h3 className={styles.title}>Filter Models</h3>
                {(searchParams.toString().length > 0) && (
                    <button
                        onClick={() => router.push('/', { scroll: false })}
                        className={styles.clearBtn}
                    >
                        Clear
                    </button>
                )}
            </div>

            <div className={styles.group}>
                <label className={styles.label}>Industry</label>
                <select
                    className={styles.select}
                    value={searchParams.get('category') || 'All'}
                    onChange={(e) => handleFilterChange('category', e.target.value)}
                >
                    <option value="All">All Industries</option>
                    <optgroup label="Fashion">
                        <option value="High Fashion">High Fashion</option>
                        <option value="Commercial">Commercial</option>
                        <option value="Runway">Runway</option>
                    </optgroup>
                    <optgroup label="Business">
                        <option value="Corporate">Corporate</option>
                        <option value="Events">Events</option>
                    </optgroup>
                    <optgroup label="Hospitality">
                        <option value="Restaurants">Restaurants</option>
                        <option value="Hotels">Hotels</option>
                    </optgroup>
                    <option value="Healthcare">Healthcare</option>
                    <option value="Real Estate">Real Estate</option>
                    <option value="Automotive">Automotive</option>
                </select>
            </div>

            <div className={styles.group}>
                <label className={styles.label}>Gender</label>
                <div className={styles.radioGroup}>
                    {['Female', 'Male', 'Non-Binary'].map((g) => (
                        <label key={g} className={styles.radioLabel}>
                            <input
                                type="radio"
                                name="gender"
                                value={g}
                                checked={searchParams.get('gender') === g}
                                onChange={(e) => handleFilterChange('gender', e.target.value)}
                                className={styles.radio}
                            />
                            {g}
                        </label>
                    ))}
                </div>
            </div>

            <div className={styles.group}>
                <label className={styles.label}>Height (cm)</label>
                <div className={styles.row}>
                    <input
                        type="number"
                        placeholder="Min"
                        className={styles.input}
                        value={searchParams.get('minHeight') || ''}
                        onChange={(e) => handleFilterChange('minHeight', e.target.value)}
                    />
                    <span className={styles.separator}>-</span>
                    <input
                        type="number"
                        placeholder="Max"
                        className={styles.input}
                        value={searchParams.get('maxHeight') || ''}
                        onChange={(e) => handleFilterChange('maxHeight', e.target.value)}
                    />
                </div>
            </div>

            <div className={styles.group}>
                <label className={styles.label}>Age</label>
                <div className={styles.row}>
                    <input
                        type="number"
                        placeholder="Min"
                        className={styles.input}
                        value={searchParams.get('minAge') || ''}
                        onChange={(e) => handleFilterChange('minAge', e.target.value)}
                    />
                    <span className={styles.separator}>-</span>
                    <input
                        type="number"
                        placeholder="Max"
                        className={styles.input}
                        value={searchParams.get('maxAge') || ''}
                        onChange={(e) => handleFilterChange('maxAge', e.target.value)}
                    />
                </div>
            </div>

            <button
                className={styles.applyButton}
                onClick={() => router.push('/models')}
            >
                Advanced Search
            </button>
        </div>
    )
}
