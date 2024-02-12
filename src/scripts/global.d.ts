import { IEnvironmentObject } from './types/IEnvironmentObject.ts';

declare global {
  interface Window {
    environmentObject?: IEnvironmentObject;
  }
}
