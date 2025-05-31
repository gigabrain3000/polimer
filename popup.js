export function generatePopUp(e) {
  if (e.target.closest(".button")) {
    Swal.fire({
      title: '<strong>Свяжитесь с нами – это просто!</strong>',
      text: 'Хотите узнать больше или обсудить сотрудничество? Мы всегда на связи! Гарантируем быструю обратную связь и профессиональный подход. Ваши вопросы – наша возможность предложить лучшее решение!',
      color: "#000000",
      imageUrl: "./assets/images/customer-support.jpg",
      width: "70%",
      imageWidth: "70%",
      showCloseButton: true,
      showCancelButton: true,
      confirmButtonText: '<a href="tel:+375297451006" class="link link_popup">Позвонить</a>',
      cancelButtonText: '<a href="mailto:a741006a@mail.ru" class="link link_popup">Написать</a>',
      buttonsStyling: false,
      customClass: {
        popup: 'custom__popup',
        confirmButton: 'button button_popup',
        cancelButton: 'button button_popup',
        image: "popup_img",
      }
    });
  }
}