/*
# Create consultation_requests table

1. Purpose
   Stores consultation booking submissions from the Book a Consultation page.
   Version 1 uses simple validation and manual follow-up — no Calendly, CRM,
   payment, or automated email. Submissions are reviewed manually by the AP Future team.

2. New Tables
   - consultation_requests
     - id (uuid, primary key)
     - student_name (text, not null) — the student's name
     - grade (text, not null) — current grade level
     - school (text, nullable) — optional school name
     - email (text, not null) — primary contact email
     - phone (text, nullable) — optional phone or WeChat ID
     - location (text, not null) — country/city
     - interests (text, nullable) — areas of interest (AP, SAT, planning, etc.)
     - message (text, nullable) — what the family wants to discuss
     - preferred_contact (text, nullable) — preferred contact method (email/phone/wechat)
     - status (text, default 'new') — submission status for manual workflow
     - created_at (timestamptz, default now())

3. Security
   - Enable RLS on consultation_requests.
   - Allow anon + authenticated INSERT: any visitor can submit a consultation request.
   - Allow authenticated SELECT: only signed-in team members can read submissions.
   - No UPDATE or DELETE policies: submissions are immutable from the client.

4. Notes
   - This is a no-auth app (no sign-in screen), so INSERT uses TO anon, authenticated.
   - SELECT is restricted to authenticated so that only team members can read submissions
     via the Supabase dashboard or authenticated API calls.
*/

CREATE TABLE IF NOT EXISTS consultation_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  student_name text NOT NULL,
  grade text NOT NULL,
  school text,
  email text NOT NULL,
  phone text,
  location text NOT NULL,
  interests text,
  message text,
  preferred_contact text,
  status text NOT NULL DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE consultation_requests ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_consultation_requests" ON consultation_requests;
CREATE POLICY "anon_insert_consultation_requests"
ON consultation_requests FOR INSERT
TO anon, authenticated
WITH CHECK (true);

DROP POLICY IF EXISTS "authenticated_select_consultation_requests" ON consultation_requests;
CREATE POLICY "authenticated_select_consultation_requests"
ON consultation_requests FOR SELECT
TO authenticated
USING (true);
