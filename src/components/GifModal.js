import React from "react";
import Modal from "react-modal";

const GifModal = props => {
  if (!props.selectedGif) {
    return <div />;
  }

  return (
    <Modal
      isOpen={props.modalIsOpen}
      onRequestClose={() => props.onRequestClose()}
      ariaHideApp={false}
    >
      <div>
        <img src={props.selectedGif.images.original.url} alt="" />
        <p>
          <strong>Source:</strong>{" "}
          <a href={props.selectedGif.source}>{props.selectedGif.source}</a>
        </p>
        <p>
          <strong>Rating:</strong> {props.selectedGif.rating}
        </p>

        <button onClick={() => props.onRequestClose()}>close</button>
      </div>
    </Modal>
  );
};

export default GifModal;
