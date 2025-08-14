# 🌟 Régression Linéaire Stellaire

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

Une application interactive de régression linéaire qui analyse la relation entre la distance des étoiles et leur magnitude apparente, implémentée en TypeScript avec React et shadcn/ui.

## Aperçu

Cette application démontre l'implémentation complète d'un algorithme de régression linéaire sur des données astronomiques réelles. Elle analyse 20 étoiles remarquables et modélise la relation fondamentale entre leur distance (en parsecs) et leur magnitude apparente selon la loi de Pogson.

### Fonctionnalités

- **🔢 Algorithme de régression linéaire** implémenté from scratch en TypeScript
- **📊 Visualisation interactive** avec graphiques scatter et ligne de régression
- **📈 Métriques statistiques complètes** : R², corrélation, erreur standard
- **🎨 Interface moderne** avec shadcn/ui et design responsive
- **⭐ Dataset astronomique réel** de 20 étoiles remarquables
- **🧮 Transformation logarithmique** pour modéliser la relation magnitude-distance

## Technologies Utilisées

- **TypeScript** - Typage strict et sécurité des calculs mathématiques
- **React** - Interface utilisateur moderne avec hooks
- **shadcn/ui** - Composants UI de haute qualité
- **Tailwind CSS** - Styling utilitaire et responsive design
- **Recharts** - Visualisations interactives
- **Lucide React** - Icônes modernes

## Structure du Code

```
src/
├── components/
│   ├── stellar/
│   │   ├── StellarRegression.tsx    
│   │   ├── Header.tsx               
│   │   ├── VisualizationTab.tsx     
│   │   ├── MetricsTab.tsx           
│   │   ├── DataTab.tsx              
│   │   └── Footer.tsx               
│   └── ui/                           
├── data/
│   └── stellarData.ts               
├── types/
│   └── stellar.ts                   
├── utils/
│   └── regression.ts                
└── lib/
    └── utils.ts                     
```

## Prérequis

- Node.js (version 18 ou supérieure)
- npm ou yarn
- Navigateur moderne supportant ES6+

## 🔧 Installation

1. **Cloner le repository**
```bash
git clone https://github.com/Amine-er/stellar-linear-regression
cd stellar-linear-regression
```

2. **Installer les dépendances**
```bash
npm install
# ou
yarn install
```

3. **Lancer l'application**
```bash
npm run dev
# ou
yarn dev
```

4. **Ouvrir dans le navigateur**
```
http://localhost:5173
```

## 📊 Dataset

L'application utilise les données de 20 étoiles remarquables incluant :

| ID  | Étoile           | Distance (pc) | Magnitude |
| --- | ------------------- | ------------- | ------------------ |
| 1   | Proxima Centauri    | 1.3           | 11.13              |
| 2   | Alpha Centauri A    | 1.35          | -0.01              |
| 3   | Sirius A            | 2.64          | -1.46              |
| 4   | Vega                | 7.68          | 0.03               |
| 5   | Arcturus            | 11.26         | -0.05              |
| 6   | Capella A           | 12.9          | 0.08               |
| 7   | Rigel               | 264           | 0.13               |
| 8   | Procyon A           | 3.51          | 0.34               |
| 9   | Betelgeuse          | 197           | 0.50               |
| 10  | Altair              | 5.13          | 0.77               |
| 11  | Aldebaran           | 20.0          | 0.85               |
| 12  | Antares             | 170           | 1.09               |
| 13  | Spica               | 76.9          | 1.04               |
| 14  | Pollux              | 10.32         | 1.14               |
| 15  | Fomalhaut           | 7.7           | 1.16               |
| 16  | Deneb               | 802           | 1.25               |
| 17  | Regulus             | 24.3          | 1.35               |
| 18  | Adhara              | 133           | 1.50               |
| 19  | Castor A            | 15.6          | 1.57               |
| 20  | Bellatrix           | 76.2          | 1.64               |


*Dataset complet visible dans l'onglet "Données" de l'application*

## Algorithme de Régression

L'implémentation utilise la méthode des moindres carrés :

### Formules Mathématiques

**Droite de régression :** `y = mx + b`

Où :
- `m = (n∑xy - ∑x∑y) / (n∑x² - (∑x)²)` (pente)
- `b = (∑y - m∑x) / n` (ordonnée à l'origine)

**Coefficient de corrélation :**
```
r = (n∑xy - ∑x∑y) / √[(n∑x² - (∑x)²)(n∑y² - (∑y)²)]
```

**Coefficient de détermination :** `R² = r²`

### Transformation Logarithmique

La relation magnitude-distance suit une loi logarithmique :
```typescript
const x = data.map(d => Math.log10(d.distance));
const y = data.map(d => d.magnitude);
```
## Résultats

L'analyse révèle une **forte corrélation** (R² ≈ 0.85) entre la distance logarithmique et la magnitude, confirmant la relation physique attendue en astronomie.

### Métriques Typiques
- **R² :** ~0.85 (excellent ajustement)
- **Corrélation :** ~0.92 (très forte)
- **Erreur standard :** ~1.2 magnitude

## UI Preview

> Les captures d’écran ci-dessous présentent les vues principales de l’interface de l’application.

- Visualisation interactive avec ligne de régression
<img width="1883" height="911" alt="image" src="https://github.com/user-attachments/assets/8acfecf5-c7ff-4f3e-aa58-60355ebca8e9" />

- Métriques statistiques
<img width="1872" height="917" alt="image" src="https://github.com/user-attachments/assets/03aba9c4-b9a6-4e7a-a71c-1551e5b683ef" />

- Dataset astronomique réel
<img width="1877" height="957" alt="image" src="https://github.com/user-attachments/assets/8bc66089-aa89-4f14-81d8-1c17e25424b5" />



