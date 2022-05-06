interface FormOptions {
    selector: string,
}

export function MaikrForm (options?: FormOptions) {
    let formFieldList: Array<Object> = [];

    return (target: Object, propertyKey: string, descriptor: PropertyDescriptor): Object => {
        formFieldList.push(target);
        return target;
    }
}