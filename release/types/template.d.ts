import * as Control from '@singleware/ui-control';
import { Properties } from './properties';
import { Element } from './element';
/**
 * Dialog template class.
 */
export declare class Template<T extends Properties = Properties> extends Control.Component<T> {
    /**
     * Confirmation callback.
     */
    private confirmation?;
    /**
     * Header element.
     */
    private headerSlot;
    /**
     * Content element.
     */
    private contentSlot;
    /**
     * Footer element.
     */
    private footerSlot;
    /**
     * Modal element.
     */
    private modalSlot;
    /**
     * Dialog element.
     */
    private dialog;
    /**
     * Wrapper element.
     */
    private wrapper;
    /**
     * Dialog styles.
     */
    private styles;
    /**
     * Dialog skeleton.
     */
    private skeleton;
    /**
     * Dialog elements.
     */
    private elements;
    /**
     * Ignore handler.
     * @param event Event information.
     */
    private ignoreHandler;
    /**
     * Bind event handlers to update the custom element.
     */
    private bindHandlers;
    /**
     * Bind exposed properties to the custom element.
     */
    private bindProperties;
    /**
     * Confirm the dialog with success status.
     */
    protected success(): Promise<void>;
    /**
     * Confirm the dialog with failure status.
     */
    protected failure(): Promise<void>;
    /**
     * Default constructor.
     * @param properties Dialog properties.
     * @param children Dialog children.
     */
    constructor(properties?: T, children?: any[]);
    /**
     * Dialog element.
     */
    readonly element: Element;
    /**
     * Shows the dialog.
     * @param modal Determines whether the dialog is shown as modal or not.
     */
    show(modal?: boolean): void;
    /**
     * Hides the dialog.
     */
    hide(): void;
    /**
     * Wait the dialog confirmation.
     * @returns Returns a promise to get true when the action was successful, false otherwise.
     */
    wait(): Promise<boolean>;
}
