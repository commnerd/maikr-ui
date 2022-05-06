import { CrudComponent } from '@decorators/crud-component';
import { Project } from '@models/project';

@CrudComponent({
    "model": Project,
})
export class ProjectComponent{}