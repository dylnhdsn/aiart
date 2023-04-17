export interface Tag {
  label: string;
  words: string[];
}

export const TAGS = [
  {
    label: 'realistic',
    words: ['realistic', 'hyper-realistic', 'cinematic lighting', '4k', '8k', 'beautiful'],
  },
  {
    label: 'abstract',
    words: ['abstract', 'modern', 'minimalist', 'geometric', 'colorful', 'bright'],
  },
  {
    label: 'landscape',
    words: ['landscape', 'nature', 'mountains', 'water', 'sunset', 'sunrise', 'sky'],
  },
  {
    label: 'portrait',
    words: ['portrait', 'people', 'face', 'emotions', 'expression', 'character'],
  },
  {
    label: 'cityscape',
    words: ['cityscape', 'urban', 'buildings', 'architecture', 'night', 'lights'],
  },
  {
    label: 'fantasy',
    words: ['fantasy', 'mythical', 'magical', 'creatures', 'mystical', 'enchanted'],
  },
  {
    label: 'vintage',
    words: ['vintage', 'retro', 'nostalgia', 'old-fashioned', 'antique', 'classic'],
  },
  {
    label: 'futuristic',
    words: ['futuristic', 'modern', 'science fiction', 'technology', 'innovative', 'sleek'],
  },
  {
    label: 'food',
    words: ['food', 'delicious', 'appetizing', 'fresh', 'healthy', 'tasty'],
  },
  {
    label: 'texture',
    words: ['texture', 'pattern', 'grunge', 'rough', 'distressed', 'surface'],
  },
  {
    label: 'watercolor',
    words: ['watercolor', 'painting', 'artistic', 'brushstrokes', 'colorful', 'abstract'],
  },
  {
    label: 'minimalist',
    words: ['minimalist', 'simple', 'clean', 'streamlined', 'restrained', 'modern'],
  },
  {
    label: 'bright',
    words: ['bright', 'colorful', 'vibrant', 'bold', 'energetic', 'cheerful'],
  },
  {
    label: 'dark',
    words: ['dark', 'moody', 'mysterious', 'gloomy', 'intense', 'haunting'],
  },
  {
    label: 'retro',
    words: ['retro', 'vintage', 'nostalgia', 'old-fashioned', 'antique', 'classic'],
  },
  {
    label: 'nature',
    words: ['nature', 'plants', 'flowers', 'greenery', 'forest', 'leaves'],
  },
  {
    label: 'animals',
    words: ['animals', 'wildlife', 'cute', 'adorable', 'pets', 'ferocious'],
  },
  {
    label: 'patterns',
    words: ['patterns', 'geometric', 'abstract', 'repeating', 'symmetrical', 'decorative'],
  },
  {
    label: 'grunge',
    words: ['grunge', 'distressed', 'textured', 'dirty', 'worn', 'vintage'],
  },
  {
    label: 'pop art',
    words: ['pop art', 'comic book', 'bright colors', 'bold lines', 'graphic', 'retro'],
  },
  {
    label: 'black and white',
    words: ['black and white', 'monochrome', 'grayscale', 'contrast', 'shadow', 'light'],
  },
  {
    label: 'abstract expressionism',
    words: ['abstract expressionism', 'gestural', 'action painting', 'spontaneous', 'emotional', 'intuitive'],
  },
  {
    label: 'impressionism',
    words: ['impressionism', 'plein air', 'atmospheric', 'light', 'brushstrokes', 'color'],
  },
  {
    label: 'expressionism',
    words: ['expressionism', 'intense', 'emotional', 'distorted', 'color', 'brushwork'],
  },
  {
    label: 'pop culture',
    words: ['pop culture', 'music', 'movies', 'television', 'celebrities', 'nostalgia'],
  },
  {
    label: 'botanical',
    words: ['botanical', 'plants', 'flowers', 'leaves', 'nature', 'illustration'],
  },
  {
    label: 'conceptual',
    words: ['conceptual', 'ideas', 'thought-provoking', 'intellectual', 'meaning', 'minimalist'],
  },
  {
    label: 'surrealism',
    words: ['surrealism', 'dreamlike', 'fantastic', 'strange', 'absurd', 'uncanny'],
  },
  {
    label: 'photorealism',
    words: ['photorealism', 'realism', 'detailed', 'precise', 'accurate', 'painting'],
  },
  {
    label: 'pastel',
    words: ['pastel', 'soft', 'delicate', 'light', 'dreamy', 'feminine'],
  },
  {
    label: 'neon',
    words: ['neon', 'bright', 'vibrant', 'bold', 'electric', 'glowing'],
  },
  {
    label: 'cyberpunk',
    words: ['cyberpunk', 'dystopian', 'gritty', 'technology', 'future', 'apocalyptic'],
  },
  {
    label: 'monochromatic',
    words: ['monochromatic', 'one color', 'tonal', 'shades', 'variations', 'minimalist'],
  },
  {
    label: 'gothic',
    words: ['gothic', 'dark', 'macabre', 'medieval', 'eerie', 'atmospheric'],
  },
  {
    label: 'horror',
    words: ['horror', 'scary', 'creepy', 'frightening', 'terrifying', 'gore'],
  },
  {
    label: 'minimal',
    words: ['minimal', 'simple', 'clean', 'streamlined', 'restrained', 'modern'],
  },
  {
    label: 'geometric',
    words: ['geometric', 'shapes', 'lines', 'patterns', 'symmetrical', 'abstract'],
  },
  {
    label: 'romantic',
    words: ['romantic', 'love', 'emotional', 'affectionate', 'sensual', 'sentimental'],
  },
  {
    label: 'nautical',
    words: ['nautical', 'sea', 'ocean', 'boats', 'anchors', 'beaches'],
  },
  {
    label: 'retrowave',
    words: ['retrowave', 'synthwave', '80s', 'nostalgia', 'vaporwave', 'outrun'],
  },
  {
    label: 'cyber',
    words: ['cyber', 'tech', 'digital', 'neon', 'future', 'synthetic'],
  },
  {
    label: 'sci-fi',
    words: ['sci-fi', 'science fiction', 'space', 'aliens', 'robots', 'futuristic'],
  },
  {
    label: 'steampunk',
    words: ['steampunk', 'vintage', 'retro', 'mechanical', 'gears', 'Victorian'],
  },
  {
    label: 'comic book',
    words: ['comic book', 'cartoon', 'graphic', 'colorful', 'action-packed', 'heroes'],
  },
  {
    label: 'minimalistic',
    words: ['minimalistic', 'simple', 'clean', 'streamlined', 'restrained', 'modern'],
  },
  {
    label: 'dystopian',
    words: ['dystopian', 'dark', 'gritty', 'futuristic', 'apocalyptic', 'bleak'],
  },
  {
    label: 'dreamy',
    words: ['dreamy', 'ethereal', 'fantasy', 'soft', 'peaceful', 'calm'],
  },
  {
    label: 'mystical',
    words: ['mystical', 'magical', 'fantasy', 'dreamlike', 'spiritual', 'enchanting'],
  },
  {
    label: 'funky',
    words: ['funky', 'groovy', 'retro', 'colorful', 'fun', 'playful'],
  },
  {
    label: 'urban',
    words: ['urban', 'city', 'street', 'graffiti', 'concrete', 'modern'],
  },
  {
    label: 'cinematic',
    words: ['cinematic', 'dramatic', 'epic', 'film', 'movie', 'action'],
  },
  {
    label: 'melancholy',
    words: ['melancholy', 'sad', 'emotional', 'nostalgic', 'reflective', 'wistful'],
  },
  {
    label: 'whimsical',
    words: ['whimsical', 'quirky', 'playful', 'fun', 'offbeat', 'imaginative'],
  },
  {
    label: 'graffiti',
    words: ['graffiti', 'urban', 'street', 'spray paint', 'tagging', 'rebel'],
  },
  {
    label: 'medieval',
    words: ['medieval', 'fantasy', 'historic', 'castles', 'knights', 'dragons'],
  },
  {
    label: 'fairy tale',
    words: ['fairy tale', 'fantasy', 'enchanted', 'magical', 'storybook', 'whimsical'],
  },
  {
    label: 'jungle',
    words: ['jungle', 'tropical', 'animals', 'plants', 'wild', 'lush'],
  },
  {
    label: 'trippy',
    words: ['trippy', 'psychedelic', 'weird', 'mind-bending', 'hallucinogenic', 'strange'],
  },
];


