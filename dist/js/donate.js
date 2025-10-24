function showKindForm(){
    document.getElementById('kindForm').classList.remove('hidden')
    document.getElementById('paymentForm').classList.add('hidden')
}

function showPaymentForm(){
    document.getElementById('kindForm').classList.add('hidden')
    document.getElementById('paymentForm').classList.remove('hidden')
}