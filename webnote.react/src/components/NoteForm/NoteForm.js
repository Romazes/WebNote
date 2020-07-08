import React, { useEffect } from "react";
import { Grid, TextField, Button } from "@material-ui/core";
import Send from "@material-ui/icons/Send";
import HandlingForm from "./handlingForm";
import "./NoteForm.css";
import { connect } from "react-redux";
import * as actions from "../../actions/note";
import { useToasts } from "react-toast-notifications";

const initialFieldValues = {
  name: "",
  description: "",
};

const NoteForm = ({ ...props }) => {
  const { addToast } = useToasts();

  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ("name" in fieldValues)
      temp.name = fieldValues.name ? "" : "Input pls Topic of your Note.";
    if ("description" in fieldValues)
      temp.description = fieldValues.description
        ? ""
        : "This field is required.";
    setErrors({
      ...temp,
    });
    if (fieldValues === values)
      return Object.values(temp).every((t) => t === "");
  };

  const {
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange,
  } = HandlingForm(initialFieldValues, validate);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const onSuccess = () => {
        addToast("Submitted successfully", { appearance: "success" });
      };
      if (props.currentId === 0) props.creatNote(values, onSuccess);
      else props.updateNote(props.currentId, values, onSuccess);
    }
  };

  useEffect(() => {
    if (props.currentId !== 0) {
      setValues({
        ...props.NoteList.find((x) => x.id === props.currentId),
      });
      setErrors({});
    }
  }, [props.currentId]);

  return (
    <form
      autoComplete="off"
      noValidate
      className={"noteForm"}
      onSubmit={handleSubmit}
    >
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <TextField
            className="titleField"
            name="name"
            label="Topic"
            variant="filled"
            fullWidth
            multiline
            value={values.name}
            onChange={handleInputChange}
            {...(errors.name && { error: true, helperText: errors.name })}
          ></TextField>
        </Grid>
        <Grid item xs={8}>
          <TextField
            className="descriptionField"
            name="description"
            label="Description"
            placeholder="..."
            fullWidth
            multiline
            rows={6}
            value={values.description}
            onChange={handleInputChange}
            {...(errors.description && {
              error: true,
              helperText: errors.description,
            })}
          ></TextField>
          <div className={"buttons"}>
            <Button
              variant="contained"
              color="primary"
              startIcon={<Send />}
              type="submit"
            >
              Add Note
            </Button>
          </div>
        </Grid>
      </Grid>
    </form>
  );
};

const mapStateToProps = (state) => ({
  NoteList: state.note.list,
});

const mapActionToProps = {
  creatNote: actions.create,
  updateNote: actions.update,
};

export default connect(mapStateToProps, mapActionToProps)(NoteForm);
