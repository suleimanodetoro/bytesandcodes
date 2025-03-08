// types/supabase.ts
export type Database = {
    public: {
      Tables: {
        mentorship_applications: {
          Row: {
            id: string
            created_at: string
            updated_at: string
            first_name: string
            last_name: string
            email: string
            phone: string
            location: string
            job_role: string
            experience_level: 'beginner' | 'intermediate' | 'advanced'
            education: string
            primary_languages: string[]
            github_profile: string | null
            portfolio_url: string | null
            areas_of_interest: string[]
            mentorship_goals: string
            time_commitment: '5-10hrs' | '10-15hrs' | '15+hrs'
            preferred_meeting_times: string[]
            previous_mentorship: boolean
            heard_about_us: string
            additional_info: string | null
            status: string
            reviewer_notes: string | null
            reviewed_at: string | null
            reviewed_by: string | null
          }
          Insert: Omit<Database['public']['Tables']['mentorship_applications']['Row'], 'id' | 'created_at' | 'updated_at'>
          Update: Partial<Database['public']['Tables']['mentorship_applications']['Row']>
        }
      }
    }
  }