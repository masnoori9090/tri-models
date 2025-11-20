import Link from 'next/link';
import Image from 'next/image';
import styles from './ModelCard.module.css';

interface ModelCardProps {
    model: {
        id: string;
        firstName: string;
        lastName: string;
        city: string;
        height: number;
        categories: string; // JSON string
        photos: { url: string }[];
    };
}

export default function ModelCard({ model }: ModelCardProps) {
    const primaryPhoto = model.photos[0]?.url || '/placeholder.jpg';
    const categories = JSON.parse(model.categories);
    const mainCategory = categories[0] || 'Model';

    return (
        <Link href={`/models/${model.id}`} className={styles.card}>
            <div className={styles.imageWrapper}>
                <Image
                    src={primaryPhoto}
                    alt={`${model.firstName} ${model.lastName}`}
                    fill
                    className={styles.image}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className={styles.overlay}>
                    <span className={styles.viewProfile}>View Profile</span>
                </div>
            </div>
            <div className={styles.info}>
                <h3 className={styles.name}>{model.firstName} {model.lastName}</h3>
                <div className={styles.details}>
                    <span className={styles.location}>📍 {model.city}</span>
                    <span className={styles.height}>{model.height} cm</span>
                </div>
                <span className={styles.category}>{mainCategory}</span>
            </div>
        </Link>
    );
}
