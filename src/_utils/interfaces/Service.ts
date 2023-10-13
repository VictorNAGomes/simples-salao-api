export interface Service {
  constructor(...args: any[]): void;
  execute(...args: any[]): any;
}
