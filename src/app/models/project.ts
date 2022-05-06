import { Model, Field } from '@decorators/maikr-forms';

@Model()
export class Project {
    @Field() name: string = "";
    @Field() description: string = "";
}
