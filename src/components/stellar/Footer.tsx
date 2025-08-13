import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface FooterProps {
  onRecalculate: () => void;
  isCalculating: boolean;
}

const Footer: React.FC<FooterProps> = ({ onRecalculate, isCalculating }) => {
  return (
    <Card className="bg-slate-800/50 border-slate-700 mt-6">
      <CardContent className="pt-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-white font-semibold">
              Régression Linéaire Stellaire
            </p>
            <p className="text-gray-400 text-sm">
              La régression linéaire est une méthode statistique qui permet de
              trouver la relation entre une variable indépendante (x) et une
              variable dépendante (y), en ajustant une droite qui minimise
              l'erreur entre les valeurs observées et les valeurs prédites. En
              d'autres termes, on cherche la droite la plus proche possible des
              points d'un nuage de données.
            </p>
          </div>
          <Button
            onClick={onRecalculate}
            disabled={isCalculating}
            className="bg-purple-600 hover:bg-purple-700"
          >
            {isCalculating ? 'Calcul...' : 'Recalculer'}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default Footer;
