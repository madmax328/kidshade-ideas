import Stripe from 'stripe';

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-04-10',
  typescript: true,
});

export const PLANS = {
  free: {
    name: 'Gratuit',
    nameEn: 'Free',
    price: 0,
    storiesPerMonth: 5,
    features: {
      fr: ['5 histoires / mois', 'Texte uniquement', 'Toutes les langues'],
      en: ['5 stories / month', 'Text only', 'All languages'],
      es: ['5 cuentos / mes', 'Solo texto', 'Todos los idiomas'],
      pt: ['5 histórias / mês', 'Somente texto', 'Todos os idiomas'],
      de: ['5 Geschichten / Monat', 'Nur Text', 'Alle Sprachen'],
    },
  },
  premium: {
    name: 'Premium',
    nameEn: 'Premium',
    price: 2.99,
    storiesPerMonth: Infinity,
    priceId: process.env.STRIPE_PREMIUM_PRICE_ID,
    features: {
      fr: ['Histoires illimitées', 'Illustrations IA', 'Lecture audio', 'Sauvegarde cloud', 'Option livre physique'],
      en: ['Unlimited stories', 'AI illustrations', 'Audio reading', 'Cloud backup', 'Physical book option'],
      es: ['Cuentos ilimitados', 'Ilustraciones IA', 'Lectura en audio', 'Nube', 'Opción libro físico'],
      pt: ['Histórias ilimitadas', 'Ilustrações IA', 'Leitura em áudio', 'Nuvem', 'Livro físico'],
      de: ['Unbegrenzte Geschichten', 'KI-Illustrationen', 'Audiovorlesen', 'Cloud', 'Physisches Buch'],
    },
  },
} as const;
