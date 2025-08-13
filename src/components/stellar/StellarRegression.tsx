import React, { useState, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import type { RegressionResult, DataPoint } from '@/types/stellar';
import { stellarDataset } from '@/data/stellarData';
import {
  calculateLinearRegression,
  getRegressionLine,
  prepareDataPoints,
} from '@/utils/regression';
import Header from './Header';
import VisualizationTab from './VisualizationTab';
import MetricsTab from './MetricsTab';
import DataTab from './DataTab';
import Footer from './Footer';

const StellarRegression: React.FC = () => {
  const [dataPoints, setDataPoints] = useState<DataPoint[]>([]);
  const [regression, setRegression] = useState<RegressionResult | null>(null);
  const [isCalculating, setIsCalculating] = useState<boolean>(false);
  const [selectedTab, setSelectedTab] = useState<string>('visualization');

  const performRegression = React.useCallback(async (): Promise<void> => {
    setIsCalculating(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    const result = calculateLinearRegression(stellarDataset);
    setRegression(result);

    const points = prepareDataPoints(stellarDataset, result);
    setDataPoints(points);
    setIsCalculating(false);
  }, []);

  useEffect(() => {
    performRegression();
  }, [performRegression]);

  const regressionLine = regression
    ? getRegressionLine(stellarDataset, regression)
    : [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-4">
      <div className="max-w-7xl mx-auto">
        <Header />

        <Tabs
          value={selectedTab}
          onValueChange={setSelectedTab}
          className="w-full"
        >
          <TabsList className="grid w-full grid-cols-3 mb-6">
            <TabsTrigger value="visualization">Visualisation</TabsTrigger>
            <TabsTrigger value="metrics">Métriques</TabsTrigger>
            <TabsTrigger value="data">Données</TabsTrigger>
          </TabsList>

          <TabsContent value="visualization" className="space-y-6">
            <VisualizationTab
              dataPoints={dataPoints}
              regressionLine={regressionLine}
              isCalculating={isCalculating}
            />
          </TabsContent>

          <TabsContent value="metrics" className="space-y-6">
            <MetricsTab
              regression={regression}
              datasetLength={stellarDataset.length}
            />
          </TabsContent>

          <TabsContent value="data" className="space-y-6">
            <DataTab dataPoints={dataPoints} />
          </TabsContent>
        </Tabs>

        <Footer
          onRecalculate={performRegression}
          isCalculating={isCalculating}
        />
      </div>
    </div>
  );
};

export default StellarRegression;
