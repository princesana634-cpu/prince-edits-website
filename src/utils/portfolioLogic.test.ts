import test from 'node:test';
import assert from 'node:assert/strict';
import {
  filterProjects,
  calculateProjectEstimate,
  validateContactForm,
  type Project,
  type ContactFormState,
} from './portfolioLogic';

const mockProjects: Project[] = [
  {
    id: '1',
    title: 'Cyberpunk Hyperlapse Tokyo',
    category: 'cinematic',
    client: 'Tokyo Visuals',
    views: '2.4M',
    retention: '68%',
    duration: '02:45',
    aspectRatio: '16:9',
    image: '/src/assets/images/portfolio_cinematic_travel_1793416126713.jpg',
    description: 'Cinematic travel documentary with custom LUT grading.',
    tags: ['Color Grading', 'Sound Design'],
    toolsUsed: ['Adobe Premiere Pro', 'CapCut'],
    keyHighlights: ['Custom sound design', 'Speed ramps'],
    colorGrade: 'Teal & Orange',
    soundDesign: 'Binaural 3D audio',
  },
  {
    id: '2',
    title: 'Viral Streetwear Hook Reel',
    category: 'reels',
    client: 'Urban Trend',
    views: '5.1M',
    retention: '84%',
    duration: '00:30',
    aspectRatio: '9:16',
    image: '/src/assets/images/portfolio_reels_fashion_1793416128422.jpg',
    description: 'High-energy vertical reel with beat synchronization.',
    tags: ['Beat Sync', 'Kinetic Typography'],
    toolsUsed: ['CapCut', 'Alight Motion'],
    keyHighlights: ['0.3s hook retention', 'Glitch transitions'],
    colorGrade: 'Electric Blue',
    soundDesign: 'Bass drops & swooshes',
  },
  {
    id: '3',
    title: 'Inside Tokyo 24h Vlog',
    category: 'youtube',
    client: 'Wanderer Films',
    views: '890K',
    retention: '54%',
    duration: '14:20',
    aspectRatio: '16:9',
    image: '/src/assets/images/portfolio_youtube_vlog_1793416128045.jpg',
    description: 'Long-form retention-optimized YouTube storytelling.',
    tags: ['Storytelling', 'Pacing'],
    toolsUsed: ['Adobe Premiere Pro', 'Photoshop'],
    keyHighlights: ['Retention curve optimization', 'Custom motion graphics'],
    colorGrade: 'Natural Film Emulation',
    soundDesign: 'Atmospheric foley',
  },
];

test('filterProjects filters by category accurately', () => {
  const allProjects = filterProjects(mockProjects, 'all');
  assert.equal(allProjects.length, 3);

  const reels = filterProjects(mockProjects, 'reels');
  assert.equal(reels.length, 1);
  assert.equal(reels[0].id, '2');

  const shorts = filterProjects(mockProjects, 'shorts');
  assert.equal(shorts.length, 0);
});

test('filterProjects handles text search queries across title, client, and tools', () => {
  const searchTokyo = filterProjects(mockProjects, 'all', 'tokyo');
  assert.equal(searchTokyo.length, 2);

  const searchCapCut = filterProjects(mockProjects, 'all', 'CapCut');
  assert.equal(searchCapCut.length, 2);

  const searchNonExistent = filterProjects(mockProjects, 'all', 'UnrelatedKeywordXYZ');
  assert.equal(searchNonExistent.length, 0);
});

test('calculateProjectEstimate computes pricing and delivery timelines correctly', () => {
  const standardEstimate = calculateProjectEstimate({
    serviceTypes: ['youtube'],
    videoQuantity: 1,
    deliverySpeed: 'standard',
  });
  assert.equal(standardEstimate.basePrice, 140);
  assert.equal(standardEstimate.totalPrice, 140);
  assert.equal(standardEstimate.rushFee, 0);
  assert.equal(standardEstimate.estimatedDays, 2);

  const rushEstimate = calculateProjectEstimate({
    serviceTypes: ['reels', 'thumbnail'],
    videoQuantity: 2,
    deliverySpeed: 'rush_24h',
  });
  // base: (75 + 40) * 2 = 230. Rush: 1.5x -> 345
  assert.equal(rushEstimate.basePrice, 230);
  assert.equal(rushEstimate.totalPrice, 345);
  assert.equal(rushEstimate.rushFee, 115);
  assert.equal(rushEstimate.estimatedDays, 1);
});

test('validateContactForm checks required fields and email validity', () => {
  const invalidForm: ContactFormState = {
    name: '',
    email: 'bad-email',
    projectType: '',
    budgetRange: '$500-$1000',
    timeline: '1 week',
    message: 'hi',
  };
  const invalidResult = validateContactForm(invalidForm);
  assert.equal(invalidResult.isValid, false);
  assert.ok(invalidResult.errors.name);
  assert.ok(invalidResult.errors.email);
  assert.ok(invalidResult.errors.projectType);
  assert.ok(invalidResult.errors.message);

  const validForm: ContactFormState = {
    name: 'Alex Turner',
    email: 'alex@creators.co',
    projectType: 'youtube',
    budgetRange: '$500-$1500',
    timeline: '3 days',
    message: 'Need 4 retention-focused YouTube edits for tech documentary channel.',
  };
  const validResult = validateContactForm(validForm);
  assert.equal(validResult.isValid, true);
  assert.equal(Object.keys(validResult.errors).length, 0);
});
