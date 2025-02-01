import { ChangeDetectionStrategy, Component, Input, output, ViewEncapsulation } from '@angular/core';
import { Toggle, ToggleBase } from '@tailwind-ng/core';

@Component({
  selector: 'tw-toggle, [tw-toggle], [twToggle]',
  exportAs: 'twToggle',
  host: {
    role: 'switch',
    '[tabindex]': 'isDisabled ? null : tabIndex',
    '[attr.aria-checked]': 'isChecked || null',
    '[attr.data-checked]': 'isChecked || null',
  },
  template: `<ng-content />`,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: ToggleBase, useExisting: ToggleComponent }]
})
export class ToggleComponent extends ToggleBase implements Toggle {
  @Input() isChecked = false;
  @Input() tabIndex = 0;
  checked = output<boolean>();

  protected override onInit(): void {
    this.config.subscribe(config => this.classList.set(config));
  }

  private onKeydown(event: KeyboardEvent): void {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.toggle();
    }
  }

  toggle(): void {
    this.focus();
    this.isChecked = !this.isChecked;
    this.checked.emit(this.isChecked);
  }

  protected override addEventListeners(): void {
    super.addEventListeners();
    this.nativeElement.addEventListener('click', this.toggle.bind(this), { passive: true, capture: true });
    this.nativeElement.addEventListener('keydown', this.onKeydown.bind(this), true);
  }

  protected override removeEventListeners(): void {
    super.removeEventListeners();
    this.nativeElement.removeEventListener('click', this.toggle.bind(this), true);
    this.nativeElement.removeEventListener('keydown', this.onKeydown.bind(this), true);
  }
}
