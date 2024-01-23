import React from 'react';
import { useDrag } from 'react-dnd';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const columns = [
  { id: 'col1', name: 'Group 1' },
  { id: 'col2', name: 'Group 2' },
  // Add more columns as needed
];

const data = [
  { id: 1, name: 'John Doe', groupColumns: ['A', 'B'] },
  { id: 2, name: 'Jane Doe', groupColumns: ['C', 'D'] },
  // Add more data rows as needed
];

const DraggableColumn = ({ id, name, onDragStart }) => {
  const [, drag] = useDrag({
    type: 'COLUMN',
    item: { id },
    begin: onDragStart,
  });

  return <th ref={drag}>{name}</th>;
};

const TableRow = ({ data }) => {
  return (
    <tr>
      <td>
        <input type="checkbox" />
      </td>
      <td>{data.name}</td>
      {/* Additional group columns */}
      {data.groupColumns.map((column, index) => (
        <td key={index}>{column}</td>
      ))}
      <td>
        <button>Edit</button>
        <button>Delete</button>
      </td>
    </tr>
  );
};

const Table = ({ columns, data }) => {
  const handleDragStart = (columnId) => (monitor) => {
    monitor.getItem().id = columnId;
  };

  return (
    <table className="table-auto w-full">
      <thead>
        <tr>
          <th></th>
          <th></th>
          {/* Draggable columns */}
          {columns.map((column) => (
            <DraggableColumn
              key={column.id}
              id={column.id}
              name={column.name}
              onDragStart={handleDragStart(column.id)}
            />
          ))}
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <TableRow key={row.id} data={row} />
        ))}
      </tbody>
    </table>
  );
};

const TableDrow = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <Table columns={columns} data={data} />
      </div>
    </DndProvider>
  );
};

export default TableDrow;