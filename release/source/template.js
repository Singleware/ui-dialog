"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright (C) 2018 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
const Class = require("@singleware/class");
const DOM = require("@singleware/jsx");
const Control = require("@singleware/ui-control");
/**
 * Dialog template class.
 */
let Template = class Template extends Control.Component {
    /**
     * Default constructor.
     * @param properties Dialog properties.
     * @param children Dialog children.
     */
    constructor(properties, children) {
        super(properties, children);
        /**
         * Header element.
         */
        this.headerSlot = DOM.create("slot", { name: "header", class: "header" });
        /**
         * Content element.
         */
        this.contentSlot = DOM.create("slot", { name: "content", class: "content" });
        /**
         * Footer element.
         */
        this.footerSlot = DOM.create("slot", { name: "footer", class: "footer" });
        /**
         * Modal element.
         */
        this.modalSlot = DOM.create("slot", { name: "modal", class: "modal" });
        /**
         * Dialog element.
         */
        this.dialog = (DOM.create("div", { class: "dialog" },
            this.headerSlot,
            this.contentSlot,
            this.footerSlot));
        /**
         * Wrapper element.
         */
        this.wrapper = DOM.create("div", { class: "wrapper" });
        /**
         * Dialog styles.
         */
        this.styles = (DOM.create("style", null, `:host > .modal,
:host > .wrapper {
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
}
:host > .modal {
  z-index: 999999999;
  height: 100vh;
}
:host > .wrapper:not(:empty) {
  z-index: 1000000000;
  overflow: auto;
  height: 100vh;
}
:host > .wrapper > .dialog {
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
}
:host > .wrapper > .dialog > .header,
:host > .wrapper > .dialog > .content,
:host > .wrapper > .dialog > .footer {
  display: flex;
  flex-direction: column;
}`));
        /**
         * Dialog skeleton.
         */
        this.skeleton = DOM.create("div", { class: this.properties.class }, this.children);
        /**
         * Dialog elements.
         */
        this.elements = DOM.append(this.skeleton.attachShadow({ mode: 'closed' }), this.styles, this.wrapper);
        this.bindHandlers();
        this.bindProperties();
    }
    /**
     * Ignore handler.
     * @param event Event information.
     */
    ignoreHandler(event) {
        if (this.properties.canIgnore && event.target === this.dialog) {
            this.hide();
        }
    }
    /**
     * Bind event handlers to update the custom element.
     */
    bindHandlers() {
        this.wrapper.addEventListener('click', this.ignoreHandler.bind(this));
    }
    /**
     * Bind exposed properties to the custom element.
     */
    bindProperties() {
        this.bindComponentProperties(this.skeleton, ['show', 'hide', 'wait']);
    }
    /**
     * Confirm the dialog with success status.
     */
    async success() {
        if (this.confirmation) {
            this.confirmation(true);
            this.skeleton.dispatchEvent(new Event('success', { bubbles: true, cancelable: false }));
        }
    }
    /**
     * Confirm the dialog with failure status.
     */
    async failure() {
        if (this.confirmation) {
            this.confirmation(false);
            this.skeleton.dispatchEvent(new Event('failure', { bubbles: true, cancelable: false }));
        }
    }
    /**
     * Dialog element.
     */
    get element() {
        return this.skeleton;
    }
    /**
     * Shows the dialog.
     * @param modal Determines whether the dialog is shown as modal or not.
     */
    show(modal) {
        if (modal || this.properties.modal) {
            this.elements.insertBefore(this.modalSlot, this.wrapper);
        }
        this.wrapper.appendChild(this.dialog);
        this.skeleton.dispatchEvent(new Event('show', { bubbles: true, cancelable: false }));
    }
    /**
     * Hides the dialog.
     */
    hide() {
        this.modalSlot.remove();
        this.dialog.remove();
        this.skeleton.dispatchEvent(new Event('hide', { bubbles: true, cancelable: false }));
    }
    /**
     * Wait the dialog confirmation.
     * @returns Returns a promise to get true when the action was successful, false otherwise.
     */
    async wait() {
        return new Promise((resolve, reject) => {
            this.confirmation = resolve;
        });
    }
};
__decorate([
    Class.Private()
], Template.prototype, "confirmation", void 0);
__decorate([
    Class.Private()
], Template.prototype, "headerSlot", void 0);
__decorate([
    Class.Private()
], Template.prototype, "contentSlot", void 0);
__decorate([
    Class.Private()
], Template.prototype, "footerSlot", void 0);
__decorate([
    Class.Private()
], Template.prototype, "modalSlot", void 0);
__decorate([
    Class.Private()
], Template.prototype, "dialog", void 0);
__decorate([
    Class.Private()
], Template.prototype, "wrapper", void 0);
__decorate([
    Class.Private()
], Template.prototype, "styles", void 0);
__decorate([
    Class.Private()
], Template.prototype, "skeleton", void 0);
__decorate([
    Class.Private()
], Template.prototype, "elements", void 0);
__decorate([
    Class.Private()
], Template.prototype, "ignoreHandler", null);
__decorate([
    Class.Private()
], Template.prototype, "bindHandlers", null);
__decorate([
    Class.Private()
], Template.prototype, "bindProperties", null);
__decorate([
    Class.Protected()
], Template.prototype, "success", null);
__decorate([
    Class.Protected()
], Template.prototype, "failure", null);
__decorate([
    Class.Public()
], Template.prototype, "element", null);
__decorate([
    Class.Public()
], Template.prototype, "show", null);
__decorate([
    Class.Public()
], Template.prototype, "hide", null);
__decorate([
    Class.Public()
], Template.prototype, "wait", null);
Template = __decorate([
    Class.Describe()
], Template);
exports.Template = Template;
