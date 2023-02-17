import { CalificacionDto } from "./Calificacion.model";

export interface ResponseCalificacionesAlumno {
    promedio: number;
    calificaciones: CalificacionDto[]
}