// Computer Bundle Purchase Decision Logic

// Format number as Philippine Peso currency
function formatPHP(amount) {
    return new Intl.NumberFormat('en-PH', {
        style: 'currency',
        currency: 'PHP',
        minimumFractionDigits: 2
    }).format(amount);
}

// Format number with commas (for display without currency symbol)
function formatNumber(amount) {
    return new Intl.NumberFormat('en-PH', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(amount);
}

// Main decision logic
function makePurchaseDecision(computerBundlePrice, perPartBundlePrice) {
    const priceDifference = computerBundlePrice - perPartBundlePrice;
    
    if (priceDifference >= 3000) {
        return {
            decision: "Don't buy!",
            message: `Price difference is ₱${formatNumber(priceDifference)}, which is ≥ ₱3,000`,
            recommendation: "Don't buy the bundle. The price difference is too high (≥ ₱3,000). Consider buying parts separately to save money.",
            shouldBuy: false,
            priceDifference: priceDifference
        };
    } else if (priceDifference <= 2999) {
        return {
            decision: "Buy it!",
            message: `Price difference is ₱${formatNumber(priceDifference)}, which is ≤ ₱2,999`,
            recommendation: "Go ahead and buy the bundle! The price difference is acceptable (≤ ₱2,999). The convenience of a bundle might be worth the small premium.",
            shouldBuy: true,
            priceDifference: priceDifference
        };
    }
}

// Calculate and display decision
function calculateDecision() {
    const computerPriceInput = document.getElementById('computerPrice');
    const partsPriceInput = document.getElementById('partsPrice');
    const resultSection = document.getElementById('resultSection');
    const resultContent = document.getElementById('resultContent');
    
    // Get input values
    const computerPrice = parseFloat(computerPriceInput.value);
    const partsPrice = parseFloat(partsPriceInput.value);
    
    // Validation
    if (isNaN(computerPrice) || isNaN(partsPrice)) {
        showError('Please enter valid numbers for both prices!');
        return;
    }
    
    if (computerPrice < 0 || partsPrice < 0) {
        showError('Prices cannot be negative!');
        return;
    }
    
    if (computerPrice === 0 && partsPrice === 0) {
        showError('Please enter prices greater than zero!');
        return;
    }
    
    // Calculate decision
    const result = makePurchaseDecision(computerPrice, partsPrice);
    
    // Display result
    displayResult(computerPrice, partsPrice, result);
    
    // Show result section with animation
    resultSection.style.display = 'block';
    resultSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Display the calculation result
function displayResult(computerPrice, partsPrice, result) {
    const resultContent = document.getElementById('resultContent');
    
    const resultHTML = `
        <div class="price-info">
            <h3>Price Breakdown:</h3>
            <p><strong>Computer Bundle Price:</strong> ₱${formatNumber(computerPrice)}</p>
            <p><strong>Per Part Bundle Price:</strong> ₱${formatNumber(partsPrice)}</p>
            <p><strong>Price Difference:</strong> ₱${formatNumber(result.priceDifference)}</p>
        </div>
        
        <div class="decision-result ${result.shouldBuy ? 'decision-buy' : 'decision-dont-buy'}">
            <strong>${result.decision}</strong><br>
            <span style="font-size: 0.9em;">${result.message}</span>
        </div>
        
        <div class="recommendation">
            <h4>💡 Recommendation:</h4>
            <p>${result.recommendation}</p>
        </div>
        
        <div class="additional-info">
            <h4>📊 Analysis:</h4>
            <ul>
                <li><strong>Savings by buying parts separately:</strong> ₱${formatNumber(Math.abs(result.priceDifference))}</li>
                <li><strong>Percentage difference:</strong> ${((result.priceDifference / partsPrice) * 100).toFixed(2)}%</li>
                <li><strong>Decision threshold:</strong> ${result.priceDifference >= 3000 ? 'Exceeded' : 'Within acceptable range'}</li>
            </ul>
        </div>
    `;
    
    resultContent.innerHTML = resultHTML;
}

// Show error message
function showError(message) {
    const resultSection = document.getElementById('resultSection');
    const resultContent = document.getElementById('resultContent');
    
    resultContent.innerHTML = `
        <div style="background: #f8d7da; color: #721c24; padding: 15px; border-radius: 8px; border: 1px solid #f5c6cb;">
            <h3>❌ Error</h3>
            <p>${message}</p>
        </div>
    `;
    
    resultSection.style.display = 'block';
    resultSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Clear all fields
function clearFields() {
    document.getElementById('computerPrice').value = '';
    document.getElementById('partsPrice').value = '';
    document.getElementById('resultSection').style.display = 'none';
    
    // Reset focus to first input
    document.getElementById('computerPrice').focus();
}

// Add event listeners when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Add enter key support
    const inputs = document.querySelectorAll('input[type="number"]');
    inputs.forEach(input => {
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                calculateDecision();
            }
        });
        
        // Add input validation
        input.addEventListener('input', function(e) {
            // Remove any non-numeric characters except decimal point
            let value = e.target.value;
            if (value < 0) {
                e.target.value = 0;
            }
        });
    });
    
    // Focus on first input when page loads
    document.getElementById('computerPrice').focus();
    
    // Add loading state to calculate button
    const calculateBtn = document.getElementById('calculateBtn');
    const originalCalculate = calculateDecision;
    
    window.calculateDecision = function() {
        calculateBtn.textContent = 'Calculating...';
        calculateBtn.disabled = true;
        
        // Add small delay for better UX
        setTimeout(() => {
            originalCalculate();
            calculateBtn.textContent = 'Check Purchase Decision';
            calculateBtn.disabled = false;
        }, 300);
    };
});

// Add some example functions for demonstration
function loadExample(exampleNumber) {
    const examples = {
        1: { computer: 80000, parts: 50000 },
        2: { computer: 60000, parts: 58000 }
    };
    
    if (examples[exampleNumber]) {
        document.getElementById('computerPrice').value = examples[exampleNumber].computer;
        document.getElementById('partsPrice').value = examples[exampleNumber].parts;
        calculateDecision();
    }
}

// Export functions for potential future use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        makePurchaseDecision,
        formatPHP,
        formatNumber
    };
}