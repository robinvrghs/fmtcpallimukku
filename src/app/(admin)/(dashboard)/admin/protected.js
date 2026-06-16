import { useEffect, useState } from 'react';

import { useRouter } from 'next/navigation';

const withProtectedRoute = (WrappedComponent) => {
    return function WithProtectedRoute(props) {

        const [loading, setLoading] = useState(true);
        const [allowed, setAllowed] = useState(false);

        const router = useRouter();

        useEffect(() => {
            const storedUsername = sessionStorage.getItem('username');

            if (!storedUsername) {
                router.replace('/admin-login')
            } else {
                setAllowed(true);
            }
            setLoading(false);
        }, []);

        if (loading) return <p>Loading</p>;
        if (!allowed) return null;

        return <WrappedComponent {...props} />;
    };
};


export default withProtectedRoute;