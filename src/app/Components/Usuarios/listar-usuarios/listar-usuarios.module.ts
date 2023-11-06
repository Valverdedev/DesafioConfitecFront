import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarUsuariosComponent } from './listar-usuarios.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { NgbDropdownModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastsContainer } from '../../toast.component';

@NgModule({
  declarations: [
    ListarUsuariosComponent
  ],
  imports: [
    CommonModule,
    CommonModule,
    FormsModule,
    NgbTooltipModule,
    ToastsContainer,
    NgbDropdownModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
  ],
  exports: [
    ListarUsuariosComponent
  ]
})
export class ListarUsuariosModule { }
