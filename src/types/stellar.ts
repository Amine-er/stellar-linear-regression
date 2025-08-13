export interface StellarData {
  id: number;
  name: string;
  distance: number; // en parsecs
  magnitude: number; // magnitude apparente
}

export interface RegressionResult {
  slope: number;
  intercept: number;
  rSquared: number;
  correlation: number;
  standardError: number;
}

export interface DataPoint {
  x: number;
  y: number;
  name: string;
  predicted: number;
}
