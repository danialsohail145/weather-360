import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'weather-360',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
