export const liveReload = new EventSource('/esbuild').addEventListener('change', () => location.reload());