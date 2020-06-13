import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/note";
import NoteForm from "./NoteForm";
import {
  Grid,
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@material-ui/core";

const Notes = (props) => {
  useEffect(() => {
    props.fetchAllNotes();
  }, []);

  return (
    <Paper>
      <Grid container>
        <Grid item xs={6}>
          <NoteForm />
        </Grid>
        <Grid item xs={6}>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>№</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Description</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {props.NoteList.map((record, index) => {
                  return (
                    <TableRow key={index} hover>
                      <TableCell>{record.id}</TableCell>
                      <TableCell>{record.name}</TableCell>
                      <TableCell>{record.description}</TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </Paper>
  );
};

const mapStateToProps = (state) => ({
  NoteList: state.note.list,
});

const mapActionToProps = {
  fetchAllNotes: actions.fetchall,
};

export default connect(mapStateToProps, mapActionToProps)(Notes);
