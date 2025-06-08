export interface Job {
  id: number;
  title: string;
  description: string;
  budget: string;
  location: string;
  postedTime: string;
  tags: string[];
}

export interface JobsData {
  jobs: Job[];
}
