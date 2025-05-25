Hooks.on("initializeDynamicTokenRingConfig", (registry) => {
  const rings = [
    "copper",
    "gold-and-platinum",
    "hematite",
    "iron",
    "moonstone",
    "pure-gold",
    "tainted-iron",
    "vanadium",
    "lithium",
    "gold-lithium"
  ];

  for (const ring of rings) {
    const key = ring.replace(/-/g, "") + "Ring";
    const label = "KCTG " + ring.replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase()) + " Ring";
    const spritesheet = `modules/kctg-token-rings/assets/ring/${ring}/rings.json`;

    registry.addConfig(key, new foundry.canvas.tokens.DynamicRingData({
      label,
      spritesheet,
      effects: {
      RING_PULSE: "TOKEN.RING.EFFECTS.RING_PULSE",
      RING_GRADIENT: "TOKEN.RING.EFFECTS.RING_GRADIENT",
      BKG_WAVE: "TOKEN.RING.EFFECTS.BKG_WAVE",
      INVISIBILITY: "TOKEN.RING.EFFECTS.INVISIBILITY"
      },
      onLoad: (ring) => {
    console.log(`Loaded ring ${key}`, ring);
    console.log('Background frame:', ring.spritesheet.frames["token-ring-bkg"]);
  }
}));
  }
});
