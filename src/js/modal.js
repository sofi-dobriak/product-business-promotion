const modal = document.querySelector('.modal-overlay');
const modalBtnsOpen = document.querySelectorAll('.modal-btn-open');
const modalBtnClose = document.querySelector('.modal-btn-close');

const toggleModal = () => {
  modal.classList.toggle('is-open');
};

modalBtnsOpen.forEach(btn => btn.addEventListener('click', toggleModal));
modalBtnClose.addEventListener('click', toggleModal);
