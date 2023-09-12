import React, {useState,useEffect} from "react";
import { DropzoneDialog } from "material-ui-dropzone";
import Button from "@material-ui/core/Button";

const Dropzone =()=> {

  const[show,setshow]=useState();

 const handleClose=()=> {
  setshow({
      open: false,
    });
  }

 const handleSave=(files)=> {
    //Saving files to state for further use and closing Modal.
    setshow({
      files: files,
      open: false,
    });
  }

const handleOpen=()=> {
  setshow({
      open: true,
    });
  }


    return (
      <div>
        <Button onClick={handleOpen.bind(this)}>Add Image</Button>
        <DropzoneDialog
          open={state.open}
          onSave={handleSave.bind(this)}
          acceptedFiles={["image/jpeg", "image/png", "image/bmp"]}
          showPreviews={true}
          maxFileSize={5000000}
          onClose={handleClose.bind(this)}
        />
      </div>
    );
  }


  export default Dropzone;