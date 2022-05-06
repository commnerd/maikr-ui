interface ModelOptions {
    selector: string,
}

export function Model (options?: ModelOptions): {
    return (target: Object, propertyKey: string, descriptor: PropertyDescriptor): Object => {
        return target;
    }
}