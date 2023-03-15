import React from "react";
import { Modal,Button } from "react-bootstrap";
import { useState } from "react";
function Sources (){
    const [showModal,setShow]=useState(false);
    const handleOpen=()=>{setShow(true)};
    const handleClose=()=>{setShow(false)};
    return(
        <>
        <Button variant='red'onClick={handleOpen}>Sources Used on this Project</Button>
        <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sources for site Components</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <a href="https://www.freepik.com/free-photo/team-soldiers-walk-city-after-nuclear-war-illustration_14402271.htm#query=war&position=7&from_view=search&track=sph#position=7&query=war">Image  #1</a> <br/>
        <a href="https://www.freepik.com/free-photo/destroyed-city_14541135.htm#query=doomsday&position=3&from_view=search&track=sph">Image #2</a> <br/>
        <a href="https://www.freepik.com/free-photo/cruel-war-scenes-digital-painting_15174538.htm#query=war&position=0&from_view=search&track=sph">Image #3 </a><br/>
        <a href='design.ai'>Flat Images</a><br/>
        <a href='flaticon.com'>Icons</a>
        </Modal.Body>
      </Modal>
        </>
    );
}
export default Sources;