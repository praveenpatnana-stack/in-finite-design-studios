import React from 'react';

export interface Project {
  id: string;
  title: string;
  category: string;
  imageUrls: string[];
  description: string;
  videoUrl?: string; // ✅ Added optional video support
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