export interface Project {
  id: string;
  title: string;
  category: 'youtube' | 'reels' | 'shorts' | 'cinematic';
  client: string;
  views: string;
  retention: string;
  duration: string;
  aspectRatio: '16:9' | '9:16';
  image: string;
  description: string;
  tags: string[];
  toolsUsed: string[];
  keyHighlights: string[];
  colorGrade: string;
  soundDesign: string;
}

export type CategoryFilter = 'all' | 'youtube' | 'reels' | 'shorts' | 'cinematic';

export function filterProjects(projects: Project[], category: CategoryFilter, searchQuery = ''): Project[] {
  return projects.filter((project) => {
    const matchesCategory = category === 'all' || project.category === category;
    if (!matchesCategory) return false;

    if (!searchQuery.trim()) return true;
    const query = searchQuery.toLowerCase().trim();
    return (
      project.title.toLowerCase().includes(query) ||
      project.client.toLowerCase().includes(query) ||
      project.description.toLowerCase().includes(query) ||
      project.tags.some((tag) => tag.toLowerCase().includes(query)) ||
      project.toolsUsed.some((tool) => tool.toLowerCase().includes(query))
    );
  });
}

export interface ServiceEstimateInput {
  serviceTypes: ('youtube' | 'reels' | 'shorts' | 'cinematic' | 'thumbnail')[];
  videoQuantity: number;
  deliverySpeed: 'standard' | 'express_48h' | 'rush_24h';
  includeThumbnailPack?: boolean;
}

export interface ServiceEstimateOutput {
  estimatedDays: number;
  basePrice: number;
  rushFee: number;
  totalPrice: number;
  recommendedWorkflow: string;
}

const SERVICE_RATES: Record<string, number> = {
  youtube: 140,
  reels: 75,
  shorts: 65,
  cinematic: 220,
  thumbnail: 40,
};

export function calculateProjectEstimate(input: ServiceEstimateInput): ServiceEstimateOutput {
  const quantity = Math.max(1, input.videoQuantity || 1);
  let basePrice = 0;

  for (const service of input.serviceTypes) {
    basePrice += (SERVICE_RATES[service] || 80) * quantity;
  }

  if (input.includeThumbnailPack && !input.serviceTypes.includes('thumbnail')) {
    basePrice += SERVICE_RATES.thumbnail * quantity;
  }

  let speedMultiplier = 1.0;
  let estimatedDays = Math.max(2, quantity * 2);

  if (input.deliverySpeed === 'rush_24h') {
    speedMultiplier = 1.5;
    estimatedDays = 1;
  } else if (input.deliverySpeed === 'express_48h') {
    speedMultiplier = 1.25;
    estimatedDays = 2;
  }

  const totalPrice = Math.round(basePrice * speedMultiplier);
  const rushFee = totalPrice - basePrice;

  let recommendedWorkflow = 'Standard High-Retention Editing with 2 Revision Rounds';
  if (input.serviceTypes.includes('cinematic')) {
    recommendedWorkflow = 'Full Color Grading (DaVinci/Premiere Log) + Custom Sound Design & SFX + 4K Export';
  } else if (input.serviceTypes.includes('reels') || input.serviceTypes.includes('shorts')) {
    recommendedWorkflow = 'Dynamic Hook Timing + Fast-Paced Kinetic Typography + SFX Punch-Ins';
  }

  return {
    estimatedDays,
    basePrice,
    rushFee,
    totalPrice,
    recommendedWorkflow,
  };
}

export interface ContactFormState {
  name: string;
  email: string;
  projectType: string;
  budgetRange: string;
  timeline: string;
  message: string;
  footageLink?: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

export function validateContactForm(form: ContactFormState): ValidationResult {
  const errors: Record<string, string> = {};

  if (!form.name || form.name.trim().length < 2) {
    errors.name = 'Please provide your name or brand.';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!form.email || !emailRegex.test(form.email.trim())) {
    errors.email = 'Please provide a valid email address.';
  }

  if (!form.projectType) {
    errors.projectType = 'Please select a service category.';
  }

  if (!form.message || form.message.trim().length < 10) {
    errors.message = 'Please share at least a brief description of your project (min 10 characters).';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}
