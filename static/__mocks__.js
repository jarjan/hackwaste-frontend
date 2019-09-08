import { ProductStatus } from './types'

export const mockProducts = [
  {
    id: 1,
    ean: '4260397980354',
    title: '1 Lucuma & cacao-nibs',
    bestBeforeDate: '7th September 2019', // date on product description
    category: 'Cerealien​​​​',
    wasteDate: '16th September 2019', // date estimated by app, fe: bestBeforeDate+12days
    status: ProductStatus.consumed,
    imgSrc: 'https://www.fructo.com.ua/image/cache/catalog/fruct/avokato-1400x1400.png',
  },
  {
    id: 2,
    ean: '4260397980354',
    title: '2 Lucuma & cacao-nibs',
    bestBeforeDate: '7th September 2019', // date on product description
    category: 'Cerealien​​​​',
    wasteDate: '16th September 2019', // date estimated by app, fe: bestBeforeDate+12days
    status: ProductStatus.pending,
    imgSrc: 'https://www.fructo.com.ua/image/cache/catalog/fruct/avokato-1400x1400.png',
  },
  {
    id: 3,
    ean: '4260397980354',
    title: '3 Lucuma & cacao-nibs',
    bestBeforeDate: '7th September 2019', // date on product description
    category: 'Grundnahrungsmittel​​​',
    wasteDate: '16th September 2019', // date estimated by app, fe: bestBeforeDate+12days
    status: ProductStatus.pending,
    imgSrc: 'https://www.fructo.com.ua/image/cache/catalog/fruct/avokato-1400x1400.png',
  },
  {
    id: 4,
    ean: '4260397980354',
    title: '4 Lucuma & cacao-nibs',
    bestBeforeDate: '7th September 2019', // date on product description
    category: 'Teigwaren​​​​',
    wasteDate: '16th September 2019', // date estimated by app, fe: bestBeforeDate+12days
    status: ProductStatus.pending,
    imgSrc: 'https://www.fructo.com.ua/image/cache/catalog/fruct/avokato-1400x1400.png',
  },
  {
    id: 5,
    ean: '4260397980354',
    title: '5 Lucuma & cacao-nibs',
    bestBeforeDate: '7th September 2019', // date on product description
    category: 'Teigwaren​​​​',
    wasteDate: '16th September 2019', // date estimated by app, fe: bestBeforeDate+12days
    status: ProductStatus.pending,
    imgSrc: 'https://www.fructo.com.ua/image/cache/catalog/fruct/avokato-1400x1400.png',
  },
  {
    id: 6,
    ean: '4260397980354',
    title: '6 Lucuma & cacao-nibs',
    bestBeforeDate: '7th September 2019', // date on product description
    category: 'Teigwaren​​​​',
    wasteDate: '16th September 2019', // date estimated by app, fe: bestBeforeDate+12days
    status: ProductStatus.pending,
    imgSrc: 'https://www.fructo.com.ua/image/cache/catalog/fruct/avokato-1400x1400.png',
  },
  {
    id: 7,
    ean: '4260397980354',
    title: '7 Lucuma & cacao-nibs',
    bestBeforeDate: '7th September 2019', // date on product description
    category: 'Suppen',
    wasteDate: '16th September 2019', // date estimated by app, fe: bestBeforeDate+12days
    status: ProductStatus.pending,
    imgSrc: 'https://www.fructo.com.ua/image/cache/catalog/fruct/avokato-1400x1400.png',
  },
  {
    id: 8,
    ean: '4260397980354',
    title: '8 Lucuma & cacao-nibs',
    bestBeforeDate: '7th September 2019', // date on product description
    category: 'Suppen',
    wasteDate: '16th September 2019', // date estimated by app, fe: bestBeforeDate+12days
    status: ProductStatus.pending,
    imgSrc: 'https://www.fructo.com.ua/image/cache/catalog/fruct/avokato-1400x1400.png',
  },
  {
    id: 9,
    ean: '4260397980354',
    title: '9 Lucuma & cacao-nibs',
    bestBeforeDate: '7th September 2019', // date on product description
    category: 'Suppen',
    wasteDate: '16th September 2019', // date estimated by app, fe: bestBeforeDate+12days
    status: ProductStatus.pending,
    imgSrc: 'https://www.fructo.com.ua/image/cache/catalog/fruct/avokato-1400x1400.png',
  },
  {
    id: 10,
    ean: '4260397980354',
    title: '10 Lucuma & cacao-nibs',
    bestBeforeDate: '7th September 2019', // date on product description
    category: 'Suppen',
    wasteDate: '16th September 2019', // date estimated by app, fe: bestBeforeDate+12days
    status: ProductStatus.pending,
    imgSrc: 'https://www.fructo.com.ua/image/cache/catalog/fruct/avokato-1400x1400.png',
  },
  {
    id: 11,
    ean: '4260397980354',
    title: '11 Lucuma & cacao-nibs',
    bestBeforeDate: '7th September 2019', // date on product description
    category: 'Backwaren​​​',
    wasteDate: '16th September 2019', // date estimated by app, fe: bestBeforeDate+12days
    status: ProductStatus.pending,
    imgSrc: 'https://www.fructo.com.ua/image/cache/catalog/fruct/avokato-1400x1400.png',
  },
  {
    id: 12,
    ean: '4260397980354',
    title: '12 Lucuma & cacao-nibs',
    bestBeforeDate: '7th September 2019', // date on product description
    category: 'Backwaren​​​',
    wasteDate: '16th September 2019', // date estimated by app, fe: bestBeforeDate+12days
    status: ProductStatus.pending,
    imgSrc: 'https://www.fructo.com.ua/image/cache/catalog/fruct/avokato-1400x1400.png',
  },
]

export const mockLeaders = [
  {
    id: 1,
    name: 'Merey',
    score: Math.floor(Math.random() * 10000),
    imgSrc: '/profiles/Merey.jpg',
  },
  {
    id: 2,
    name: 'Olzhas',
    score: Math.floor(Math.random() * 10000),
    imgSrc: '/profiles/Olzhas.jpg',
  },
  {
    id: 3,
    name: 'Zharzhan',
    score: Math.floor(Math.random() * 10000),
    imgSrc: '/profiles/Zharzhan.jpg',
  },
  {
    id: 4,
    name: 'Marcus',
    score: Math.floor(Math.random() * 10000),
    imgSrc: '/profiles/Marcus.jpg',
  },
  {
    id: 5,
    name: 'Johannes',
    score: Math.floor(Math.random() * 10000),
    imgSrc: '/profiles/Johannes.jpg',
  },
  {
    id: 6,
    name: 'Julia',
    score: Math.floor(Math.random() * 10000),
    imgSrc: '/profiles/Julia.jpg',
  },
  {
    id: 7,
    name: 'Pauline',
    score: Math.floor(Math.random() * 10000),
    imgSrc: '/profiles/Pauline.jpg',
  },
]
