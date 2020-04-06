declare const textReducer: import("@reduxjs/toolkit").Slice<{
    textValue: string;
}, {
    addFooToText(state: {
        textValue: string;
    }, action: {
        payload: any;
        type: string;
    }): void;
    delFooText(state: {
        textValue: string;
    }, action: {
        payload: any;
        type: string;
    }): void;
}, "widgets/TextField">;
export declare const addFooToText: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, string>, delFooText: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, string>;
export default textReducer;
