export function Title({size, children}: { size: 'small' | 'medium' | 'large', children: React.ReactNode }) {
    const tagName = {
        'small': 'h4',
        'medium': 'h3',
        'large': 'h2',
        'xlarge': 'h1'
    }[size];

    return <tagName>{children}</tagName>
}

export function Text({size}: { size: 'small' }) {

}
