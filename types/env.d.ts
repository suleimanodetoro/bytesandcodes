// types/env.d.ts
declare namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_SUPABASE_URL: string
      NEXT_PUBLIC_SUPABASE_ANON_KEY: string
      RESEND_API_KEY: string
      ADMIN_EMAIL: string
      NEXT_PUBLIC_ADMIN_URL: string
    }
  }