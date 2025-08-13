import React from 'react';
import { Star, Sparkles } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="text-center mb-8">
      <div className="flex items-center justify-center gap-3 mb-4">
        <Star className="w-8 h-8 text-yellow-400" />
        <h1 className="text-4xl font-bold text-white">
          Régression Linéaire Stellaire
        </h1>
        <Sparkles className="w-8 h-8 text-purple-400" />
      </div>
      <p className="text-lg text-gray-300 max-w-2xl mx-auto">
        Analyse de la relation entre la distance et la magnitude apparente de 20
        étoiles remarquables utilisant la régression linéaire implémentée en
        TypeScript
      </p>
    </header>
  );
};

export default Header;
