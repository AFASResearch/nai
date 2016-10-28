export interface BuildResult {
  buildName: string;
  timestamp: number;
  result: 'success' | 'failure';
  contributers: {[name: string]: string};
}
