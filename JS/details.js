/* START IMAGE GALLERY */
function imgGallery() {
  const mainImg = document.querySelector(".details-img"),
    smallimg = document.querySelectorAll(".details-small-img");

  smallimg.forEach((img) => {
    img.addEventListener("click", function () {
      mainImg.src = this.src;
    });
  });
}
imgGallery();
/* End IMAGE GALLERY */

/* START IMAGE DETAILS */
window.addEventListener("DOMContentLoaded", (event) => {
  const urlParams = new URLSearchParams(window.location.search);
  const srcParam = urlParams.get("src");
  const hoverParam = urlParams.get("hover");

  const detailsImage = document.querySelector(".details-img.main");
  const detailsImagemain = document.querySelector(".details-small-img.main");
  const detailsImagesub = document.querySelectorAll(".details-small-img.sub");

  if (srcParam) {
    detailsImage.src = srcParam;
    detailsImagemain.src = srcParam;
  }

  if (hoverParam) {
    detailsImagesub.forEach((img) => {
      img.src = hoverParam;
    });
  }
});
/* END IMAGE DETAILS */
