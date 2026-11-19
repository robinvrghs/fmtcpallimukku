
'use client';

import {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useState,
} from 'react';

const API_URL = 'https://fmtcpallimukku.ac.in/api';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [authenticated, setAuthenticated] = useState(false);
    const [admin, setAdmin] = useState(null);
    const [csrfToken, setCsrfToken] = useState(null);
    const [loading, setLoading] = useState(true);

    const checkAuth = useCallback(async () => {
        try {
            const response = await fetch(`${API_URL}/auth/check.php`, {
                method: 'GET',
                credentials: 'include',
                cache: 'no-store',
                headers: {
                    Accept: 'application/json',
                },
            });

            const result = await response.json();

            if (
                response.ok &&
                result.success &&
                result.authenticated
            ) {
                setAuthenticated(true);
                setAdmin({
                    id: result.admin_id,
                });
                setCsrfToken(result.csrf_token);

                return true;
            }

            setAuthenticated(false);
            setAdmin(null);
            setCsrfToken(null);

            return false;

        } catch (error) {
            console.error('Authentication error:', error);

            setAuthenticated(false);
            setAdmin(null);
            setCsrfToken(null);

            return false;
        } finally {
            setLoading(false);
        }
    }, []);

    const logout = async () => {
        try {
            const response = await fetch(`${API_URL}/auth/logout.php`, {
                method: 'POST',
                credentials: 'include',
                cache: 'no-store',
                headers: {
                    Accept: 'application/json',
                    'X-CSRF-Token': csrfToken || '',
                },
            });

            const result = await response.json();

            if (!response.ok || !result.success) {
                throw new Error(result.message || 'Logout failed');
            }

            // Clear frontend authentication only after server confirms logout
            setAuthenticated(false);
            setAdmin(null);
            setCsrfToken(null);

            return true;

        } catch (error) {
            console.error('Logout error:', error);
            throw error;
        }
    };

    useEffect(() => {
        checkAuth();
    }, [checkAuth]);

    return (
        <AuthContext.Provider
            value={{
                authenticated,
                admin,
                csrfToken,
                loading,
                checkAuth,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error('useAuth must be used inside AuthProvider');
    }

    return context;
};
