export const escapeThemeLikeKeys = {
  all: ['escapeThemeLike'] as const,
  details: () => [...escapeThemeLikeKeys.all, 'details'] as const,
  detail: (themeId: string) => [...escapeThemeLikeKeys.all, 'detail', themeId] as const,
}
