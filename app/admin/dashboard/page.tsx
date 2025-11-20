import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { PrismaClient } from '@prisma/client'
import { logout } from '@/app/actions/auth'
import { approveModel, rejectModel, deleteModel, toggleFeatured } from '@/app/actions/admin'
import styles from './dashboard.module.css'

const prisma = new PrismaClient()

export default async function DashboardPage() {
    const cookieStore = await cookies()
    const session = cookieStore.get('admin_session')

    if (!session) {
        redirect('/admin/login')
    }

    const models = await prisma.model.findMany({
        orderBy: { createdAt: 'desc' },
        take: 100,
    })

    const pendingCount = models.filter(m => m.status === 'PENDING').length
    const activeCount = models.filter(m => m.status === 'ACTIVE').length

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div>
                    <h1 className={styles.title}>Admin Dashboard</h1>
                    <p className={styles.subtitle}>Tri Models - UAE</p>
                </div>
                <div className={styles.headerActions}>
                    <a href="/admin/bulk-add" className={styles.addButton}>+ Add Model</a>
                    <form action={logout}>
                        <button type="submit" className={styles.logoutButton}>Logout</button>
                    </form>
                </div>
            </div>

            <div className={styles.stats}>
                <div className={styles.statCard}>
                    <div className={styles.statValue}>{pendingCount}</div>
                    <div className={styles.statLabel}>Pending Applications</div>
                </div>
                <div className={styles.statCard}>
                    <div className={styles.statValue}>{activeCount}</div>
                    <div className={styles.statLabel}>Active Models</div>
                </div>
                <div className={styles.statCard}>
                    <div className={styles.statValue}>{models.length}</div>
                    <div className={styles.statLabel}>Total Models</div>
                </div>
            </div>

            <div className={styles.section}>
                <h2 className={styles.sectionTitle}>Model Applications</h2>
                <div className={styles.table}>
                    <div className={styles.tableHeader}>
                        <div>Name</div>
                        <div>Email</div>
                        <div>Location</div>
                        <div>Status</div>
                        <div>Actions</div>
                    </div>
                    {models.map((model) => (
                        <div key={model.id} className={styles.tableRow}>
                            <div className={styles.name}>
                                {model.firstName} {model.lastName}
                                {model.featured && <span className={styles.star}>⭐</span>}
                            </div>
                            <div className={styles.email}>{model.email}</div>
                            <div className={styles.location}>{model.city}, {model.country}</div>
                            <div>
                                <span className={`${styles.badge} ${styles[model.status.toLowerCase()]}`}>
                                    {model.status}
                                </span>
                            </div>
                            <div className={styles.actions}>
                                {model.status === 'PENDING' && (
                                    <>
                                        <form action={approveModel.bind(null, model.id)} className={styles.inlineForm}>
                                            <button type="submit" className={styles.approveBtn}>Approve</button>
                                        </form>
                                        <form action={rejectModel.bind(null, model.id)} className={styles.inlineForm}>
                                            <button type="submit" className={styles.rejectBtn}>Reject</button>
                                        </form>
                                    </>
                                )}
                                {model.status === 'ACTIVE' && (
                                    <form action={toggleFeatured.bind(null, model.id, model.featured)} className={styles.inlineForm}>
                                        <button type="submit" className={styles.featureBtn}>
                                            {model.featured ? 'Unfeature' : 'Feature'}
                                        </button>
                                    </form>
                                )}
                                <form action={deleteModel.bind(null, model.id)} className={styles.inlineForm}>
                                    <button type="submit" className={styles.deleteBtn}>Delete</button>
                                </form>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
