import React from "react";
import styled from "styled-components";
import Dialog from "@material-ui/core/Dialog";
import Slide from "@material-ui/core/Slide";

import NewEventForm from "./NewEventForm";
import { useHistory } from "react-router-dom";
import About from "./About";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function NewEventDialog({ refreshEvents }) {
  const [open, setOpen] = React.useState(false);
  const history = useHistory();

  const handleClickOpen = () => {
    console.log("hello");
    alert("msg printed");
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {/* <NewEventIcon onClick={handleClickOpen}>+</NewEventIcon> */}
      <NewEventIcon onClick={() => history.push("/about")}>
          {/* <GoCalendar size="40" color={`${COLORS.icon1}`} /> */}
          <IconText>+</IconText>
        </NewEventIcon>
      <Dialog
      fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}>
      
        
        <NewEventForm closeDialog={handleClose} refreshEvents={refreshEvents}/>
      </Dialog>
    </div>
  );
}
const NewEventIcon = styled.button`
  font-size: 3rem;
  font-weight: 200;
  line-height: 1rem;
  width: 50px;
  height: 50px;
  border-radius: 50px;
  border: none;
  color: white;
  background-color: rgb(222, 87, 102);
  position: fixed;
  bottom: 10px;
  right: 10px;
  &:focus {
    outline: none;
  }
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;
const IconText = styled.div`
  font-size: 1rem;
  font-weight: 600;
  padding-top: 5px;
  padding-bottom: 5px;
  font-family: "Varela Round", sans-serif;
`;
