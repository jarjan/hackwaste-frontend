import { ProductStatus } from './types'

export const mockProduct = {
  id: 1,
  ean: '4260397980354',
  title: 'Lucuma & cacao-nibs',
  dueDate: '7th September 2019', // date on product description
  category: 'beans',
  expirationDate: '16th September 2019', // date estimated by app, fe: dueDate+12days
  status: ProductStatus.pending,
  imgSrc: 'https://www.fructo.com.ua/image/cache/catalog/fruct/avokato-1400x1400.png',
}
