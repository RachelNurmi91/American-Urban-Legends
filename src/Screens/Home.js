import { useState } from "react";
import Banner from './Banner'
import HomeContent from './HomeContent';
import Midwest from './Midwest';
import Northeast from './Northeast';
import Southeast from './Southeast';
import Southwest from './Southwest';
import West from './West';
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap"


const Home = () => {
    const [isStoryModalOpen, setIsStoryModalOpen] = useState(false);

    const toggleStoryModal = () => {
        setIsStoryModalOpen(!isStoryModalOpen);
    }

    const sendStoryToState = (story) => {
        // Here we will set the Redux state with the chosen story
    }


    return (
        <>
            <div id='home'>
                <Banner />
                <HomeContent sendStoryToState={sendStoryToState}/>
                <Northeast sendStoryToState={sendStoryToState}/>
                <Midwest sendStoryToState={sendStoryToState}/>
                <West sendStoryToState={sendStoryToState}/>
                <Southwest sendStoryToState={sendStoryToState}/>
                <Southeast sendStoryToState={sendStoryToState}/>
            </div>
            <Modal isOpen={isStoryModalOpen} toggle={toggleStoryModal}>
                <ModalHeader toggle={toggleStoryModal}>Header</ModalHeader>
                <ModalBody>Body</ModalBody>
                <ModalFooter>Footer</ModalFooter>
            </Modal>
        </>
    )

};

export default Home;