import React, { useState } from "react";
import { Button, ListGroup, Form, FormLabel } from "react-bootstrap";
import { borrarTareaAPI } from "../helpers/queries";

const ItemTarea = ({ nombreTarea, idTarea, borrarTarea, cargarDatosTarea }) => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [realizada, setRealizada] = useState(false); // Nuevo estado para la tarea realizada
  const [editando, setEditando] = useState(false); // Nuevo estado para controlar si se está editando la tarea
  const [nuevaTarea, setNuevaTarea] = useState(nombreTarea); // Nuevo estado para almacenar la nueva tarea

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const toggleRealizada = () => {
    setRealizada(!realizada);
  };

  const handleGuardarEdicion = () => {
    cargarDatosTarea(idTarea, nuevaTarea);
    setEditando(false);
  };

  return (
    <section className="mx-3">
      <ListGroup.Item className="overflow-auto text-wrap rounded d-flex justify-content-between my-1">
        {!editando ? (
          <>
            <Form.Check
              type="checkbox"
              label={nombreTarea}
              checked={realizada}
              onChange={toggleRealizada}
            />
          </>
        ) : (
          <Form.Control
            type="text"
            value={nuevaTarea}
            onChange={(e) => setNuevaTarea(e.target.value)}
          />
        )}
        <i className="bi bi-three-dots-vertical" onClick={toggleMenu}></i>
      </ListGroup.Item>

      {menuVisible && (
        <div className="d-flex justify-content-end">
          {!editando ? (
            <Button
              variant="warning"
              className="mx-1"
              onClick={() => setEditando(true)}
            >
              <i className="bi bi-pencil-square"></i>
            </Button>
          ) : (
            <Button
              variant="success"
              className="mx-1"
              onClick={handleGuardarEdicion}
            >
              <i className="bi bi-check"></i>
            </Button>
          )}
          <Button variant="danger" onClick={() => borrarTarea(idTarea)}>
            <i className="bi bi-trash "></i>
          </Button>
        </div>
      )}
    </section>
  );
};

export default ItemTarea;
