
// Fixed: Added React import to provide access to the React namespace for React.ReactNode
import React from 'react';

export interface Project {
  id: string;
  title: string;
  category: string;
  imageUrls: string[]; // Changed to array for gallery support
  description: string;
}

export interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface DesignInsight {
  quote: string;
  context: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  imageUrl: string;
  bio: string;
}
