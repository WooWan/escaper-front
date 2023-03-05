export const ratingKeys = {
  all: ['escapeTheme'] as const,
  lists: () => [...ratingKeys.all, 'list'] as const,
  list: (filters: string) => [...ratingKeys.lists(), { filters }] as const,
  details: () => [...ratingKeys.all, 'details'] as const,
  detail: (memberId: string, userId: string) => [...ratingKeys.all, 'detail', memberId, userId] as const,
}
