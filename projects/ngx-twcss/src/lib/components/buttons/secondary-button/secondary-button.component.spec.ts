import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SecondaryButton } from './secondary-button.component';
import { SecondaryButtonConfig } from './secondary-button.config';
import { toClassName } from '../../../core/helpers/object.helper';

describe('SecondaryButtonComponent', () => {
  let component: SecondaryButton;
  let fixture: ComponentFixture<SecondaryButton>;
  let config = toClassName(SecondaryButtonConfig);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondaryButton]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SecondaryButton);
    component = fixture.componentInstance;
    fixture.detectChanges();

    spyOn(component, 'addClass');
    spyOn(component, 'ngOnInit');

    component.ngOnInit();
    component.addClass(config);
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
    expect(component.ngOnInit).toHaveBeenCalled();
  });

  it('should set size', () => {
    expect(component.size).toBeDefined();
    component.size = 'sm';
    expect(component.size).toBe('sm');
    component.size = 'md';
    expect(component.size).toBe('md');
    component.size = 'lg';
    expect(component.size).toBe('lg');
  });

  it('should set config', () => {
    expect(component.addClass).toHaveBeenCalled();
    expect(component.style.join(' ')).toContain(config);
  });
});
