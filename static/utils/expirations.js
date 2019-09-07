import moment from 'moment'

const calculateWasteDate = (category, bestBeforeDate) => {
  let wasteDate

  switch (category) {
    case 'Backwaren​​​':
      wasteDate = moment(bestBeforeDate).add('1', 'month')
      break
    case 'Cerealien​​​​':
      wasteDate = moment(bestBeforeDate).add('6', 'months')
      break
    case 'Fertiggerichte​​​​':
      wasteDate = moment(bestBeforeDate).add('2', 'months')
      break
    case 'Grundnahrungsmittel​​​':
      wasteDate = moment(bestBeforeDate).add('2', 'months')
      break
    case 'Teigwaren​​​​':
      wasteDate = moment(bestBeforeDate).add('12', 'months')
      break
    case 'Brotaufstriche​​​​':
      wasteDate = moment(bestBeforeDate).add('12', 'months')
      break
    case 'Öl':
      wasteDate = moment(bestBeforeDate).add('1', 'months')
      break
    case 'Essig​​​​':
      wasteDate = moment(bestBeforeDate).add('1', 'months')
      break
    case 'Soßen':
      wasteDate = moment(bestBeforeDate).add('12', 'months')
      break
    case 'Suppen':
      wasteDate = moment(bestBeforeDate).add('12', 'months')
      break
    case 'Gewürze​​​​':
      wasteDate = moment(bestBeforeDate).add('12', 'months')
      break
    case 'Salzgebäck​​​​':
      wasteDate = moment(bestBeforeDate).add('6', 'months')
      break
    case 'Süßgebäck​​​​':
      wasteDate = moment(bestBeforeDate).add('6', 'months')
      break
    case 'Süßwaren​​​​':
      wasteDate = moment(bestBeforeDate).add('2', 'months')
      break
    case 'Powerfood':
      wasteDate = moment(bestBeforeDate).add('2', 'months')
      break
    case 'Obstkonserven':
      wasteDate = moment(bestBeforeDate).add('12', 'months')
      break
    case 'Sauerkonserven':
      wasteDate = moment(bestBeforeDate).add('12', 'months')
      break
    case 'Obst':
      wasteDate = moment(bestBeforeDate).add('2', 'months')
      break
    case 'Gemüse​​​':
      wasteDate = moment(bestBeforeDate).add('2', 'months')
      break
    case 'Getränke​​':
      wasteDate = moment(bestBeforeDate).add('2', 'months')
      break
    case 'Heißgetränke':
      wasteDate = moment(bestBeforeDate).add('12', 'months')
      break
  }

  return wasteDate.format('Do MMMM YYYY')
}

export const formatMoment = (date) => moment(date).format('Do MMMM YYYY')

export default calculateWasteDate
