import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'public-reporting-system',
  exposes: {
    './Routes':
      'apps/public-reporting-system/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
