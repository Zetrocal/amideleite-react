import { useState } from "react";

const useModal = () => {
	const [modalState, setModalState] = useState(false);
	const openModal: Function = () => {
		setModalState(true);
	};
	const closeModal: Function = () => {
		setModalState(false);
	};
	const toggleModal: Function = () => {
		setModalState((prevState) => !prevState);
	};
	return {
		modalState,
		openModal,
		closeModal,
		toggleModal,
	};
};

export default useModal;
