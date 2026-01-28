
import { CaseStudy, Skill, GalleryItem } from './types';
import CaseStudy1 from '@/Sources/AL THARIO.jpeg';
import CaseStudy2 from '@/Sources/ZG.jpeg';
import Case1 from '@/Sources/Case 1.jpeg';
import Case2 from '@/Sources/Case 2.jpeg';
import Video2 from '@/Sources/Video 2.mp4';
import Video3 from '@/Sources/Video 3.mp4';
import Video4 from '@/Sources/Video 4.mp4';
import Video5 from '@/Sources/Video 5.mp4';
import Video6 from '@/Sources/Video 6.mp4';
import CreativeLabImage from '@/Sources/creative.jpeg';

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: '01',
    title: 'Al Thario',
    location: 'Dubai, UAE',
    timeline: '2025 – Present',
    role: 'Social Media & Content Strategist',
    goal: 'Scale brand visibility through high-impact short-form video storytelling and strategic posting systems.',
    strategy: 'Managed the transition from pure content creation to a full-cycle social media architecture, focusing on messaging clarity.',
    execution: 'Developed a consistent posting structure, high-fidelity reel production, and trend-aligned brand positioning.',
    outcome: 'Immediate organizational impact resulting in a performance-driven salary increase and expanded role within 60 days.',
    metric: 60,
    metricLabel: 'Days to Promotion',
    image: CaseStudy1
  },
  {
    id: '02',
    title: 'Zero Gravity Photography',
    location: 'Chennai, India',
    timeline: 'Nov 2024 – May 2025',
    role: 'Social Media Marketing Strategist & Content Creator',
    goal: 'Elevate brand aesthetics and align high-end product messaging with customer intent across B2B and B2C segments.',
    strategy: 'Directly collaborated with the Managing Director to bridge the gap between creative production and sales performance.',
    execution: 'Led photography and videography for social campaigns, coordinating with design and production teams for premium reel assets.',
    outcome: 'Achieved high-fidelity brand consistency across luxury verticals, ensuring every post contributed to long-term trust.',
    metric: 95,
    metricLabel: '% Brand Consistency',
    image: CaseStudy2
  }
];

export const SKILLS: Skill[] = [
  { name: 'Short-Form Video Strategy', description: 'Reels that people actually stop for.', percentage: 98 },
  { name: 'Content Systems', description: 'Driving long-term engagement, not just vanity metrics.', percentage: 92 },
  { name: 'Luxury Aesthetics', description: 'Visual clarity and high-end consistency.', percentage: 95 },
  { name: 'On-Camera Storytelling', description: 'Confident presence that builds human trust.', percentage: 90 },
  { name: 'B2B/B2C Brand Scaling', description: 'Translating brand values into actionable growth.', percentage: 88 },
  { name: 'Market Observation', description: 'Spotting creative gaps in moving digital spaces.', percentage: 96 },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  { id: 'g1', type: 'video', title: 'Production Insight', imageUrl: Video5 },
  { id: 'g2', type: 'video', title: 'Story Reel', imageUrl: Video2 },
  { id: 'g3', type: 'video', title: 'Creative Flow', imageUrl: Video6 },
  { id: 'g4', type: 'photography', title: 'Urban Texture', imageUrl: CreativeLabImage },
  { id: 'g5', type: 'video', title: 'Cinematic Flow', imageUrl: Video3 },
  { id: 'g6', type: 'video', title: 'Visual Rhythm', imageUrl: Video4 },
];
