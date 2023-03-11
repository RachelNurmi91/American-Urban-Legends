import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap"

export default function StoryModal({ isStoryModalOpen, toggleStoryModal}) {

    return (
        <Modal isOpen={isStoryModalOpen} toggle={toggleStoryModal}>
            <ModalHeader toggle={toggleStoryModal}>Header</ModalHeader>
            <ModalBody>Body</ModalBody>
            <ModalFooter>Footer</ModalFooter>
        </Modal>
    )

};