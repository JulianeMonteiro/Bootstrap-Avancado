document.addEventListener("DOMContentLoaded", function () {
  const modalPromo = new bootstrap.Modal("#promo-modal");

  setTimeout(function () {
    modalPromo.show();
  }, 2000);
});

$("form").on("submit", function (e) {
  e.preventDefault();
  $(function () {
    $("form").submit(function () {
      $("form input").val("");
      $("form textarea").val("");
      alert("Mensagem enviada com sucesso");
    });
  });
});
