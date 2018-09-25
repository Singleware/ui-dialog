/**
 * Copyright (C) 2018 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */

/**
 * Dialog properties interface.
 */
export interface Properties {
  /**
   * Determines whether the user can ignore this dialog by clicking outside it.
   */
  canIgnore?: boolean;
  /**
   * Determines whether this dialog is a modal dialog.
   */
  modal?: boolean;
  /**
   * Dialog classes.
   */
  class?: string;
  /**
   * Dialog children.
   */
  children?: {};
}
