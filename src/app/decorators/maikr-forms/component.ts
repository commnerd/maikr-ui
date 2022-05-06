import { Component } from '@angular/core';

export function MaikrComponent<T> (options: T) {
    return (target: T, propertyKey: string, descriptor: PropertyDescriptor): T => {
        return target;
    }
}