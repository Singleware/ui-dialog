/**
 * Copyright (C) 2018 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */

/**
 * Dialog element interface.
 */
export interface Element extends HTMLDivElement {
  /**
   * Show the dialog.
   * @param modal Determines whether the dialog is shown as modal or not.
   */
  show(modal?: boolean): void;
  /**
   * Hide the dialog.
   */
  hide(): void;
}
