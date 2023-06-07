import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.borxdev.weather360',
  appName: 'Weather 360',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
