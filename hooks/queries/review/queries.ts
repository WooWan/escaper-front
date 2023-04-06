export const reviewKeys = {
  all: ['reviews'] as const,
  lists: () => [...reviewKeys.all, 'lists'] as const,
  details: () => [...reviewKeys.all, 'details'] as const,
  detail: (id: string) => [...reviewKeys.all, 'detail', id] as const,
  detailByUser: (userId: string, escapeThemeId: string) =>
    [...reviewKeys.all, 'detail', escapeThemeId, userId] as const,
}
