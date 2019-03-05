import { Component, OnInit } from '@angular/core';
import {UserModel} from '../model/user.model';
import {CreateUserService} from './create-user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss'],
  providers: [CreateUserService]
})
export class CreateUserComponent implements OnInit {

  private user: UserModel;
  private isValid: boolean =  true;
  private message: string = '';

  constructor(private createUserService: CreateUserService) {

    this.user = new UserModel();

  }

  ngOnInit() {
  }

  public saveOrUpdate() {
   this.isValid = this.createUserService.validate(this.user);

   if (this.isValid) {
     this.createUserService.saveOrUpdate(this.user);
   } else {
     this.message = 'Verificar los campos obligatorios';
   }
  }

}
