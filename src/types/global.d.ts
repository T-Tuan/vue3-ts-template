export {};

declare global {
  const dayjs: typeof import('dayjs');
  const lodash: typeof import('lodash-es');
}

declare module 'vue-router' {
  interface RouteMeta {
    activeMenu?: string;
    authCode?: number;
  }

  interface MatcherLocation {
    params: Partial<Record<string, string>>;
  }

  type RouteParams = Partial<Record<string, string>>;
}
