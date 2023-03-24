import { useEffect, useState } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap"
import { STORIES } from "../shared/Stories";

export default function StoryModal({ isStoryModalOpen, toggleStoryModal, selectedStory}) {
    const [storyData, setStorydata] = useState(null)

    useEffect(() => {
        fetchStory();
    })

    const fetchStory = () => {
        for (let i of STORIES) {
            if (i.id === selectedStory) {
                setStorydata(i)
            }
        }
    }

    return (
        <Modal isOpen={isStoryModalOpen} toggle={toggleStoryModal}>
            <ModalHeader toggle={toggleStoryModal}>{storyData?.name}</ModalHeader>
            <ModalBody>{storyData?.story}</ModalBody>
            <ModalFooter><div onClick={() => {toggleStoryModal()}}>Close</div></ModalFooter>
        </Modal>
    )

};