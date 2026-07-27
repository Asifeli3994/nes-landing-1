export interface WaitlistRow {
  id: string;
  email: string;
  created_at: string;
  queue_number: number | null;
  ref_code: string;
  referred_by: string | null;
  source: string | null;
  consent_at: string;
  confirmed: boolean;
  confirmed_at: string | null;
}

/** Columns the public landing form is allowed to send on signup. */
export type WaitlistInsert = Pick<WaitlistRow, 'email' | 'consent_at'> &
  Partial<Pick<WaitlistRow, 'source' | 'referred_by'>>;
