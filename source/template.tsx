/**
 * Copyright (C) 2018 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as DOM from '@singleware/jsx';
import * as Control from '@singleware/ui-control';

import { Properties } from './properties';
import { Element } from './element';

/**
 * Dialog template class.
 */
@Class.Describe()
export class Template extends Control.Component<Properties> {
  /**
   * Header element.
   */
  @Class.Private()
  private headerSlot: HTMLSlotElement = <slot name="header" class="header" /> as HTMLSlotElement;

  /**
   * Content element.
   */
  @Class.Private()
  private contentSlot: HTMLSlotElement = <slot name="content" class="content" /> as HTMLSlotElement;

  /**
   * Footer element.
   */
  @Class.Private()
  private footerSlot: HTMLSlotElement = <slot name="footer" class="footer" /> as HTMLSlotElement;

  /**
   * Modal element.
   */
  @Class.Private()
  private modalSlot: HTMLSlotElement = <slot name="modal" class="modal" /> as HTMLSlotElement;

  /**
   * Dialog element.
   */
  @Class.Private()
  private dialog: HTMLDivElement = (
    <div class="dialog">
      {this.headerSlot}
      {this.contentSlot}
      {this.footerSlot}
    </div>
  ) as HTMLDivElement;

  /**
   * Dialog styles.
   */
  @Class.Private()
  private styles: HTMLStyleElement = (
    <style>
      {`:host {
  position: relative;
  top: 5%;
}
:host > .modal {
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 999999999;
}
:host > .dialog {
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  z-index: 1000000000;
}
:host > .dialog > .header,
:host > .dialog > .content,
:host > .dialog > .footer {
  display: flex;
  flex-direction: column;
}`}
    </style>
  ) as HTMLStyleElement;

  /**
   * Dialog skeleton.
   */
  @Class.Private()
  private skeleton: Element = <div class={this.properties.class}>{this.children}</div> as Element;

  /**
   * Dialog elements.
   */
  @Class.Private()
  private elements: ShadowRoot = DOM.append(this.skeleton.attachShadow({ mode: 'closed' }), this.styles) as ShadowRoot;

  /**
   * Bind exposed properties to the custom element.
   */
  @Class.Private()
  private bindProperties(): void {
    Object.defineProperties(this.skeleton, {
      show: super.bindDescriptor(this, Template.prototype, 'show'),
      hide: super.bindDescriptor(this, Template.prototype, 'hide')
    });
  }

  /**
   * Default constructor.
   * @param properties Dialog properties.
   * @param children Dialog children.
   */
  constructor(properties?: Properties, children?: any[]) {
    super(properties, children);
    this.bindProperties();
  }

  /**
   * Show the dialog.
   * @param modal Determines whether the dialog is shown as modal or not.
   */
  @Class.Public()
  public show(modal?: boolean): void {
    if (modal) {
      this.elements.appendChild(this.modalSlot);
    }
    this.elements.appendChild(this.dialog);
  }

  /**
   * Hide the dialog.
   */
  @Class.Public()
  public hide(): void {
    this.modalSlot.remove();
    this.dialog.remove();
  }

  /**
   * Dialog element.
   */
  @Class.Public()
  public get element(): Element {
    return this.skeleton;
  }
}
