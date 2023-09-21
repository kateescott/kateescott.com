import styles from './project_info.module.css';
import { Spacer } from '@chakra-ui/layout'

export function ProjectInfo(
    {
        title,
        subtitle,
        description,
        organization,
        role,
        date
    }: {
        title: string,
        subtitle: string,
        description: React.ReactNode,
        organization: string,
        role: string,
        date: string
    }
) {
    return (
        <div className={styles.projectInfo}>
            <h2 className={styles.title}>{title}</h2>
            <Spacer />
            <h3 className={styles.subtitle}>{subtitle}</h3>
            <div className={styles.description}>
                {description}
            </div>
            <div className={styles.attributes}>
                <div>
                    <div className={styles.attributeLabel}>Organisation</div>
                    <div>{organization}</div>
                </div>
                <div>
                    <div className={styles.attributeLabel}>Role</div>
                    <div>{role}</div>
                </div>
                <div>
                    <div className={styles.attributeLabel}>Date</div>
                    <div>{date}</div>
                </div>
            </div>
        </div>
    )
}

