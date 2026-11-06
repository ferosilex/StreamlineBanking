import type { ReactNode } from 'react';

export default function Card({children}: {children: ReactNode}) {
    return (
        <div style={{ border: '1px solid #f3e7e7', borderRadius: 8, padding: 16, marginBottom: 12 }}>
            {children}
        </div>
    );
}