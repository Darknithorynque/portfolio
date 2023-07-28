import React, { useEffect, useState } from "react";

import "./styles.css";

function Modal(props) {
  const [isOpen, setIsOpen] = useState();

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleModalClick = (event) => {
    if (
      event.target.classList.contains("modal") ||
      event.target.closest(".modal-content")
    ) {
      return;
    }
    closeModal();
  };

  useEffect(() => {
    const hasVisitedBefore = sessionStorage.getItem("hasVisited");
    if (!hasVisitedBefore) {
      setIsOpen(true);
      sessionStorage.setItem("hasVisited", "true");
    }
  }, []);

  return (
    <div
      id="modal-id"
      className={isOpen ? "modal" : "modal-display-none"}
      onClick={closeModal}
    >
      <div className="modal-content">
        <h2>Attention !</h2>
        <p>
          There are some problems for deployment of some works on My Works
          section. So you cannot might open those links. In addition some works
          are old and have serious responsive problems. Especially on mobile
          devices.
        </p>
        <button onClick={closeModal}>Understand</button>
      </div>
    </div>
  );
}

export default Modal;
