import { Polar } from '@polar-sh/sdk';
import { env } from './env';

export const polar = new Polar({
  accessToken: env.POLAR_ACCESS_TOKEN as string,
  server: process.env.NODE_ENV === 'production' ? 'production' : 'sandbox',
});
