
import { Routes, RouterModule, ActivatedRoute } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainNavBarComponent } from './main-nav-bar/main-nav-bar.component';
import { BannerImagenPelisComponent } from './banner-imagen-pelis/banner-imagen-pelis.component';
import { BodyInicioComponent } from './body-inicio/body-inicio.component';
import { ShowPeliculaComponent } from './show-pelicula/show-pelicula.component';
import { ShowSerieComponent } from './show-serie/show-serie.component';
import { PopularSeriesComponent } from './popular-series/popular-series.component';
import { PopularPeopleComponent } from './popular-people/popular-people.component';

const routes: Routes = [
  { path: '', component: BodyInicioComponent },
  { path: 'pelicula/:id', component: ShowPeliculaComponent },
  { path: 'popular-series', component: PopularSeriesComponent },
  { path: 'serie/:id', component: ShowSerieComponent },
  { path: 'popular-people', component: PopularPeopleComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MainNavBarComponent,
    BannerImagenPelisComponent,
    BodyInicioComponent,
    ShowPeliculaComponent,
    ShowSerieComponent,
    PopularSeriesComponent,
    PopularPeopleComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    NgbModule.forRoot()
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }