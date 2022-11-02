import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
    selector: 'api-test',
    templateUrl: './apitest.component.html'
})
export class APITestComponent{
    userList: any = [];

    constructor(private userService: UserService){}

    getUserData(){
        this.userService.getUserData().subscribe((data: any)=>{
            this.userList = data?.data;      
        })
    }
}