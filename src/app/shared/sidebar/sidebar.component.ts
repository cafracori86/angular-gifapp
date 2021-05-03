import { Component } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent  {


  get historial () {
    return this.gifsServices.historial;
  }

  constructor (private gifsServices : GifsService) {
    
  }

  buscar (item :string) {
    this.gifsServices.buscarGifs(item);
  }
}
