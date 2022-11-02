import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { of, defer } from "rxjs";
import { UserService } from "./user.service";

export function asyncError<T>(errorObject: any) {
    return defer(() => Promise.reject(errorObject));
}

describe("User Service", ()=>{
    let httpClientSpy: jasmine.SpyObj<HttpClient>;
    let userService: UserService;

    beforeEach(()=>{
        httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
        userService = new UserService(httpClientSpy);
    })

    it("User Get data", (done: DoneFn)=>{
        const testData = {
            message: 'test',
            status: 'success'
        }
        httpClientSpy.get.and.returnValue(of(testData));
        
        userService.getUserData().subscribe({
            next: (data) => {
                expect(data).withContext("expected data").toEqual(testData);   
                done();
            },
            error: done.fail
        })

        expect(httpClientSpy.get.calls.count()).withContext('one call').toBe(1);
    });

    it("httpclient error", (done: DoneFn)=>{
        const errRes = new HttpErrorResponse({
            error: 'test 404 error',
            status: 404, statusText: 'Not Found'
        });

        httpClientSpy.get.and.returnValue(asyncError(errRes));
        userService.getUserData().subscribe({
            next: heroes => done.fail('expected an error, not heroes'),
            error: error  => {
               console.log("Error-->",error); 
              expect(error.error).toContain('test 404 error');
              done();
            }
          });
    });

})

