import { Injector } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { DynamicFormControlModel } from "../model/dynamic-form-control.model";
import { DynamicFormControlMatcher } from "./dynamic-form-relation-matchers";
import { DynamicFormControlRelation } from "../model/misc/dynamic-form-control-relation.model";
import { Subscription } from "rxjs";
import * as ɵngcc0 from '@angular/core';
export declare type DynamicRelatedFormControls = {
    [key: string]: FormControl;
};
export declare class DynamicFormRelationService {
    private MATCHERS;
    private injector;
    constructor(MATCHERS: DynamicFormControlMatcher[], injector: Injector);
    getRelatedFormControls(model: DynamicFormControlModel, group: FormGroup): DynamicRelatedFormControls;
    findRelationByMatcher(relations: DynamicFormControlRelation[], matcher: DynamicFormControlMatcher): DynamicFormControlRelation | undefined;
    matchesCondition(relation: DynamicFormControlRelation, relatedFormControls: DynamicRelatedFormControls, matcher: DynamicFormControlMatcher): boolean;
    subscribeRelations(model: DynamicFormControlModel, group: FormGroup, control: FormControl): Subscription[];
    static ɵfac: ɵngcc0.ɵɵFactoryDef<DynamicFormRelationService, [{ optional: true; }, null]>;
}

//# sourceMappingURL=dynamic-form-relation.service.d.ts.map