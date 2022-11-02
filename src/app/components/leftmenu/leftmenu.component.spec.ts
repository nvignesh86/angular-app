import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { LeftMenuComponent } from './leftmenu.component';

class MockRouter{
    navigate(){
        
    }
}

describe("Left Menu Component", ()=>{
    let comp: LeftMenuComponent;

    beforeEach(async ()=>{
        await TestBed.configureTestingModule({
            declarations: [
                LeftMenuComponent
            ],
            providers:[
                LeftMenuComponent,
                {provide:Router, useClass: MockRouter}
            ]
        }).compileComponents();
        comp = TestBed.inject(LeftMenuComponent);
    })

    it("router navigate", ()=>{
        comp.leftMenuClick("/home");
        expect(comp).toBeTruthy();
    })

    it("left menu component render", ()=>{
        const fixture = TestBed.createComponent(LeftMenuComponent);
        fixture.detectChanges();
        const compiled = fixture.nativeElement as HTMLElement;
        expect(compiled.querySelector(".left-menu")?.textContent).toContain("Home");
    })
})