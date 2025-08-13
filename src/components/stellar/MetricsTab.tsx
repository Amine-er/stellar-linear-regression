import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calculator } from 'lucide-react';
import type { RegressionResult } from '@/types/stellar';
import { formatNumber } from '@/utils/regression';

interface MetricsTabProps {
  regression: RegressionResult | null;
  datasetLength: number;
}

const MetricsTab: React.FC<MetricsTabProps> = ({
  regression,
  datasetLength,
}) => {
  if (!regression) {
    return null;
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Calculator className="w-5 h-5" />
              Équation de Régression
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center">
              <p className="text-2xl font-mono text-purple-400 mb-2">
                y = {formatNumber(regression.slope)}x +{' '}
                {formatNumber(regression.intercept)}
              </p>
              <p className="text-sm text-gray-400">
                où x = log₁₀(distance en parsecs)
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white">
              Coefficient de Détermination
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center">
              <p className="text-3xl font-bold text-green-400 mb-2">
                {formatNumber(regression.rSquared * 100, 1)}%
              </p>
              <Badge
                variant={regression.rSquared > 0.7 ? 'default' : 'secondary'}
              >
                R² = {formatNumber(regression.rSquared)}
              </Badge>
              <p className="text-sm text-gray-400 mt-2">
                Qualité de l'ajustement
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white">Corrélation</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center">
              <p className="text-3xl font-bold text-blue-400 mb-2">
                {formatNumber(regression.correlation)}
              </p>
              <Badge
                variant={
                  Math.abs(regression.correlation) > 0.8
                    ? 'default'
                    : 'secondary'
                }
              >
                {Math.abs(regression.correlation) > 0.8 ? 'Forte' : 'Modérée'}
              </Badge>
              <p className="text-sm text-gray-400 mt-2">
                Force de la relation linéaire
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700 md:col-span-2 lg:col-span-3">
          <CardHeader>
            <CardTitle className="text-white">
              Analyse Statistique Complète
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <p className="text-gray-400 text-sm">Pente</p>
                <p className="text-lg font-semibold text-white">
                  {formatNumber(regression.slope)}
                </p>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Ordonnée à l'origine</p>
                <p className="text-lg font-semibold text-white">
                  {formatNumber(regression.intercept)}
                </p>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Erreur standard</p>
                <p className="text-lg font-semibold text-white">
                  {formatNumber(regression.standardError)}
                </p>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Échantillon</p>
                <p className="text-lg font-semibold text-white">
                  {datasetLength} étoiles
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MetricsTab;
