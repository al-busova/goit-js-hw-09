import Notiflix from 'notiflix';
const formEl = document.querySelector('.form');

function createPromise(position, delay) {

  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    
    setTimeout(() => {
       if (shouldResolve) {
         resolve({position, delay});
  } else {
         reject({ position, delay });
  }
    }, delay)
  })

}

function getinfoForm() {
  return formData = {
    amount: formEl.elements.amount.value,
    delay: formEl.elements.delay.value,
    step: formEl.elements.step.value
  }
}

function submitForm(e) {
  e.preventDefault();
  let stepInCollection;
  for (let i = 0; i < getinfoForm().amount; i += 1) {
  stepInCollection = stepInCollection + Number(getinfoForm().step);
    if (i === 0) {
      stepInCollection = Number(getinfoForm().delay);
    }
      createPromise(i + 1, stepInCollection )
        .then(({ position, delay }) => {
          Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
        .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
        }
}
 
formEl.addEventListener('submit',submitForm);
 