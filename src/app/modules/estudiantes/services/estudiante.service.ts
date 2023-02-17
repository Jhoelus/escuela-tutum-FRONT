import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EstudianteElement } from '../models/Estudiante.model';
import { environment } from 'src/environments/environment';
import { ResponseBase} from '../models/ResponseBase';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {

  constructor(private clienteHttp: HttpClient) { }

  private readonly URL_ESTUDIANTES = '/alumnos'
  private readonly URL_CALIFICACIONES_ALUMNO = '/calificaciones'

  public getAll() : Observable<EstudianteElement[]> { 
    return this.clienteHttp.get<EstudianteElement[]>(`${environment.contextRoot + this.URL_ESTUDIANTES}`)
  }

  public getCalificacionesAlumno(idAlumno: number) : Observable<ResponseBase> { 
    //return this.clienteHttp.get<EstudianteElement[]>("assets/data/estudiantes.json");
    return this.clienteHttp.get<ResponseBase>(`${environment.contextRoot + this.URL_CALIFICACIONES_ALUMNO}?idAlumno=${idAlumno}`)
  }
}
