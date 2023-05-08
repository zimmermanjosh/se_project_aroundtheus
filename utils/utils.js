export function openModal(modal) {
  modal.classList.add('modal_open');
  document.addEventListener('keydown', handleEscClose);
  modal.addEventListener('click', handleOverlayClose);
}

export function closeModal(modal) {
  modal.classList.remove('modal_open');
  document.removeEventListener('keydown', handleEscClose);
  modal.removeEventListener('click', handleOverlayClose);
}

export function handleEscClose(event) {
  if (event.key === 'Escape') {
    const modal = document.querySelector('.modal_open');
    closeModal(modal);
  }
}

export function handleOverlayClose(event) {
  if (event.target === event.currentTarget) {
    const modal = document.querySelector('.modal_open');
    closeModal(modal);
  }
}
