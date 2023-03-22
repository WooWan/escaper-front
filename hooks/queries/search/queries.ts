export const escapeThemeSearchKey = {
  all: ['escapeTheme'] as const,
  details: () => [...escapeThemeSearchKey.all, 'details'] as const,
  detail: (param: string) => [...escapeThemeSearchKey.all, 'detail', param] as const,
}
