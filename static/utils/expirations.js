import moment from 'moment'
import { ProductCategories } from '../types'

const calculateWasteDate = (category, bestBeforeDate) => {
  const productCategory = ProductCategories[category]
  let wasteDate
  if (productCategory) {
    wasteDate = moment(bestBeforeDate).add(productCategory.amount, productCategory.type)
  } else {
    console.log(`Category "${category}" not found in system`)
    wasteDate = moment().add(2, 'month')
  }
  return wasteDate.format('Do MMMM YYYY')
}

export const formatMoment = (date) => moment(date).format('Do MMMM YYYY')

export default calculateWasteDate
