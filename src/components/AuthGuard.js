'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';

export default function AuthGuard({ children }) {
    const { authenticated, loading } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!loading && !authenticated) {
            router.replace('/admin-login');
        }
    }, [loading, authenticated, router]);

    if (loading) {
        return <div>Checking authentication...</div>;
    }

    if (!authenticated) {
        return null;
    }

    return children;
}