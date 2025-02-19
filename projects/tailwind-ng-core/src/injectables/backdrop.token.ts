import { Directive, inject, Input } from "@angular/core";
import { ConfigTypeOf } from "../config";
import { BaseDirective } from "../directives";
import { InjectionTokenFactory } from "./injection-token.factory";
import { ZIndexer } from "./z-index.service";

export const BACKDROP_CONFIG = InjectionTokenFactory.create<ConfigTypeOf<'Backdrop'>>({}, 'DIALOG_CONFIG');

@Directive({
  host: {
    '[style.zIndex]': 'zIndex',
  }
})
export abstract class BackdropBase extends BaseDirective {
  protected config = inject(BACKDROP_CONFIG);
  private _zIndexer = inject(ZIndexer);
  @Input() zIndex = this._zIndexer.next;
}

/**
 * Checks if the component is a Dialog.
 * If so, you can safely access the Dialog members inside this block scope.
 */
export function isBackdrop(component: unknown): component is BackdropBase {
  return component instanceof BackdropBase;
}
