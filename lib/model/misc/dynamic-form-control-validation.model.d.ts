export interface DynamicValidatorDescriptor {
    name: string;
    args: any;
}
export declare type DynamicValidatorsConfig = {
    [validatorKey: string]: any | DynamicValidatorDescriptor;
};
export declare enum DynamicFormHook {
    Blur = "blur",
    Change = "change",
    Submit = "submit"
}
