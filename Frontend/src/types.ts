
export interface CaseStudy {
  id: string;
  title: string;
  location: string;
  timeline: string;
  role: string;
  goal: string;
  strategy: string;
  execution: string;
  outcome: string;
  metric: number;
  metricLabel: string;
  image: string;
}

export interface Skill {
  name: string;
  description: string;
  percentage: number;
}

export interface GalleryItem {
  id: string;
  type: 'photography' | 'design' | 'video';
  title: string;
  imageUrl: string;
}
