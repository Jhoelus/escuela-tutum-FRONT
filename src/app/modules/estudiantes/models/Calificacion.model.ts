import { MateriaElement } from "./Materia.model";
import { EstudianteElement } from "./Estudiante.model";


export interface CalificacionDto {
    id: number;
    alumno:EstudianteElement,
    materia: MateriaElement,
    calificacion: number,
    fechaRegistro: string
}

export interface CalificacionElement {
    id: number;
    nombre: string,
    idAlumno: number,
    idMateria: number,
    calificacion: number,
    fechaRegistro: string
}