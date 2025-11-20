import { PrismaClient } from '@prisma/client'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import styles from './model-detail.module.css'

const prisma = new PrismaClient()

export default async function ModelDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    const model = await prisma.model.findUnique({
        where: { id },
        include: {
            photos: {
                orderBy: { orderNumber: 'asc' }
            }
        }
    })

    if (!model) {
        notFound()
    }

    const primaryPhoto = model.photos.find(p => p.isPrimary)?.url || model.photos[0]?.url || '/placeholder.jpg'
    const allPhotos = model.photos.filter(p => p.url)

    return (
        <div className={styles.container}>
            {/* Hero Section */}
            <div className={styles.hero}>
                <Image
                    src={primaryPhoto}
                    alt={`${model.firstName} ${model.lastName}`}
                    fill
                    className={styles.heroImage}
                    priority
                />
                <div className={styles.heroContent}>
                    <h1 className={styles.name}>{model.firstName} {model.lastName}</h1>
                    <div className={styles.meta}>
                        <span>{model.city}, {model.country}</span>
                        <span>•</span>
                        <span>{model.gender}</span>
                        <span>•</span>
                        <span>{model.height} cm</span>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className={styles.content}>
                <div className={styles.topSection}>
                    {/* Stats Sidebar */}
                    <aside>
                        <div className={styles.stats}>
                            <h2 className={styles.sectionTitle}>Measurements</h2>

                            <div className={styles.statRow}>
                                <span className={styles.statLabel}>Height</span>
                                <span className={styles.statValue}>{model.height} cm</span>
                            </div>
                            {model.bustChest && (
                                <div className={styles.statRow}>
                                    <span className={styles.statLabel}>Bust/Chest</span>
                                    <span className={styles.statValue}>{model.bustChest} cm</span>
                                </div>
                            )}
                            {model.waist && (
                                <div className={styles.statRow}>
                                    <span className={styles.statLabel}>Waist</span>
                                    <span className={styles.statValue}>{model.waist} cm</span>
                                </div>
                            )}
                            {model.hips && (
                                <div className={styles.statRow}>
                                    <span className={styles.statLabel}>Hips</span>
                                    <span className={styles.statValue}>{model.hips} cm</span>
                                </div>
                            )}
                            {model.shoeSize && (
                                <div className={styles.statRow}>
                                    <span className={styles.statLabel}>Shoe</span>
                                    <span className={styles.statValue}>{model.shoeSize}</span>
                                </div>
                            )}
                            {model.hairColor && (
                                <div className={styles.statRow}>
                                    <span className={styles.statLabel}>Hair</span>
                                    <span className={styles.statValue}>{model.hairColor}</span>
                                </div>
                            )}
                            {model.eyeColor && (
                                <div className={styles.statRow}>
                                    <span className={styles.statLabel}>Eyes</span>
                                    <span className={styles.statValue}>{model.eyeColor}</span>
                                </div>
                            )}
                            {model.experienceLevel && (
                                <div className={styles.statRow}>
                                    <span className={styles.statLabel}>Experience</span>
                                    <span className={styles.statValue}>{model.experienceLevel}</span>
                                </div>
                            )}

                            <button className={styles.bookButton}>Book {model.firstName}</button>
                        </div>
                    </aside>

                    {/* Quick Preview Gallery */}
                    <div className={styles.quickGallery}>
                        {allPhotos.slice(0, 4).map((photo) => (
                            <div key={photo.id} className={styles.quickImage}>
                                <Image
                                    src={photo.url}
                                    alt={`${model.firstName} portfolio`}
                                    fill
                                    className={styles.quickImageImg}
                                    sizes="(max-width: 768px) 50vw, 25vw"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Full Photo Gallery */}
                {allPhotos.length > 4 && (
                    <div className={styles.gallerySection}>
                        <h2 className={styles.sectionTitle}>Portfolio</h2>
                        <div className={styles.gallery}>
                            {allPhotos.map((photo) => (
                                <div key={photo.id} className={styles.galleryImageWrapper}>
                                    <Image
                                        src={photo.url}
                                        alt={`${model.firstName} portfolio`}
                                        fill
                                        className={styles.galleryImage}
                                        sizes="(max-width: 640px) 100vw, (max-width: 968px) 50vw, 33vw"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
