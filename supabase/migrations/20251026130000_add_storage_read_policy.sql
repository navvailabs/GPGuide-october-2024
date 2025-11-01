/*
# [Operation Name]
Enable Public Read Access for Storage Bucket

## Query Description:
This operation creates a security policy to allow public, read-only access to the 'website-assets' storage bucket. This is necessary for the website to list and display images from the bucket. It does not expose any database tables or sensitive information and is a standard procedure for public buckets.

## Metadata:
- Schema-Category: "Structural"
- Impact-Level: "Low"
- Requires-Backup: false
- Reversible: true

## Structure Details:
- Affects table: storage.objects
- Adds policy: "Public Read Access for website-assets"

## Security Implications:
- RLS Status: Enabled
- Policy Changes: Yes - Adds a SELECT policy on storage.objects for a specific bucket.
- Auth Requirements: None - This policy applies to public (anonymous) access.

## Performance Impact:
- Indexes: None
- Triggers: None
- Estimated Impact: Negligible performance impact. Enables read operations on the storage bucket.
*/

-- This policy grants public read-only access to the 'website-assets' bucket.
-- It allows your website to list and display the images you've uploaded.
-- This is safe for a public bucket containing non-sensitive assets like website images.

-- First, drop the policy if it exists, to avoid errors on re-running.
DROP POLICY IF EXISTS "Public Read Access for website-assets" ON storage.objects;

-- Then, create the policy.
CREATE POLICY "Public Read Access for website-assets"
ON storage.objects FOR SELECT
USING ( bucket_id = 'website-assets' );
