import { DragDropModule } from '@angular/cdk/drag-drop';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EdicaoCatalgosComponent } from './Catalogos/edicao-catalgos/edicao-catalgos.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CatalogoVariablesComponent } from './catalogo-variables/catalogo-variables.component'
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { RodapeComponent } from './rodape/rodape.component';
import { saibamaiscomponent } from './saiba-mais/saiba-mais.component';
import { ImageUploadComponent } from './image-upload/image-upload.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { equipeComponent } from './equipe/equipe.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    EdicaoCatalgosComponent,
    CatalogoVariablesComponent,
    RodapeComponent,
    saibamaiscomponent,
    ImageUploadComponent,
    equipeComponent

  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    DragDropModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatCardModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'CriarCatalgo', component: EdicaoCatalgosComponent },
      { path: 'saibamais', component: saibamaiscomponent },
      { path: 'Equipe', component: equipeComponent },
    ]),
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
