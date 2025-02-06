import { CheckboxIcon, InjectionTokenFactory } from "@tailwind-ng/core";

export const CHECKBOX_ICON = InjectionTokenFactory.create<CheckboxIcon>({
  onIndeterminate: 'minus',
  onChecked: 'check'
}, 'CHECKBOX_ICON');
