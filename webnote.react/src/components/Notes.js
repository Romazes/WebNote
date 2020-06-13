import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/note";
import NoteForm from "./NoteForm/NoteForm";
import { useToasts } from "react-toast-notifications";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import {
  Container,
  Grid,
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  ButtonGroup,
  Button,
} from "@material-ui/core";

const Notes = ({ ...props }) => {
  const [currentId, setCurrentId] = useState(0);

  useEffect(() => {
    props.fetchAllNotes();
  }, []);

  const { addToast } = useToasts();

  const onDelete = (id) => {
    if (window.confirm("Are you sure to delete this record?"))
      props.deleteNote(id, () =>
        addToast("Deleted successfully", { appearance: "info" })
      );
  };

  return (
    <Container maxWidth="lg">
      <Paper>
        <Grid container spacing={10}>
          <Grid item xs={5}>
            <NoteForm {...{ currentId, setCurrentId }} />
          </Grid>
          <Grid item xs={7}>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>№</TableCell>
                    <TableCell>Topic</TableCell>
                    <TableCell>Description</TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {props.NoteList.map((record, index) => {
                    return (
                      <TableRow key={index} hover>
                        <TableCell>{record.id}</TableCell>
                        <TableCell>{record.name}</TableCell>
                        <TableCell>{record.description}</TableCell>
                        <TableCell>
                          <ButtonGroup>
                            <Button>
                              <EditIcon
                                color="primary"
                                onClick={() => {
                                  setCurrentId(record.id);
                                }}
                              />
                            </Button>
                            <Button>
                              <DeleteIcon
                                color="secondary"
                                onClick={() => onDelete(record.id)}
                              />
                            </Button>
                          </ButtonGroup>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  NoteList: state.note.list,
});

const mapActionToProps = {
  fetchAllNotes: actions.fetchall,
  deleteNote: actions.Delete
};

export default connect(mapStateToProps, mapActionToProps)(Notes);
