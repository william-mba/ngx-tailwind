import { BaseActions, BaseState } from "./base";
import { CheckboxConfig } from "../config/interfaces";
import { OutputEmitterRef } from "@angular/core";

export interface Checkbox extends BaseState, BaseActions {
  readonly config: Partial<CheckboxConfig>
  /**
   * Whether the checkbox is checked. default is false
   */
  readonly checked: boolean
  /**
   * Whether the checkbox is indeterminate. default is false
   */
  readonly indeterminate: boolean
  readonly id: string
  /**
   * Toggles the checkbox from origin. Default origin is `'self'`.
   */
  toggle(origin?: EventOrigin, event?: Event): void
  /**
   * Emits when the checkbox state changes.
   */
  readonly changes: OutputEmitterRef<{ checked: boolean, indeterminate: boolean }>
}

/**
 * The icon to display when the checkbox is indeterminate or checked.
 * Default is `{ indeterminate: 'minus', checked: 'check' }`
 */
export interface CheckboxIcon {
  /**
   * The name of the icon to display when the checkbox is indeterminate.
   * Default is `'minus'`. The icon must be configured. Otherwise, it will not display.
   */
  onIndeterminate: string,
  /**
   * The name of the icon to display when the checkbox is checked.
   * Default is `'check'`. The icon must be configured. Otherwise, it will not display.
   */
  onChecked: string
}

type EventOrigin = "self" | "parent" | "child"

/**
 * Checks if the component is a Checkbox.
 * If so, you can safely access the Checkbox members inside this block scope.
 */
export function isCheckbox(component: unknown): component is Checkbox {
  return component != undefined && (component as Checkbox).checked !== undefined &&
    (component as Checkbox).indeterminate !== undefined &&
    (component as Checkbox).toggle !== undefined
}
