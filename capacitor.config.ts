import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.312250cb7cd0406386a23ca107e706bc',
  appName: 'sweet-serenade-page',
  webDir: 'dist',
  server: {
    url: 'https://312250cb-7cd0-4063-86a2-3ca107e706bc.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: '#f8e8eb',
      showSpinner: false
    }
  }
};

export default config;