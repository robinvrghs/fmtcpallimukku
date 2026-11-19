'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const API_URL = 'https://fmtcpallimukku.ac.in/api';

const withProtectedRoute = (WrappedComponent) => {
    return function WithProtectedRoute(props) {

        const [loading, setLoading] = useState(true);
        const [allowed, setAllowed] = useState(false);

        const router = useRouter();

        useEffect(() => {

            let mounted = true;

            const checkAuthentication = async () => {
                try {
                    const response = await fetch(
                        `${API_URL}/auth/check.php`,
                        {
                            method: 'GET',
                            credentials: 'include',
                            headers: {
                                'Accept': 'application/json',
                            },
                            cache: 'no-store',
                        }
                    );

                    const result = await response.json();

                    if (
                        response.ok &&
                        result.success === true &&
                        result.authenticated === true
                    ) {
                        if (mounted) {
                            setAllowed(true);
                        }
                    } else {
                        router.replace('/admin-login');
                    }
                } catch (error) {
                    console.error('Authentication check failed:', error);
                    router.replace('/admin-login');
                } finally {
                    if (mounted) {
                        setLoading(false);
                    }
                }
            };

            checkAuthentication();

            return () => {
                mounted = false;
            };
        }, [router]);

        if (loading) {
            return <p>Checking authentication...</p>;
        }

        if (!allowed) {
            return null;
        }

        return <WrappedComponent {...props} />;
    };
};

export default withProtectedRoute;
