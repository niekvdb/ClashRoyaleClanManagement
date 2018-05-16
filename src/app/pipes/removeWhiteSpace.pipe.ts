import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'withoutSpaces' })
export class RemoveWhiteSpacePipe implements PipeTransform {
    transform(value: any) {
        if (!value) {
            return '';
        }

        return value.replace(/\s/g, "");
    }
}