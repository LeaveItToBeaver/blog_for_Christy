'use Client'

import { useState, useEffect } from 'react';
import { createClient } from '@/utils/supabase/client';
import { useRouter } from 'next/navigation';
import { User } from '@supabase/supabase-js';

export function useAuth() {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();
    const supabase = createClient();

    useEffect(() => {
        const getSession = async () => {
            const { data: { user } } = await supabase.auth.getUser();
            setUser(user);
            setLoading(false);
        }

        getSession

        const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
            if (event === 'SIGNED_OUT' || !session) {
                router.push('/secret-garden-gate');
            } else {
                setUser(session.user);
            }
        });

        return () => subscription.unsubscribe();
    }, [router, supabase.auth]);

    const signIn = async (email: string, password: string) => {
        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });
        return { data, error };

    }
    const signOut = async () => {
        const { error } = await supabase.auth.signOut();
        if (!error) {
            router.push('/secret-garden-gate');
        }
        return error;
    }

    const signUp = async (email: string, password: string) => {
        const { data, error } = await supabase.auth.signUp({
            email,
            password,
        });
        return { data, error };
    }

    return {
        user,
        loading,
        signIn,
        signOut,
        signUp,
        isAuthenticated: !!user,
    }
}