import React, { useContext } from "react";

import {
  TableContainer,
  TableBody,
  TableHead,
  TableCell,
  TableRow,
  Table,
} from "@material-ui/core";
import { multiStepContext } from "../context/FormsContext";

export const DisplayForms = () => {
  const { finalData } = useContext(multiStepContext);
  return (
    <>
      <TableContainer style={{ display: "flex", justifyContent: "center" }}>
        <Table
          style={{ width: "70%", justifyContent: "center" }}
          size="small"
        //   aria-label="caption tabel"
        >
          <TableHead>
            <TableRow
              style={{ backgroundColor: "burlywood", color: "aliceblue" }}
            >
              <TableCell>Name</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>DOB</TableCell>
              <TableCell>State</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Pincode</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
              {finalData.map((data) => (
                  <>
                  <TableRow>
                    <TableCell>{data.name}</TableCell>
                    <TableCell>{data.age}</TableCell>
                    <TableCell>{data.dob}</TableCell>
                    <TableCell>{data.state}</TableCell>
                    <TableCell>{data.address}</TableCell>
                    <TableCell>{data.pincode}</TableCell>
                  </TableRow>
                  </>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
