import { useEffect, useContext } from "react";
import { BannerContext } from "./Contexts/BannerContext";
import { Modal, ModalHeader, ModalBody, ModalFooter, Placeholder } from "reactstrap"
import { FEATURED_STORIES } from "../shared/FeaturesStories";
import placeholder from '../images/modal-placeholder.png';

export default function StoryModal({ isStoryModalOpen, toggleStoryModal, selectedStory}) {
    const { storyData, setStoryData } = useContext(BannerContext)

    useEffect(() => {
        fetchStory();
    })

    const fetchStory = () => {
        for (let i of FEATURED_STORIES) {
            if (i.id === selectedStory) {
                setStoryData(i)
            }
        }
    }

    return (
        <Modal className="content-modal" isOpen={isStoryModalOpen} toggle={toggleStoryModal}>
            {/* <ModalHeader toggle={toggleStoryModal}><h5 className="pl-5">{storyData?.title}</h5></ModalHeader> */}
            <ModalBody>
                <img className="img-fluid mb-3" src={placeholder}/>
                <h5 className="text-center summary-story-title">{storyData?.title}</h5>
                {storyData?.story}
                </ModalBody>
            <ModalFooter><div onClick={(e) => {e.preventDefault(); toggleStoryModal()}}>Close</div></ModalFooter>
        </Modal>
    )

};