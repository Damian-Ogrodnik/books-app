import Modal from 'react-modal';

export const BookDetails: React.FC = () => (
  <Modal
    isOpen={false}
    // onAfterOpen={afterOpenModal}
    // onRequestClose={closeModal}
    contentLabel="Example Modal"
  >
    <h2>Modal</h2>
  </Modal>
);
