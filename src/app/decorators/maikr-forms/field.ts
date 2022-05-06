export enum Type {
    Text = "text",
    TextArea = "textarea",
    Password = "password",
}

export interface FieldOptions {
    type: Type,
    class: string,
    name: string,
    value: string,
}

export function Field (options?: FieldOptions) {
    let formFieldList: Array<Object> = [];

    return (target: Object, propertyKey: string, descriptor: PropertyDescriptor): Object => {
        formFieldList.push(target);
        return target;
    }
}