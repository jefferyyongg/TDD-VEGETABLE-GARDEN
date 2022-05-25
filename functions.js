const getYieldForPlant = (crop, env) => {
  let result = [];
  for(factors in crop.factor){
    result.push((crop.factor[factors][env[factors]] + 100) / 100)
  }

  return crop.yield * result[0] * result[1]
}

const getYieldForCrop = (crops, env) => {
  return getYieldForPlant(crops.crop, env) * crops.numCrops
}

const getTotalYield = (crops) => {
  let total = 0
  for(let i = 0; i < crops.crops.length; i++){
    total += getYieldForPlant(crops.crops[i].crop, crops.environmentFactors) * crops.crops[i].numCrops
  }
  if(crops.crops[0].numCrops == 0)
  {
    total = 0
  }
  return total
}

const getCostsForCrop = (crop, i = 0) => {
  return getYieldForCrop(crop.crops[i], crop.environmentFactors)
}

const getRevenueForCrop = (crop, i = 0) => {
  return getCostsForCrop(crop, i) * crop.crops[i].crop.salePrice
}

const getProfitForCrop = (crop, i) => {
  return getRevenueForCrop(crop, i) - getCostsForCrop(crop, i)
}

const getTotalProfit = (crop) => {
  let totalProfit = 0;
  for(let i = 0; i < crop.crops.length; i++){
    totalProfit += getProfitForCrop(crop, i)
  }
   return totalProfit
}

module.exports = { getYieldForPlant, getYieldForCrop, getTotalYield, getCostsForCrop, getRevenueForCrop, getProfitForCrop, getTotalProfit};