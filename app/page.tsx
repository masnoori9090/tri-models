import Link from 'next/link'
import { getModels } from './actions/models'
import styles from './page.module.css'
import ModelCard from '@/components/models/ModelCard'
import HomeFilters from '@/components/home/HomeFilters'

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const resolvedSearchParams = await searchParams
  const gender = typeof resolvedSearchParams.gender === 'string' ? resolvedSearchParams.gender : undefined
  const category = typeof resolvedSearchParams.category === 'string' ? resolvedSearchParams.category : undefined
  const minHeight = typeof resolvedSearchParams.minHeight === 'string' ? parseInt(resolvedSearchParams.minHeight) : undefined
  const maxHeight = typeof resolvedSearchParams.maxHeight === 'string' ? parseInt(resolvedSearchParams.maxHeight) : undefined

  const { models } = await getModels({
    gender,
    category,
    minHeight,
    maxHeight,
    limit: 12,
  })

  return (
    <div>
      {/* Hero Section - Redesigned */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Find Your Perfect Model</h1>
          <p className={styles.heroSubtitle}>
            UAE's Premier Modeling Agency - Connecting Brands with Top Talent
          </p>
          <div className={styles.heroButtons}>
            <Link href="/models" className={styles.btnPink}>
              Browse Models
            </Link>
            <Link href="/client/register" className={styles.btnWhite}>
              Register as Client
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={styles.stats}>
        <div className="container">
          <div className={styles.statsGrid}>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>500+</div>
              <div className={styles.statLabel}>Professional Models</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>200+</div>
              <div className={styles.statLabel}>Happy Clients</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>1000+</div>
              <div className={styles.statLabel}>Successful Bookings</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>60+</div>
              <div className={styles.statLabel}>Industries Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content with Sidebar Filters */}
      <section className={styles.mainSection}>
        <div className="container">
          <div className={styles.layout}>
            {/* Left Sidebar Filters */}
            <aside className={styles.sidebar}>
              <HomeFilters />
            </aside>

            {/* Models Grid */}
            <div className={styles.modelsContent}>
              <div className={styles.modelsHeader}>
                <h2>Discover Our Talent</h2>
                <p>{models.length} models available</p>
              </div>

              {models.length > 0 ? (
                <div className={styles.modelGrid}>
                  {models.map((model) => (
                    <ModelCard key={model.id} model={model} />
                  ))}
                </div>
              ) : (
                <div className={styles.noResults}>
                  <p>No models found matching your criteria.</p>
                  <Link href="/" className={styles.btnPink}>Reset Filters</Link>
                </div>
              )}

              <div className={styles.viewAll}>
                <Link href="/models" className={styles.btnOutline}>
                  View All Models
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className={styles.howItWorks}>
        <div className="container">
          <h2 className="text-center" style={{ marginBottom: '3rem' }}>How It Works</h2>
          <div className={styles.stepsGrid}>
            <div className={styles.step}>
              <div className={styles.stepNumber}>1</div>
              <h3>Browse Models</h3>
              <p>Use our advanced filters to find models that match your specific requirements</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>2</div>
              <h3>View Portfolios</h3>
              <p>Explore detailed profiles with professional photos and measurements</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>3</div>
              <h3>Book Talent</h3>
              <p>Contact us to book your selected models for your project</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className={styles.industries}>
        <div className="container">
          <h2 className="text-center" style={{ marginBottom: '3rem' }}>Industries We Serve</h2>
          <div className={styles.industryGrid}>
            <Link href="/?category=High Fashion" className={styles.industryCard}>
              <div className={styles.industryIcon}>👗</div>
              <h3>Fashion</h3>
            </Link>
            <Link href="/?category=Corporate" className={styles.industryCard}>
              <div className={styles.industryIcon}>💼</div>
              <h3>Corporate</h3>
            </Link>
            <Link href="/?category=Fine Dining" className={styles.industryCard}>
              <div className={styles.industryIcon}>🍽️</div>
              <h3>Hospitality</h3>
            </Link>
            <Link href="/?category=E-commerce" className={styles.industryCard}>
              <div className={styles.industryIcon}>🛍️</div>
              <h3>E-commerce</h3>
            </Link>
            <Link href="/?category=Hospitals" className={styles.industryCard}>
              <div className={styles.industryIcon}>🏥</div>
              <h3>Healthcare</h3>
            </Link>
            <Link href="/?category=Luxury Properties" className={styles.industryCard}>
              <div className={styles.industryIcon}>🏢</div>
              <h3>Real Estate</h3>
            </Link>
            <Link href="/?category=TV Commercial" className={styles.industryCard}>
              <div className={styles.industryIcon}>📺</div>
              <h3>Media</h3>
            </Link>
            <Link href="/?category=Luxury Cars" className={styles.industryCard}>
              <div className={styles.industryIcon}>🚗</div>
              <h3>Automotive</h3>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className={styles.whyChoose}>
        <div className="container">
          <h2 className="text-center" style={{ marginBottom: '3rem' }}>Why Choose Tri Models?</h2>
          <div className={styles.featuresGrid}>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>⭐</div>
              <h3>Premium Talent</h3>
              <p>Carefully vetted professional models from across the UAE and beyond</p>
            </div>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>🎯</div>
              <h3>Perfect Match</h3>
              <p>Advanced filtering system to find exactly what you need</p>
            </div>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>⚡</div>
              <h3>Quick Booking</h3>
              <p>Streamlined process from discovery to confirmed booking</p>
            </div>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>🌍</div>
              <h3>Diverse Portfolio</h3>
              <p>Models for every industry and project type</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className="container text-center">
          <h2>Ready to Get Started?</h2>
          <p style={{ marginBottom: '2rem', fontSize: '1.125rem' }}>
            Join hundreds of satisfied clients who trust Tri Models
          </p>
          <div className={styles.ctaButtons}>
            <Link href="/client/register" className={styles.btnPink}>
              Register as Client
            </Link>
            <Link href="/onboarding" className={styles.btnWhite}>
              Become a Model
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
