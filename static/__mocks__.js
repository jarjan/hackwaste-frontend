import { ProductStatus } from './types'

export const mockProducts = [
  {
    id: 1,
    ean: '4260576870063',
    title: 'Karacho Reis Kokos',
    bestBeforeDate: '7th September 2019', // date on product description
    category: 'Getränke',
    wasteDate: '16th November 2019', // date estimated by app, fe: bestBeforeDate+12days
    status: ProductStatus.pending,
    imgSrc: 'https://images-na.ssl-images-amazon.com/images/I/71qpbLpSuCL._SY445_.jpg',
  },
  {
    id: 2,
    ean: '0856991004905',
    title: 'Nick´s Coconut Bar',
    bestBeforeDate: '2th October 2019',
    category: 'Süßwaren',
    wasteDate: '16th September 2020',
    status: ProductStatus.pending,
    imgSrc:
      'https://www.lloydsapotek.se/medias/00856991004905-lloyds-se-media-pearlx300?context=bWFzdGVyfHJvb3R8NjAwMjN8aW1hZ2UvanBlZ3xoMmUvaDkzLzk3MDU1MTMyODc3MTAuanBnfDZlZWM0MTViNmY3YWNmZjEwZDNmMGU3M2VjMjBjYWI3OGE5YjVkMjFjMzY1ZmIyOWQ0Nzg2MWNkZGMyYTZmN2Q',
  },
  {
    id: 3,
    ean: '4260397980354',
    title: 'Lucuma & Kakao-nibs',
    bestBeforeDate: '30th April 2019',
    category: 'Cerealien',
    wasteDate: '30th September 2019',
    status: ProductStatus.pending,
    imgSrc: 'https://cdn.shopify.com/s/files/1/1927/4841/products/DSC_0014_512x.JPG?v=1563993896',
  },
  {
    id: 4,
    ean: '4260376849009',
    title: 'Lycka Cold Brew mit Reisdrink',
    bestBeforeDate: '14th May 2019',
    category: 'Getränke',
    wasteDate: '14th June 2019',
    status: ProductStatus.pending,
    imgSrc:
      'https://cdn.shopify.com/s/files/1/2206/1145/products/Lycka_Coldbrew_Renderings_Black_RGB_medium.png?v=1558435322',
  },
  {
    id: 5,
    ean: '4260402484259',
    title: 'Bio Super Choc Bar',
    bestBeforeDate: '18th September 2019',
    category: 'Powerfood',
    wasteDate: '16th September 2020',
    status: ProductStatus.pending,
    imgSrc:
      'https://cdn.shopify.com/s/files/1/1927/4841/products/super-choc-bar-kakaonib-lucuma-1600x1600px-onlineshop_x700.jpg?v=1563991013',
  },
  {
    id: 6,
    ean: '4260397980354',
    title: 'Friendly Avocado',
    bestBeforeDate: '7th September 2019',
    category: 'Gemüße',
    wasteDate: '16th September 2019',
    status: ProductStatus.pending,
    imgSrc: 'https://www.fructo.com.ua/image/cache/catalog/fruct/avokato-1400x1400.png',
  },
]

export const mockLeaders = [
  {
    id: 1,
    name: 'Merey',
    score: Math.floor(Math.random() * 15000),
    imgSrc: '/profiles/Merey.jpg',
  },
  {
    id: 2,
    name: 'Olzhas',
    score: Math.floor(Math.random() * 15000),
    imgSrc: '/profiles/Olzhas.jpg',
  },
  {
    id: 3,
    name: 'Zharzhan',
    score: Math.floor(Math.random() * 15000),
    imgSrc: '/profiles/Zharzhan.jpg',
  },
  {
    id: 4,
    name: 'Markus',
    score: Math.floor(Math.random() * 15000),
    imgSrc: '/profiles/Markus.jpg',
  },
  {
    id: 5,
    name: 'Johannes',
    score: Math.floor(Math.random() * 15000),
    imgSrc: '/profiles/Johannes.jpg',
  },
  {
    id: 6,
    name: 'Julia',
    score: Math.floor(Math.random() * 15000),
    imgSrc: '/profiles/Julia.jpg',
  },
  {
    id: 7,
    name: 'Pauline',
    score: Math.floor(Math.random() * 15000),
    imgSrc: '/profiles/Pauline.jpg',
  },
]
