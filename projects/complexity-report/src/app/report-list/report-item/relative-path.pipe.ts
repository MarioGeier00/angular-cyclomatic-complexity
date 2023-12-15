import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'relativePath',
    standalone: true
})
export class RelativePathPipe implements PipeTransform {

    transform(path: string, relativePath: string) {
        return path.replace(relativePath, '');
    }

}
