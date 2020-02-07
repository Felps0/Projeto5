import { Component, OnInit } from '@angular/core';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'Projeto5/src/app/model/usuario';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-agendar',
  templateUrl: './agendar.page.html',
  styleUrls: ['./agendar.page.scss'],
})
export class AgendarPage implements OnInit {

  protected usuario: Usuario = new Usuario;
  protected id: string = null;
  protected preview: string = null;
  
  constructor(
    protected activedRoute: ActivatedRoute,
    protected usuarioService: UsuarioService,
    protected router: Router,
  ) { }

  ngOnInit() {
    this.id = this.activedRoute.snapshot.paramMap.get("id");
    if (this.id) {
      this.usuarioService.get(this.id).subscribe(
        res => {
          this.usuario = res
        },
        erro => this.id = null
      )
    }
  }

  
}
