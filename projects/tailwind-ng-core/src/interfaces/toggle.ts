import { OutputEmitterRef } from "@angular/core";
import { BaseActions, BaseState } from "./base";

export interface Toggle extends BaseState, BaseActions {
  readonly tabIndex: number;
  /**
   * Whether the toggle is checked. Default is `false`.
   */
  readonly isChecked: boolean;
  /**
   * Toggles the toggle's state.
   */
  toggle(): void;
  /**
   * Emits the toggle's state when it changes.
   */
  checked: OutputEmitterRef<boolean>;
}

/**
 * Checks if the component is a Toggle.
 * If so, you can safely access the Toggle members inside this block scope.
 */
export function isToggle(component: unknown): component is Toggle {
  return component != undefined && (component as Toggle).isChecked !== undefined &&
    (component as Toggle).toggle !== undefined && !("indeterminate" in (component as Toggle));
}
