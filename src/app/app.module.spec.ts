import { TestBed } from "@angular/core/testing";
import { AppModule } from "./app.module";

describe("App Module", ()=>{
    beforeEach(()=>{
        TestBed.configureTestingModule({
            imports: [
                AppModule
            ]
        })
    })

    it("App module instance created", ()=>{
        const module = TestBed.inject(AppModule);
        expect(module).toBeTruthy();
    })
})