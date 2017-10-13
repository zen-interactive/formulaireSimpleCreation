import { Component }  from '@angular/core';
import { User }       from './user'; 

@Component({
  selector: 'client-form',
  templateUrl: 'app/client-form.html',
  styles: [`
    .ng-valid { border-color: green; }
    .ng-invalid { border-color: red; }    
  `]
})
export class ClientFormComponent {
  private roles = ['Administrateur', 'Editeur', 'Rédacteur', 'Utilisateur'];
  onSubmit(value): void {
    let user = new User(value.name, value.role);
    console.log(user);
  }
}