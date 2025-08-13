import type { StellarData, RegressionResult, DataPoint } from '@/types/stellar';

// Algorithme de régression linéaire implémenté en TypeScript
export const calculateLinearRegression = (
  data: StellarData[]
): RegressionResult => {
  const n = data.length;

  // Conversion logarithmique pour la distance (relation magnitude-distance)
  const x = data.map((d) => Math.log10(d.distance));
  const y = data.map((d) => d.magnitude);

  // Calculs statistiques
  const sumX = x.reduce((sum, val) => sum + val, 0);
  const sumY = y.reduce((sum, val) => sum + val, 0);
  const sumXY = x.reduce((sum, val, i) => sum + val * y[i], 0);
  const sumX2 = x.reduce((sum, val) => sum + val * val, 0);
  const sumY2 = y.reduce((sum, val) => sum + val * val, 0);

  // Coefficients de la droite de régression y = mx + b
  const slope = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX * sumX);
  const intercept = (sumY - slope * sumX) / n;

  // Coefficient de corrélation
  const correlation =
    (n * sumXY - sumX * sumY) /
    Math.sqrt((n * sumX2 - sumX * sumX) * (n * sumY2 - sumY * sumY));

  const rSquared = correlation * correlation;

  // Erreur standard
  const ssr = y.reduce((sum, val, i) => {
    const predicted = slope * x[i] + intercept;
    return sum + Math.pow(val - predicted, 2);
  }, 0);
  const standardError = Math.sqrt(ssr / (n - 2));

  return { slope, intercept, rSquared, correlation, standardError };
};

// Génération des points de la ligne de régression
export const getRegressionLine = (
  stellarData: StellarData[],
  regression: RegressionResult
) => {
  const minDistance = Math.min(...stellarData.map((d) => d.distance));
  const maxDistance = Math.max(...stellarData.map((d) => d.distance));

  const points = [];
  for (
    let distance = minDistance;
    distance <= maxDistance;
    distance += (maxDistance - minDistance) / 50
  ) {
    const x = Math.log10(distance);
    const y = regression.slope * x + regression.intercept;
    points.push({ distance, magnitude: y });
  }

  return points;
};

// Préparation des données pour la visualisation
export const prepareDataPoints = (
  stellarData: StellarData[],
  regression: RegressionResult
): DataPoint[] => {
  return stellarData.map((star) => {
    const x = Math.log10(star.distance);
    const predicted = regression.slope * x + regression.intercept;
    return {
      x: star.distance,
      y: star.magnitude,
      name: star.name,
      predicted,
    };
  });
};

export const formatNumber = (num: number, decimals: number = 3): string => {
  return num.toFixed(decimals);
};
