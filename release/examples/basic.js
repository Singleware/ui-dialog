"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright (C) 2018 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 *
 * The proposal of this example is to show how to use the basic dialog template.
 */
const Dialog = require("../source");
const DOM = require("@singleware/jsx");
const dialog = (DOM.create(Dialog.Template, null,
    DOM.create("span", { slot: "header" }, "Dialog header"),
    DOM.create("span", { slot: "content" }, "Dialog Content"),
    DOM.create("span", { slot: "footer" }, "Dialog Footer")));
// To show the dialog.
dialog.show();
// To show as modal dialog.
dialog.show(true);
// To hide the dialog.
dialog.hide();
