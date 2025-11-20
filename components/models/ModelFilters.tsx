'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { useCallback } from 'react'
import styles from './ModelFilters.module.css'

export default function ModelFilters() {
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
        router.push(`/models?${createQueryString(name, value)}`, { scroll: false })
    }

    return (
        <div className={styles.container}>
            <h3 className={styles.title}>Filters</h3>

            <div className={styles.group}>
                <label className={styles.label}>Gender</label>
                <select
                    className={styles.select}
                    value={searchParams.get('gender') || 'All'}
                    onChange={(e) => handleFilterChange('gender', e.target.value)}
                >
                    <option value="All">All Genders</option>
                    <option value="Female">Female</option>
                    <option value="Male">Male</option>
                    <option value="Non-Binary">Non-Binary</option>
                </select>
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
                <label className={styles.label}>Age Range</label>
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

            <div className={styles.group}>
                <label className={styles.label}>Industry / Category</label>
                <select
                    className={styles.select}
                    value={searchParams.get('category') || 'All'}
                    onChange={(e) => handleFilterChange('category', e.target.value)}
                >
                    <option value="All">All Industries</option>

                    <optgroup label="Fashion & Modeling">
                        <option value="High Fashion">High Fashion</option>
                        <option value="Street Fashion">Street Fashion</option>
                        <option value="Runway">Runway</option>
                        <option value="Editorial">Editorial</option>
                        <option value="Commercial">Commercial</option>
                        <option value="Swimwear">Swimwear</option>
                        <option value="Lingerie">Lingerie</option>
                        <option value="Bridal">Bridal</option>
                        <option value="Fitness">Fitness Modeling</option>
                        <option value="Plus Size">Plus Size</option>
                    </optgroup>

                    <optgroup label="Corporate & Business">
                        <option value="Corporate">Corporate</option>
                        <option value="Banking">Banking & Finance</option>
                        <option value="Insurance">Insurance</option>
                        <option value="Consulting">Consulting</option>
                        <option value="Legal">Legal Services</option>
                        <option value="Business Events">Business Events</option>
                        <option value="Trade Shows">Trade Shows</option>
                        <option value="Conferences">Conferences</option>
                    </optgroup>

                    <optgroup label="Hospitality & F&B">
                        <option value="Fine Dining">Fine Dining</option>
                        <option value="Restaurants">Restaurants</option>
                        <option value="Fast Food">Fast Food</option>
                        <option value="Cafes">Cafes & Coffee Shops</option>
                        <option value="Bars">Bars & Lounges</option>
                        <option value="Nightclubs">Nightclubs</option>
                        <option value="Hotels">Hotels & Resorts</option>
                        <option value="Catering">Catering Services</option>
                    </optgroup>

                    <optgroup label="Healthcare & Wellness">
                        <option value="Hospitals">Hospitals</option>
                        <option value="Clinics">Medical Clinics</option>
                        <option value="Dental">Dental Clinics</option>
                        <option value="Pharmacy">Pharmacy</option>
                        <option value="Wellness">Wellness Centers</option>
                        <option value="Spa">Spa & Massage</option>
                        <option value="Fitness Centers">Fitness Centers</option>
                    </optgroup>

                    <optgroup label="Retail & E-commerce">
                        <option value="E-commerce">E-commerce</option>
                        <option value="Fashion Retail">Fashion Retail</option>
                        <option value="Luxury">Luxury Brands</option>
                        <option value="Beauty">Beauty & Cosmetics</option>
                        <option value="Jewelry">Jewelry</option>
                        <option value="Electronics">Electronics</option>
                        <option value="Sports Retail">Sports Equipment</option>
                        <option value="Home Decor">Home Decor</option>
                    </optgroup>

                    <optgroup label="Events & Entertainment">
                        <option value="Weddings">Weddings</option>
                        <option value="Corporate Events">Corporate Events</option>
                        <option value="Exhibitions">Exhibitions</option>
                        <option value="Product Launch">Product Launches</option>
                        <option value="Concerts">Concerts</option>
                        <option value="Festivals">Festivals</option>
                        <option value="Promotions">Promotions</option>
                    </optgroup>

                    <optgroup label="Media & Advertising">
                        <option value="TV Commercial">TV Commercials</option>
                        <option value="Film">Film & Cinema</option>
                        <option value="Photography">Photography</option>
                        <option value="Music Videos">Music Videos</option>
                        <option value="Print Ads">Print Advertising</option>
                        <option value="Social Media">Social Media Content</option>
                        <option value="Video Production">Video Production</option>
                        <option value="Podcasts">Podcasts</option>
                    </optgroup>

                    <optgroup label="Real Estate">
                        <option value="Residential">Residential Properties</option>
                        <option value="Commercial Real Estate">Commercial Properties</option>
                        <option value="Luxury Properties">Luxury Real Estate</option>
                        <option value="Property Development">Property Development</option>
                    </optgroup>

                    <optgroup label="Automotive">
                        <option value="Car Dealerships">Car Dealerships</option>
                        <option value="Luxury Cars">Luxury Vehicles</option>
                        <option value="Auto Shows">Auto Shows</option>
                        <option value="Racing">Racing & Motorsports</option>
                    </optgroup>

                    <optgroup label="Technology">
                        <option value="Software">Software Companies</option>
                        <option value="Hardware">Hardware & Gadgets</option>
                        <option value="Startups">Tech Startups</option>
                        <option value="Apps">Mobile Apps</option>
                        <option value="Gaming">Gaming</option>
                    </optgroup>

                    <optgroup label="Beauty & Personal Care">
                        <option value="Salons">Hair Salons</option>
                        <option value="Barbershops">Barbershops</option>
                        <option value="Cosmetics">Cosmetics</option>
                        <option value="Skincare">Skincare</option>
                        <option value="Fragrance">Fragrance</option>
                    </optgroup>

                    <optgroup label="Sports & Athletics">
                        <option value="Sports Brands">Sports Brands</option>
                        <option value="Gyms">Gyms & Fitness</option>
                        <option value="Athletic Wear">Athletic Wear</option>
                        <option value="Sports Events">Sports Events</option>
                    </optgroup>

                    <optgroup label="Education">
                        <option value="Universities">Universities</option>
                        <option value="Training Centers">Training Centers</option>
                        <option value="Online Courses">Online Education</option>
                        <option value="Language Schools">Language Schools</option>
                    </optgroup>

                    <optgroup label="Travel & Tourism">
                        <option value="Airlines">Airlines</option>
                        <option value="Tourism">Tourism Boards</option>
                        <option value="Travel Agencies">Travel Agencies</option>
                        <option value="Cruise Lines">Cruise Lines</option>
                    </optgroup>
                </select>
            </div>

            <div className={styles.group}>
                <label className={styles.label}>Hair Color</label>
                <select
                    className={styles.select}
                    value={searchParams.get('hairColor') || 'All'}
                    onChange={(e) => handleFilterChange('hairColor', e.target.value)}
                >
                    <option value="All">All Colors</option>
                    <option value="Black">Black</option>
                    <option value="Brown">Brown</option>
                    <option value="Blonde">Blonde</option>
                    <option value="Red">Red</option>
                    <option value="Auburn">Auburn</option>
                    <option value="Gray">Gray</option>
                    <option value="Other">Other</option>
                </select>
            </div>

            <div className={styles.group}>
                <label className={styles.label}>Eye Color</label>
                <select
                    className={styles.select}
                    value={searchParams.get('eyeColor') || 'All'}
                    onChange={(e) => handleFilterChange('eyeColor', e.target.value)}
                >
                    <option value="All">All Colors</option>
                    <option value="Brown">Brown</option>
                    <option value="Blue">Blue</option>
                    <option value="Green">Green</option>
                    <option value="Hazel">Hazel</option>
                    <option value="Gray">Gray</option>
                    <option value="Amber">Amber</option>
                </select>
            </div>

            <div className={styles.group}>
                <label className={styles.label}>Experience</label>
                <select
                    className={styles.select}
                    value={searchParams.get('experience') || 'All'}
                    onChange={(e) => handleFilterChange('experience', e.target.value)}
                >
                    <option value="All">All Levels</option>
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Professional">Professional</option>
                </select>
            </div>

            <div className={styles.group}>
                <label className={styles.label}>City</label>
                <input
                    type="text"
                    placeholder="e.g. Dubai"
                    className={styles.input}
                    value={searchParams.get('city') || ''}
                    onChange={(e) => handleFilterChange('city', e.target.value)}
                />
            </div>

            <button
                className={styles.resetButton}
                onClick={() => router.push('/models', { scroll: false })}
            >
                Reset All Filters
            </button>
        </div>
    )
}
