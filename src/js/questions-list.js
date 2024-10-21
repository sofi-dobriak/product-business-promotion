const faqs = document.querySelectorAll('.question-details');

faqs.forEach(faq => {
  faq.addEventListener('toggle', function () {
    const answer = faq.querySelector('.answer');
    if (faq.open) {
      answer.style.maxHeight = answer.scrollHeight + 'px';
      answer.style.opacity = 1;
    } else {
      answer.style.maxHeight = 0;
      answer.style.opacity = 0;
    }
  });
});
