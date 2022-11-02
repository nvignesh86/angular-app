// Uncomment below line for running test case for this file alone command : ng test --main sr/app/cpmponents/apitest/apitest.component.spec.ts
//import 'zone.js';
//import 'zone.js/testing';

import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { APITestComponent } from './apitest.component';


// Uncomment below line for running test case for this file alone command : ng test --main sr/app/cpmponents/apitest/apitest.component.spec.ts
//import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from "@angular/platform-browser-dynamic/testing";
//TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());

@Component({
    selector: 'user-comp',
    template: '<div>user<div>'
})
class MockUserComponent{}

class MockUserService{
    getUserData(){
        return of({data: [{"userName": "test"}]});
    }
}

describe("API Test Component", ()=>{
    let comp: APITestComponent;

    beforeEach(async ()=>{
        TestBed.configureTestingModule({  
            declarations: [
                APITestComponent,
                MockUserComponent
            ],
            providers: [APITestComponent, {provide: UserService, useClass: MockUserService}]
        }).compileComponents()
        comp = TestBed.inject(APITestComponent); 
    })

    it("get user data", ()=>{
        comp.getUserData();
        expect(comp).toBeTruthy();
    })

    it("User mock rendered", ()=>{
       const fixture = TestBed.createComponent(APITestComponent);
       const cmp = fixture.componentInstance;
       cmp.userList = [{"userName": "test"}];
       fixture.detectChanges();
       const compiled = fixture.nativeElement as HTMLElement;
       expect(compiled.querySelector('.api-test-container')?.textContent).toContain('user');
    })


})