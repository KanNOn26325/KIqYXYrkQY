// 代码生成时间: 2025-10-12 17:12:51
  // Svelte component to handle price calculation
  export let basePrice = 0; // The base price of the product
  export let taxRate = 0; // The tax rate percentage
  export let discount = 0; // The discount percentage

  // Function to calculate the final price
  function calculateFinalPrice() {
    try {
      const priceWithTax = basePrice * (1 + taxRate / 100);
      const discountAmount = priceWithTax * (discount / 100);
      const finalPrice = priceWithTax - discountAmount;
      return finalPrice;
    } catch (error) {
      // Handle any unexpected errors
      console.error('Error calculating price:', error);
      return basePrice; // Default to base price if an error occurs
    }
  }

  // Function to validate the input values
  function validateInputs(basePrice, taxRate, discount) {
    if (basePrice < 0 || taxRate < 0 || discount < 0) {
      throw new Error('Base price, tax rate, and discount should not be negative.');
    }
  }
</script>

<!-- HTML template for the price calculator component -->
<div>
  <h1>Price Calculator</h1>
  <p>Base Price: {basePrice}, Tax Rate: {taxRate}%, Discount: {discount}%</p>
  <p>Final Price: {calculateFinalPrice()}</p>
</div>
