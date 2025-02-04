import { Directive, inject, Input } from "@angular/core";
import { ConfigOf, ConfigTypeOf } from "../config";
import { BaseDirective } from "../directives";
import { InjectionTokenFactory } from "./injection-token.factory";

export const BUTTON_GROUP_CONFIG = InjectionTokenFactory.create<Partial<ConfigTypeOf<'ButtonGroup'>>>({}, 'BUTTON_GROUP_CONFIG');

@Directive({})
export abstract class ButtonGroupBase extends BaseDirective implements ConfigOf<'ButtonGroup'> {
  @Input() config = inject(BUTTON_GROUP_CONFIG);
}
