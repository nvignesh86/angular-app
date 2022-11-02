import { TestBed } from "@angular/core/testing";

import { UserComponent } from "./user.component";

describe("User Component", ()=>{
    beforeEach(async ()=>{
        await TestBed.configureTestingModule({
            declarations:[
                UserComponent
            ]
        }).compileComponents();
    })

    it("User component render", ()=>{
        const fixture = TestBed.createComponent(UserComponent);
        const app = fixture.componentInstance;
        app.user = {first_name: "Vicky"};
        fixture.detectChanges();
        const compiled = fixture.nativeElement as HTMLElement;
        expect(compiled.querySelector('.user-column')?.textContent).toContain("Vicky");
    })
})