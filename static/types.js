export const ProductStatus = {
  wasted: 'wasted', // was not consumed and wasted before predicted date
  expired: 'expired', // expired before predicted date
  consumed: 'consumed',
  pending: 'pending',
}

export const ProductCategories = {
  'Backwaren​​​': {
    amount: 1,
    type: 'month',
  },
  'Cerealien​​​​': { amount: 6, type: 'months' },
  'Fertiggerichte​​​​': { amount: 2, type: 'months' },
  'Grundnahrungsmittel​​​': { amount: 2, type: 'months' },
  'Teigwaren​​​​': { amount: 12, type: 'months' },
  'Brotaufstriche​​​​': { amount: 12, type: 'months' },
  Öl: { amount: 1, type: 'months' },
  'Essig​​​​': { amount: 1, type: 'months' },
  Soßen: { amount: 12, type: 'months' },
  Suppen: { amount: 12, type: 'months' },
  'Gewürze​​​​': { amount: 12, type: 'months' },
  'Salzgebäck​​​​': { amount: 6, type: 'months' },
  'Süßgebäck​​​​': { amount: 6, type: 'months' },
  'Süßwaren​​​​': { amount: 2, type: 'months' },
  Powerfood: { amount: 2, type: 'months' },
  Obstkonserven: { amount: 12, type: 'months' },
  Sauerkonserven: { amount: 12, type: 'months' },
  Obst: { amount: 2, type: 'months' },
  'Gemüse​​​': { amount: 2, type: 'months' },
  'Getränke​​': { amount: 2, type: 'months' },
  Heißgetränke: { amount: 12, type: 'months' },
  Unbekannt: { amount: 1, type: 'months' },
}
