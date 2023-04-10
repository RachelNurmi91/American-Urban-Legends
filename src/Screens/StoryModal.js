import { useEffect, useContext } from "react";
import { BannerContext } from "./Contexts/BannerContext";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap"
import { FEATURED_STORIES } from "../shared/FeaturesStories";

export default function StoryModal({ isStoryModalOpen, toggleStoryModal, selectedStory}) {
    const { storyData, setStorydata } = useContext(BannerContext)

    useEffect(() => {
        fetchStory();
    })

    const fetchStory = () => {
        for (let i of FEATURED_STORIES) {
            if (i.id === selectedStory) {
                setStorydata(i)
            }
        }
    }

    return (
        <Modal className="content-modal" isOpen={isStoryModalOpen} toggle={toggleStoryModal}>
            <ModalHeader toggle={toggleStoryModal}><h5>{storyData?.title}</h5></ModalHeader>
            <ModalBody>{storyData?.story}</ModalBody>
            <ModalFooter><div onClick={(e) => {e.preventDefault(); toggleStoryModal()}}>Close</div></ModalFooter>
        </Modal>
    )

};