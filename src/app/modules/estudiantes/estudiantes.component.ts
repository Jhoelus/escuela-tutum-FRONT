import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CalificacionElement } from './models/Calificacion.model';
import { EstudianteElement } from './models/Estudiante.model';
import { ResponseCalificacionesAlumno } from './models/ResponseCalificacionesAlumno.model';
import { EstudianteService } from './services/estudiante.service';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.scss']
})
export class EstudiantesComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nombre', 'estatus', 'accion'];
  displayedColumnsNotas: string[] = ['nombre', 'calificacion'];

  dataSource: any;
  dataSourceMaterias: any;

  seConsultaronNotas:boolean = false
  nombreEstudiante:string = ""
  promedio:number = 0.0

  constructor(private estudianteService: EstudianteService) { }

  ngOnInit(): void {
    this.estudianteService.getAll().subscribe(resultado => {
      this.dataSource = new MatTableDataSource<EstudianteElement>(resultado)
    })
  }

  getNombreCompleto(element: EstudianteElement) {
    return `${element.nombre} ${element.apellidoPaterno} ${element.apellidoMaterno}`
  }

  consultarNotas(idAlumno:number) {
    this.estudianteService.getCalificacionesAlumno(idAlumno).subscribe(resultado => {
      if(resultado.code == 0) {
        let datosResponse: ResponseCalificacionesAlumno = resultado.data;
        let calificacionesTable: Array<CalificacionElement> = new Array<CalificacionElement>(); 

        datosResponse.calificaciones.forEach( item => {
          calificacionesTable.push({
              "id": item.id,
              "nombre": item.materia.nombre,
              "idAlumno": item.alumno.id,
              "idMateria": item.materia.id,
              "calificacion": item.calificacion,
              "fechaRegistro": item.fechaRegistro
          })

          this.nombreEstudiante = this.getNombreCompleto(item.alumno)
        })

        this.seConsultaronNotas = true;
        this.promedio = datosResponse.promedio
        this.dataSourceMaterias = new MatTableDataSource<CalificacionElement>(calificacionesTable)
      }
      //this.dataSource = new MatTableDataSource<EstudianteElement>(resultado)
    })
  }

}
