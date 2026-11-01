export const categoryLabels: Record<string, string> = {
  games: 'Games',
  web:   'Web',
};

export function getPostCategory(id: string): string {
  return id.split('/')[0];
}

export function getCategoryLabel(category: string): string {
  return categoryLabels[category] ?? category;
}
