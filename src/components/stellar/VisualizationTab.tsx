import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { TrendingUp } from 'lucide-react';
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Line,
} from 'recharts';
import type { DataPoint } from '@/types/stellar';

interface VisualizationTabProps {
  dataPoints: DataPoint[];
  regressionLine: { distance: number; magnitude: number }[];
  isCalculating: boolean;
}

const VisualizationTab: React.FC<VisualizationTabProps> = ({
  dataPoints,
  regressionLine,
  isCalculating,
}) => {
  return (
    <Card className="bg-slate-800/50 border-slate-700">
      <CardHeader>
        <CardTitle className="text-white flex items-center gap-2">
          <TrendingUp className="w-5 h-5" />
          Graphique de Régression
        </CardTitle>
        <CardDescription className="text-gray-400">
          Relation logarithmique entre distance (parsecs) et magnitude apparente
        </CardDescription>
      </CardHeader>
      <CardContent>
        {isCalculating ? (
          <div className="h-96 flex items-center justify-center">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500 mx-auto mb-4"></div>
              <p className="text-gray-400">
                Calcul de la régression en cours...
              </p>
            </div>
          </div>
        ) : (
          <ResponsiveContainer width="100%" height={400}>
            <ScatterChart margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis
                dataKey="x"
                type="number"
                scale="log"
                domain={['dataMin', 'dataMax']}
                tickFormatter={(value) =>
                  value ? `${value.toFixed(1)}pc` : ''
                }
                stroke="#9CA3AF"
              />
              <YAxis
                dataKey="y"
                stroke="#9CA3AF"
                label={{
                  value: 'Magnitude',
                  angle: -90,
                  position: 'insideLeft',
                  style: { fill: '#9CA3AF' },
                }}
              />
              <Tooltip
                content={({ active, payload }) => {
                  if (active && payload && payload[0]) {
                    const data = payload[0].payload as DataPoint;
                    return (
                      <div className="bg-slate-800 p-3 rounded-lg border border-slate-600">
                        <p className="text-yellow-400 font-semibold">
                          {data.name}
                        </p>
                        <p className="text-gray-300">
                          Distance: {data.x.toFixed(2)} pc
                        </p>
                        <p className="text-gray-300">
                          Magnitude: {data.y.toFixed(2)}
                        </p>
                        <p className="text-purple-400">
                          Prédiction: {data.predicted.toFixed(2)}
                        </p>
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Scatter data={dataPoints} fill="#60A5FA" />
              <Line
                data={regressionLine}
                type="monotone"
                dataKey="magnitude"
                stroke="#F59E0B"
                strokeWidth={2}
                dot={false}
              />
            </ScatterChart>
          </ResponsiveContainer>
        )}
      </CardContent>
    </Card>
  );
};

export default VisualizationTab;
