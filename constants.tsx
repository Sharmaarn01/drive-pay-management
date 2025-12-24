import { Driver, Route } from './types';

export const INITIAL_DRIVERS: Driver[] = [];
export const INITIAL_ROUTES: Route[] = [];

// This tells Vite to look for variables in your Vercel Settings
export const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
export const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;