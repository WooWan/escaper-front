export const escapeThemeLikeKeys = {
  all: ['escapeThemeLike'] as const,
  escapeThemes: () => [...escapeThemeLikeKeys.all, 'details'] as const,
  escapeTheme: (themeId: string) => [...escapeThemeLikeKeys.escapeThemes(), themeId] as const,
}
