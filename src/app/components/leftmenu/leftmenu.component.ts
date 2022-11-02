import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'left-menu',
    templateUrl: './leftmenu.component.html',
    styleUrls: ["./leftmenu.component.css"]
})
export class LeftMenuComponent{

    constructor(private router: Router){}

    leftMenuClick(menuName:any){
        this.router.navigate([menuName]);
    }
}