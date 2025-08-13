import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import type { DataPoint } from '@/types/stellar';

interface DataTabProps {
  dataPoints: DataPoint[];
}

const DataTab: React.FC<DataTabProps> = ({ dataPoints }) => {
  return (
    <Card className="bg-slate-800/50 border-slate-700">
      <CardHeader>
        <CardTitle className="text-white">Dataset Stellaire</CardTitle>
        <CardDescription className="text-gray-400">
          Données astronomiques de 20 étoiles remarquables avec prédictions
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-600">
                <th className="text-left p-2 text-gray-300">Étoile</th>
                <th className="text-right p-2 text-gray-300">Distance (pc)</th>
                <th className="text-right p-2 text-gray-300">Magnitude</th>
                <th className="text-right p-2 text-gray-300">Prédiction</th>
                <th className="text-right p-2 text-gray-300">Erreur</th>
              </tr>
            </thead>
            <tbody>
              {dataPoints.map((point, index) => {
                const error = Math.abs(point.y - point.predicted);
                return (
                  <tr key={index} className="border-b border-slate-700/50">
                    <td className="p-2 text-yellow-400 font-medium">
                      {point.name}
                    </td>
                    <td className="p-2 text-right text-white">
                      {point.x.toFixed(2)}
                    </td>
                    <td className="p-2 text-right text-white">
                      {point.y.toFixed(2)}
                    </td>
                    <td className="p-2 text-right text-purple-400">
                      {point.predicted.toFixed(2)}
                    </td>
                    <td className="p-2 text-right text-gray-400">
                      ±{error.toFixed(2)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
};

export default DataTab;
