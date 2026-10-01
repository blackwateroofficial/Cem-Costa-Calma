/**
 * Publicly listed clinic data (Doctoralia, SaludOnNet).
 * Do not add specialties, hours, insurers or staff not confirmed there.
 */

export const site = {
  name: "Centro Médico Ever Grillo",
  brandLine: "Euromedica Jandía",
  locationShort: "C.C. Cosmo · Morro Jable",
  locationArea: "Jandía · Fuerteventura",
  address: "Avenida del Saladar, C.C. Cosmo, parcela 7A, 35625 Morro Jable",
  phoneDisplay: "928 542 402",
  phoneHref: "tel:+34928542402",
  sanitaryRegister: "27831",
  googleRating: "4.7",
  googleRatingMax: "5",
  googleReviewsUrl:
    "https://www.google.com/search?q=Centro+Medico+Ever+Grillo+Euromedica+Jandia+Morro+Jable",
  mapsSearchUrl:
    "https://www.google.com/maps/search/?api=1&query=Centro+Medico+Ever+Grillo+CC+Cosmo+Morro+Jable",
  mapsEmbedUrl:
    "https://maps.google.com/maps?q=Centro+Comercial+Cosmo+parcela+7A+Morro+Jable+35625&hl=es&z=16&output=embed",
  social: {
    facebook: "https://www.facebook.com/Cem-Costa-Calma-102067171720880",
    instagram: "https://www.instagram.com/cemcostacalma/",
    twitter: "https://x.com/CemCalma",
  },
  facilities: [
    "/images/instalaciones/01.jpg",
    "/images/instalaciones/02.jpg",
    "/images/instalaciones/03.jpg",
    "/images/instalaciones/04.jpg",
    "/images/instalaciones/05.jpg",
    "/images/instalaciones/06.jpg",
    "/images/instalaciones/07.jpg",
    "/images/instalaciones/08.jpg",
  ],
  insurers: {
    national: [
      { src: "/images/aseguradoras/logos/adeslas.png", name: "Adeslas", invert: false },
      { src: "/images/aseguradoras/logos/caser.png", name: "Caser", invert: false },
      { src: "/images/aseguradoras/logos/dkv.png", name: "DKV", invert: false },
      { src: "/images/aseguradoras/logos/mapfre.png", name: "MAPFRE", invert: false },
      { src: "/images/aseguradoras/logos/sanitas.png", name: "Sanitas", invert: false },
      { src: "/images/aseguradoras/logos/divina-pastora.png", name: "Divina Pastora", invert: false },
      { src: "/images/aseguradoras/logos/allianz.png", name: "Allianz", invert: false },
      { src: "/images/aseguradoras/logos/asepeyo.png", name: "Asepeyo", invert: false },
    ],
    international: [
      { src: "/images/aseguradoras/logos/semesur.png", name: "Semesur Assistance", invert: false },
      { src: "/images/aseguradoras/logos/europ-assistance.png", name: "Europ Assistance", invert: false },
      { src: "/images/aseguradoras/logos/internationalsos.png", name: "International SOS", invert: false },
      { src: "/images/aseguradoras/logos/veratour.svg", name: "Veratour", invert: false },
      { src: "/images/aseguradoras/logos/mondial.png", name: "Mondial Assistance", invert: false },
    ],
  },
} as const;

export const serviceHighlights = [
  { id: "generalAmbulance", icons: ["stethoscope", "ambulance"] },
  { id: "diagnostics", icons: ["heart", "scan", "thermometer"] },
  { id: "homeVisits", icons: ["briefcase", "users"] },
  { id: "covid", icons: ["flask"], showPhone: true },
] as const;

export const servicesCatalog = [
  { id: "general" },
  { id: "emergency" },
  { id: "family" },
  { id: "psychology" },
  { id: "radiology" },
] as const;
