import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatoRegisterComponent } from './contato-register.component';

describe('ContatoRegisterComponent', () => {
  let component: ContatoRegisterComponent;
  let fixture: ComponentFixture<ContatoRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContatoRegisterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContatoRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
