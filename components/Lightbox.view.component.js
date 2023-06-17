export default class Lightbox {
  static render({ image }) {
    console.log(image);
    return `
        <div class="modal-content">
        <img
          src="${image}"
          alt="Image"
          id="modalImg"
        />
      </div>
        `;
  }
}
