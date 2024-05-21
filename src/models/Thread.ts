export interface Thread {
  id: string;
  question_id: number;
  thread_id: string;
  subject_id: number;
  subject: string;
  question: string;
  text: string;
  created_at: string;
  team: string;
  reply_to?: string;
  score?: number;
  acknowledged?: boolean;
}
