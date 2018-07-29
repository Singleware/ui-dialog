"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Template_1;
"use strict";
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
let Template = Template_1 = class Template extends Control.Component {
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
         * Dialog styles.
         */
        this.styles = (DOM.create("style", null, `:host {
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
}`));
        /**
         * Dialog skeleton.
         */
        this.skeleton = DOM.create("div", { class: this.properties.class }, this.children);
        /**
         * Dialog elements.
         */
        this.elements = DOM.append(this.skeleton.attachShadow({ mode: 'closed' }), this.styles);
        this.bindProperties();
    }
    /**
     * Bind exposed properties to the custom element.
     */
    bindProperties() {
        Object.defineProperties(this.skeleton, {
            show: super.bindDescriptor(Template_1.prototype, 'show'),
            hide: super.bindDescriptor(Template_1.prototype, 'hide')
        });
    }
    /**
     * Show the dialog.
     * @param modal Determines whether the dialog is shown as modal or not.
     */
    show(modal) {
        if (modal) {
            this.elements.appendChild(this.modalSlot);
        }
        this.elements.appendChild(this.dialog);
    }
    /**
     * Hide the dialog.
     */
    hide() {
        this.modalSlot.remove();
        this.dialog.remove();
    }
    /**
     * Dialog element.
     */
    get element() {
        return this.skeleton;
    }
};
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
], Template.prototype, "styles", void 0);
__decorate([
    Class.Private()
], Template.prototype, "skeleton", void 0);
__decorate([
    Class.Private()
], Template.prototype, "elements", void 0);
__decorate([
    Class.Private()
], Template.prototype, "bindProperties", null);
__decorate([
    Class.Public()
], Template.prototype, "show", null);
__decorate([
    Class.Public()
], Template.prototype, "hide", null);
__decorate([
    Class.Public()
], Template.prototype, "element", null);
Template = Template_1 = __decorate([
    Class.Describe()
], Template);
exports.Template = Template;
