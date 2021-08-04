/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
    interface StencilEditor {
    }
    interface StencilPlayground {
        "css": string;
        "script": string;
    }
    interface StencilPreview {
        "srcDoc": string;
    }
}
declare global {
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLStencilEditorElement extends Components.StencilEditor, HTMLStencilElement {
    }
    var HTMLStencilEditorElement: {
        prototype: HTMLStencilEditorElement;
        new (): HTMLStencilEditorElement;
    };
    interface HTMLStencilPlaygroundElement extends Components.StencilPlayground, HTMLStencilElement {
    }
    var HTMLStencilPlaygroundElement: {
        prototype: HTMLStencilPlaygroundElement;
        new (): HTMLStencilPlaygroundElement;
    };
    interface HTMLStencilPreviewElement extends Components.StencilPreview, HTMLStencilElement {
    }
    var HTMLStencilPreviewElement: {
        prototype: HTMLStencilPreviewElement;
        new (): HTMLStencilPreviewElement;
    };
    interface HTMLElementTagNameMap {
        "my-component": HTMLMyComponentElement;
        "stencil-editor": HTMLStencilEditorElement;
        "stencil-playground": HTMLStencilPlaygroundElement;
        "stencil-preview": HTMLStencilPreviewElement;
    }
}
declare namespace LocalJSX {
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface StencilEditor {
    }
    interface StencilPlayground {
        "css"?: string;
        "script"?: string;
    }
    interface StencilPreview {
        "srcDoc"?: string;
    }
    interface IntrinsicElements {
        "my-component": MyComponent;
        "stencil-editor": StencilEditor;
        "stencil-playground": StencilPlayground;
        "stencil-preview": StencilPreview;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "stencil-editor": LocalJSX.StencilEditor & JSXBase.HTMLAttributes<HTMLStencilEditorElement>;
            "stencil-playground": LocalJSX.StencilPlayground & JSXBase.HTMLAttributes<HTMLStencilPlaygroundElement>;
            "stencil-preview": LocalJSX.StencilPreview & JSXBase.HTMLAttributes<HTMLStencilPreviewElement>;
        }
    }
}
