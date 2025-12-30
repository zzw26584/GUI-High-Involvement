
export enum Stage {
  PARTICIPANT_INFO = 'PARTICIPANT_INFO',
  INTRO = 'INTRO',
  LEVEL1 = 'LEVEL1',
  LEVEL2 = 'LEVEL2',
  FINISH = 'FINISH',
  EXPERIMENT_COMPLETE = 'EXPERIMENT_COMPLETE'
}

// Fix: Added ViewType enum for navigation to resolve error in Sidebar.tsx and ChatView.tsx
export enum ViewType {
  CHAT = 'CHAT',
  SEARCH = 'SEARCH',
  IMAGE = 'IMAGE',
  SPEECH = 'SPEECH'
}

export interface ProductAttribute {
  label: string;
  value: string | number;
  isHighlight?: boolean;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  rating: number;
  summary: string;
  attributes: ProductAttribute[];
  rooms?: any[]; 
  reviews?: string[];
}

export interface TrialConfig {
  id: number;
  type: string;
  objectCount: number;
  dimensionCount: number;
  instruction: string;
  reminder: string;
  products: Product[];
}

export interface ParticipantInfo {
  id: string;
  runNumber: string;
  gender: '男' | '女' | '';
  age: string;
}

export interface SurveyData {
  importance: number;
  skillLevel: number;
  timeSpent: string;
  satisfaction: number;
  efficiency: number;
  trust: number;
}

export interface TrialResult {
  Participant_ID: string;
  Run_Number: string;
  Gender: string;
  Age: string;
  Trial_ID: number;
  Trial_Type: string;
  Condition_N: number;
  Condition_D: number;
  Choice_Name: string;
  Duration_Seconds: number;
  Backtrack_Count: number;
  Filter_Clicks: number;
  Importance: number;
  Skill_Level: number;
  Satisfaction: number;
  Efficiency: number;
  Trust: number;
  Daily_Time_Spent: string;
}

// Fix: Added Message interface for chat state to resolve error in ChatView.tsx
export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: number;
  groundingUrls?: { uri: string; title: string }[];
}

// Fix: Added GeneratedImage interface for image history to resolve error in ImageGenView.tsx
export interface GeneratedImage {
  id: string;
  url: string;
  prompt: string;
  timestamp: number;
}
