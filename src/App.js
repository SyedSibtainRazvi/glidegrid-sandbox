import React, { useState, useEffect } from "react";
import "./App.css";
import "@glideapps/glide-data-grid/dist/index.css";
import { DataEditor, GridCellKind } from "@glideapps/glide-data-grid";

function App() {
  const [dataRows, setDataRows] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((response) => response.json())
      .then((data) => setDataRows(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  function getContent(cell) {
    const [col, row] = cell;

    if (row >= 0 && row < dataRows.length) {
      const comment = dataRows[row];

      if (col === 0) {
        return {
          kind: GridCellKind.Text,
          data: comment.name,
          allowOverlay: true,
          displayData: comment.name,
          editor: "text",
        };
      } else if (col === 1) {
        return {
          kind: GridCellKind.Text,
          data: comment.email,
          allowOverlay: true,
          displayData: comment.email,
          editor: "text",
        };
      } else if (col === 2) {
        return {
          kind: GridCellKind.Text,
          data: comment.body,
          allowOverlay: true,
          displayData: comment.email,
          editor: "text",
        };
      } else if (col === 3) {
        return {
          kind: GridCellKind.Text,
          data: comment.id,
          allowOverlay: true,
          displayData: comment.email,
          editor: "text",
        };
      } else if (col === 4) {
        return {
          kind: GridCellKind.Text,
          data: comment.id,
          allowOverlay: true,
          displayData: comment.email,
          editor: "text",
        };
      } else if (col === 5) {
        return {
          kind: GridCellKind.Text,
          data: comment.id,
          allowOverlay: true,
          displayData: comment.email,
          editor: "text",
        };
      } else if (col === 6) {
        return {
          kind: GridCellKind.Text,
          data: comment.id,
          allowOverlay: true,
          displayData: comment.email,
          editor: "text",
        };
      }
    }

    throw new Error("Invalid row or column index");
  }

  const columns = [
    { title: "Name", width: 500 },
    { title: "Email", width: 500 },
    { title: "Body", width: 500 },
    { title: "Test 1", width: 500 },
    { title: "Test 2", width: 500 },
    { title: "Test 3", width: 500 },
    { title: "Test 4", width: 500 },
  ];

  const numRows = dataRows.length;

  return (
    <div className="sheet">
      <DataEditor
        getCellContent={getContent}
        columns={columns}
        rows={numRows}
        smoothScrollY={true}
        smoothScrollX={true}
      />
    </div>
  );
}

export default App;
