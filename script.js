
function handleKeyDown(event, nextElementId) {
    if (event.key === 'Enter') {
        event.preventDefault();
        const nextElement = document.getElementById(nextElementId);
        if (nextElement.tagName === 'INPUT') {
            nextElement.focus();
        } else if (nextElement.tagName === 'BUTTON') {
            calculate();
        }
    }
}

function calculate() {
    const sp = parseFloat(document.getElementById("sp").value);
    const dp = parseFloat(document.getElementById("dp").value);
    const coeff = parseFloat(document.getElementById("coeff").value);
    
    if (!isNaN(sp) && !isNaN(dp) && !isNaN(coeff)) {
        const product = sp * dp;
        const sqrtResult = Math.sqrt(product);
        const finalResult = sqrtResult * coeff;
        
        // Display result with structured format
        document.getElementById("result").innerText = `
            MCF Result: ${finalResult.toFixed(2)}

            Inputs:
            SP = ${sp}, DP = ${dp}, Coeff = ${coeff}
        `;
        
        // Clear input fields
        document.getElementById("sp").value = '';
        document.getElementById("dp").value = '';
        document.getElementById("coeff").value = '';
        
        // Move focus back to the first input field after calculating
        document.getElementById("sp").focus();
    } else {
        document.getElementById("result").innerText = "Please enter valid numbers for SP, DP, and coeff.";
    }
}

function resetFields() {
    document.getElementById("sp").value = '';
    document.getElementById("dp").value = '';
    document.getElementById("coeff").value = '';
    
    document.getElementById("result").innerText = '';
    document.getElementById("sp").focus();
}
