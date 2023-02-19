export const escapeThemeKey = {
    all: ['escapeTheme'] as const,
    details: () => [...escapeThemeKey.all, 'details'] as const,
    detail: (id: string) => [...escapeThemeKey.all, 'detail', id] as const,
  }