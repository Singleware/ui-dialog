import * as Control from '@singleware/ui-control';
import { Properties } from './properties';
import { Element } from './element';
/**
 * Dialog template class.
 */
export declare class Template extends Control.Component<Properties> {
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
     * Default constructor.
     * @param properties Dialog properties.
     * @param children Dialog children.
     */
    constructor(properties?: Properties, children?: any[]);
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
     * Dialog element.
     */
    readonly element: Element;
}
