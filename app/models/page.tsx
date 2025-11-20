import { getModels } from '@/app/actions/models'
import ModelCard from '@/components/models/ModelCard'
import ModelFilters from '@/components/models/ModelFilters'
import styles from './models.module.css'

export const dynamic = 'force-dynamic'

export default async function ModelsPage({
    searchParams,
}: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
    const resolvedSearchParams = await searchParams
    const gender = typeof resolvedSearchParams.gender === 'string' ? resolvedSearchParams.gender : undefined
    const minHeight = typeof resolvedSearchParams.minHeight === 'string' ? parseInt(resolvedSearchParams.minHeight) : undefined
    const maxHeight = typeof resolvedSearchParams.maxHeight === 'string' ? parseInt(resolvedSearchParams.maxHeight) : undefined
    const minAge = typeof resolvedSearchParams.minAge === 'string' ? parseInt(resolvedSearchParams.minAge) : undefined
    const maxAge = typeof resolvedSearchParams.maxAge === 'string' ? parseInt(resolvedSearchParams.maxAge) : undefined
    const category = typeof resolvedSearchParams.category === 'string' ? resolvedSearchParams.category : undefined
    const hairColor = typeof resolvedSearchParams.hairColor === 'string' ? resolvedSearchParams.hairColor : undefined
    const eyeColor = typeof resolvedSearchParams.eyeColor === 'string' ? resolvedSearchParams.eyeColor : undefined
    const experience = typeof resolvedSearchParams.experience === 'string' ? resolvedSearchParams.experience : undefined
    const city = typeof resolvedSearchParams.city === 'string' ? resolvedSearchParams.city : undefined

    const { models } = await getModels({
        gender,
        minHeight,
        maxHeight,
        minAge,
        maxAge,
        category,
        hairColor,
        eyeColor,
        experience,
        city,
    })

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>Our Models</h1>
                <p className={styles.subtitle}>Discover the faces of tomorrow.</p>
            </div>

            <div className={styles.layout}>
                <aside className={styles.sidebar}>
                    <ModelFilters />
                </aside>

                <main className={styles.main}>
                    {models.length === 0 ? (
                        <div className={styles.emptyState}>
                            No models found matching your criteria.
                        </div>
                    ) : (
                        <div className={styles.grid}>
                            {models.map((model) => (
                                <ModelCard key={model.id} model={model as any} />
                            ))}
                        </div>
                    )}
                </main>
            </div>
        </div>
    )
}
