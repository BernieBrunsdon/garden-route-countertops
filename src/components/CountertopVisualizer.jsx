import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

import { defaultKitchenImage, materialCatalog } from '../data/materials';

const kitchenVariants = {
  initial: { opacity: 0, scale: 0.98 },
  animate: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } },
  exit: { opacity: 0.2, scale: 0.98, transition: { duration: 0.3 } },
};

const overlayVariants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};

const formatQuoteMessage = (material, color) =>
  `Hi Garden Route Countertops team,%0D%0A%0D%0AI would love to request a quote for the ${color.name} ${material.name.toLowerCase()} countertop.%0D%0A%0D%0AThanks!`;

const CountertopVisualizer = ({ initialMaterialId, initialColorId }) => {
  const navigate = useNavigate();

  const [materialId, setMaterialId] = useState(
    initialMaterialId ?? materialCatalog[0].id,
  );

  const selectedMaterial = useMemo(
    () => materialCatalog.find((item) => item.id === materialId) ?? materialCatalog[0],
    [materialId],
  );

  const [colorId, setColorId] = useState(() => {
    const fallback = selectedMaterial.colors[0]?.id;
    if (!initialColorId) return fallback;
    return selectedMaterial.colors.some((c) => c.id === initialColorId)
      ? initialColorId
      : fallback;
  });

  useEffect(() => {
    if (selectedMaterial.colors.every((color) => color.id !== colorId)) {
      setColorId(selectedMaterial.colors[0]?.id);
    }
  }, [selectedMaterial, colorId]);

  const selectedColor =
    selectedMaterial.colors.find((color) => color.id === colorId) ??
    selectedMaterial.colors[0];

  const handleQuoteRequest = () => {
    if (!selectedMaterial || !selectedColor) return;
    const params = new URLSearchParams({
      material: selectedMaterial.name,
      color: selectedColor.name,
      message: formatQuoteMessage(selectedMaterial, selectedColor),
    }).toString();

    navigate(`/contact?${params}`);
  };

  return (
    <div className="space-y-10">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr),360px]">
        <motion.div
          key={`${selectedMaterial.id}-${selectedColor.id}`}
          variants={kitchenVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="relative overflow-hidden rounded-[32px] border border-accent/20 bg-primary shadow-xl"
        >
          <img
            src={defaultKitchenImage}
            alt="Modern kitchen base layout"
            className="h-full w-full object-cover opacity-90"
          />

          <motion.div
            key={selectedColor.id}
            variants={overlayVariants}
            initial="initial"
            animate="animate"
            className="pointer-events-none absolute left-[14%] right-[14%] bottom-[22%] h-[18%] rounded-[28px] border border-accent/40 shadow-glow"
            style={{
              backgroundImage: `linear-gradient(135deg, rgba(14, 15, 22, 0.25), rgba(212, 162, 76, 0.15)), url(${selectedColor.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              mixBlendMode: 'lighten',
            }}
          />
        </motion.div>

        <div className="space-y-8 rounded-3xl border border-white/10 bg-primary/80 p-8 backdrop-blur">
          <header className="space-y-3">
            <p className="text-sm uppercase tracking-[0.3em] text-accent">
              Visualizer
            </p>
            <h2 className="font-heading text-3xl font-semibold text-light">
              Tailor your countertop
            </h2>
            <p className="text-sm text-light/70">{selectedMaterial.description}</p>
          </header>

          <div className="space-y-6">
            <div className="space-y-2">
              <label
                htmlFor="material-select"
                className="text-xs uppercase tracking-[0.25em] text-light/60"
              >
                Material
              </label>
              <select
                id="material-select"
                value={materialId}
                onChange={(event) => setMaterialId(event.target.value)}
                className="w-full rounded-full border border-accent/40 bg-primary px-5 py-3 text-sm text-light shadow-glow focus:border-accent focus:outline-none focus:ring-0"
              >
                {materialCatalog.map((material) => (
                  <option key={material.id} value={material.id}>
                    {material.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-3">
              <span className="text-xs uppercase tracking-[0.25em] text-light/60">
                Palette
              </span>
              <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
                {selectedMaterial.colors.map((color) => {
                  const isActive = color.id === selectedColor?.id;
                  return (
                    <button
                      key={color.id}
                      type="button"
                      onClick={() => setColorId(color.id)}
                      className={`group flex flex-col gap-2 rounded-2xl border px-4 py-4 text-left transition-all duration-300 ${
                        isActive
                          ? 'border-accent bg-accent/10 shadow-glow'
                          : 'border-white/10 bg-primary/70 hover:border-accent/60 hover:bg-white/10'
                      }`}
                    >
                      <span
                        className="h-10 w-full rounded-xl border border-white/10 shadow-inner"
                        style={{
                          backgroundImage: `linear-gradient(135deg, rgba(14, 15, 22, 0.08), rgba(14, 15, 22, 0.3)), url(${color.image})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                        }}
                      />
                      <span className="font-medium text-sm text-light">
                        {color.name}
                      </span>
                      <span className="text-xs text-light/60">{color.info}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-medium text-light">Selected finish</p>
              <p className="text-sm text-light/70">
                {selectedMaterial.name} · {selectedColor?.name}
              </p>
            </div>
            <button
              type="button"
              onClick={handleQuoteRequest}
              className="group inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-primary transition-all duration-300 hover:shadow-glow focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary"
            >
              Request a Quote for This Countertop
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountertopVisualizer;


