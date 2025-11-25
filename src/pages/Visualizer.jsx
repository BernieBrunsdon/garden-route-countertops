import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

import CountertopVisualizer from '../components/CountertopVisualizer.jsx';
import { materialCatalog } from '../data/materials.js';

const Visualizer = () => {
  const [searchParams] = useSearchParams();

  const { initialMaterial, initialColor } = useMemo(() => {
    const materialParam = searchParams.get('material');
    const colorParam = searchParams.get('color');

    const normalizedMaterial = materialCatalog.find(
      (material) =>
        material.id === materialParam ||
        material.name.toLowerCase() === materialParam?.toLowerCase(),
    );

    const normalizedColor = normalizedMaterial?.colors.find(
      (color) =>
        color.id === colorParam || color.name.toLowerCase() === colorParam?.toLowerCase(),
    );

    return {
      initialMaterial: normalizedMaterial?.id,
      initialColor: normalizedColor?.id,
    };
  }, [searchParams]);

  return (
    <div className="space-y-16">
      <header className="space-y-4">
        <p className="text-xs uppercase tracking-[0.4em] text-accent">
          Countertop Visualizer
        </p>
        <h1 className="font-heading text-4xl text-light">Preview your perfect surface</h1>
        <p className="max-w-3xl text-sm text-light/70">
          Configure material families and colorways, then watch the countertop render
          instantly within our modern kitchen concept. Swap finishes, compare palettes,
          and request a quote in just a few clicks.
        </p>
      </header>

      <CountertopVisualizer
        initialMaterialId={initialMaterial}
        initialColorId={initialColor}
      />
    </div>
  );
};

export default Visualizer;


