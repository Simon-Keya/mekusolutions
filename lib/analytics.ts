declare global { interface Window { plausible?: (e: string) => void } }
export const track = (name: string) => { if (typeof window !== 'undefined') window.plausible?.(name); };
