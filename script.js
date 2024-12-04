/* script.js */
document.addEventListener('DOMContentLoaded', () => {
    // Handle amount selection
    const amountBtns = document.querySelectorAll('.amount-btn');
    const customAmount = document.getElementById('customAmount');
  
    amountBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        amountBtns.forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        customAmount.value = '';
      });
    });
  
    customAmount.addEventListener('input', () => {
      amountBtns.forEach(btn => btn.classList.remove('selected'));
    });
  
    // Handle payment method selection
    const paymentMethods = document.querySelectorAll('.payment-method');
    paymentMethods.forEach(method => {
      method.addEventListener('click', () => {
        paymentMethods.forEach(m => m.classList.remove('selected'));
        method.classList.add('selected');
      });
    });
  });
  
  function handleSubmit(event) {
    event.preventDefault();
    
    const selectedAmount = document.querySelector('.amount-btn.selected')?.dataset.amount || document.getElementById('customAmount').value;
    const selectedPayment = document.querySelector('.payment-method.selected')?.dataset.method;
    
    if (!selectedAmount) {
      alert('Por favor, selecione ou digite um valor para doação');
      return false;
    }
    
    if (!selectedPayment) {
      alert('Por favor, selecione uma forma de pagamento');
      return false;
    }
    
    alert('Obrigado pela sua doação! Você será redirecionado para a página de pagamento.');
    return false;
  }/* script.js */
  document.addEventListener('DOMContentLoaded', () => {
    // Handle amount selection
    const amountBtns = document.querySelectorAll('.amount-btn');
    const customAmount = document.getElementById('customAmount');
  
    amountBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        amountBtns.forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        customAmount.value = '';
      });
    });
  
    customAmount.addEventListener('input', () => {
      amountBtns.forEach(btn => btn.classList.remove('selected'));
    });
  
    // Handle payment method selection
    const paymentMethods = document.querySelectorAll('.payment-method');
    paymentMethods.forEach(method => {
      method.addEventListener('click', () => {
        paymentMethods.forEach(m => m.classList.remove('selected'));
        method.classList.add('selected');
      });
    });
  });
  
  function handleSubmit(event) {
    event.preventDefault();
    
    const selectedAmount = document.querySelector('.amount-btn.selected')?.dataset.amount || document.getElementById('customAmount').value;
    const selectedPayment = document.querySelector('.payment-method.selected')?.dataset.method;
    
    if (!selectedAmount) {
      alert('Por favor, selecione ou digite um valor para doação');
      return false;
    }
    
    if (!selectedPayment) {
      alert('Por favor, selecione uma forma de pagamento');
      return false;
    }
    
    alert('Obrigado pela sua doação! Você será redirecionado para a página de pagamento.');
    return false;
  }