/**
 * Copyright (C) 2018 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 *
 * The proposal of this example is to show how to use the basic dialog template.
 */
import * as Dialog from '../source';
import * as DOM from '@singleware/jsx';

const dialog = (
  <Dialog.Template>
    <span slot="header">Dialog header</span>
    <span slot="content">Dialog Content</span>
    <span slot="footer">Dialog Footer</span>
  </Dialog.Template>
) as Dialog.Element;

// To show the dialog.
dialog.show();

// To show as modal dialog.
dialog.show(true);

// To hide the dialog.
dialog.hide();
