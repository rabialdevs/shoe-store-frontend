export const getDiscountedPricePercentage = (originalPrice,discountPrice)=>{
  const discount = originalPrice - discountPrice;
  const percentage = (discount / originalPrice) * 100;
  return percentage.toFixed(2);
}