// Uncomment below line for running test case for this file alone command : ng test --main sr/app/app.component.spec.ts
//import 'zone.js';
//import 'zone.js/testing';

import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

// Uncomment below line for running test case for this file alone command : ng test --main sr/app/app.component.spec.ts
//import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from "@angular/platform-browser-dynamic/testing";
//TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());

@Component({
  selector: 'left-menu',
  template: '<div>leftmenu</div>'
})
class MockLeftMenu{}

@Component({
  selector: 'router-outlet',
  template: '<div>router-outlet</div>'
})
class MockRouterOutlet{}

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MockLeftMenu,
        MockRouterOutlet
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angular-app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('angular-app');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.leftmenu-container')?.textContent).toContain('leftmenu');
  });
});
