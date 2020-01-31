import { Component } from '@angular/core';
import { Usuario } from '../model/usuario';
import { UsuarioService } from '../services/usuario.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  protected usuario: Usuario = new Usuario

  constructor(
    protected fire: AngularFireDatabase,
    protected afAuth: AngularFireAuth
  ) { }

}
