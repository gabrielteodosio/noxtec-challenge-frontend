import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatoRegisterFormComponent } from './contato-register-form.component';

describe('ContatoRegisterFormComponent', () => {
  let component: ContatoRegisterFormComponent;
  let fixture: ComponentFixture<ContatoRegisterFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContatoRegisterFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContatoRegisterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
