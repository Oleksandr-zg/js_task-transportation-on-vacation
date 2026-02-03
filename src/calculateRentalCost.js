/**
 * @param {number} days
 *
 * @return {number}
 */
const COST_PER_DAY = 40;
const DISCOUNT_1 = 20;
const DISCOUNT_2 = 50;
const NUM_1 = 1;
const NUM_3 = 3;
const NUM_7 = 7;

function calculateRentalCost(days) {
  let result = 0;

  if (days >= NUM_3 && days < NUM_7) {
    result = days * COST_PER_DAY - DISCOUNT_1;
  }

  if (days >= NUM_7) {
    result = days * COST_PER_DAY - DISCOUNT_2;
  }

  if (days >= NUM_1 && days < NUM_3) {
    result = days * COST_PER_DAY;
  }

  return result;
}

module.exports = calculateRentalCost;
