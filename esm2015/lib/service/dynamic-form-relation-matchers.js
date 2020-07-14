import { InjectionToken } from "@angular/core";
import { DynamicFormValidationService } from "./dynamic-form-validation.service";
import { isObject } from "../utils/core.utils";
import { DynamicFormService } from "./dynamic-form.service";
export const MATCH_DISABLED = "DISABLED";
export const MATCH_ENABLED = "ENABLED";
export const MATCH_HIDDEN = "HIDDEN";
export const MATCH_OPTIONAL = "OPTIONAL";
export const MATCH_REQUIRED = "REQUIRED";
export const MATCH_VISIBLE = "VISIBLE";
export const AND_OPERATOR = "AND";
export const OR_OPERATOR = "OR";
export const DYNAMIC_MATCHERS = new InjectionToken("DYNAMIC_MATCHERS");
export const DISABLED_MATCHER = {
    match: MATCH_DISABLED,
    opposingMatch: MATCH_ENABLED,
    onChange(hasMatch, model) {
        model.disabled = hasMatch;
    }
};
export const HIDDEN_MATCHER = {
    match: MATCH_HIDDEN,
    opposingMatch: MATCH_VISIBLE,
    onChange(hasMatch, model) {
        model.hidden = hasMatch;
    }
};
export const REQUIRED_MATCHER = {
    match: MATCH_REQUIRED,
    opposingMatch: MATCH_OPTIONAL,
    onChange(hasMatch, model, control, injector) {
        let validatorsConfig = null;
        if (hasMatch) {
            validatorsConfig = isObject(model.validators) ? Object.assign(Object.assign({}, model.validators), { required: null }) : { required: null };
        }
        else {
            if (isObject(model.validators)) {
                delete model.validators.required;
                validatorsConfig = Object.assign({}, model.validators);
            }
        }
        injector.get(DynamicFormValidationService).updateValidators(validatorsConfig, control, model);
        injector.get(DynamicFormService).detectChanges();
    }
};
export const DISABLED_MATCHER_PROVIDER = {
    provide: DYNAMIC_MATCHERS,
    useValue: DISABLED_MATCHER,
    multi: true
};
export const HIDDEN_MATCHER_PROVIDER = {
    provide: DYNAMIC_MATCHERS,
    useValue: HIDDEN_MATCHER,
    multi: true
};
export const REQUIRED_MATCHER_PROVIDER = {
    provide: DYNAMIC_MATCHERS,
    useValue: REQUIRED_MATCHER,
    multi: true
};
export const DYNAMIC_MATCHER_PROVIDERS = [DISABLED_MATCHER_PROVIDER, HIDDEN_MATCHER_PROVIDER, REQUIRED_MATCHER_PROVIDER];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1mb3JtLXJlbGF0aW9uLW1hdGNoZXJzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5nLWR5bmFtaWMtZm9ybXMvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlL2R5bmFtaWMtZm9ybS1yZWxhdGlvbi1tYXRjaGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsY0FBYyxFQUEyQixNQUFNLGVBQWUsQ0FBQztBQUd4RSxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNqRixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFL0MsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFNUQsTUFBTSxDQUFDLE1BQU0sY0FBYyxHQUFHLFVBQVUsQ0FBQztBQUN6QyxNQUFNLENBQUMsTUFBTSxhQUFhLEdBQUcsU0FBUyxDQUFDO0FBQ3ZDLE1BQU0sQ0FBQyxNQUFNLFlBQVksR0FBRyxRQUFRLENBQUM7QUFDckMsTUFBTSxDQUFDLE1BQU0sY0FBYyxHQUFHLFVBQVUsQ0FBQztBQUN6QyxNQUFNLENBQUMsTUFBTSxjQUFjLEdBQUcsVUFBVSxDQUFDO0FBQ3pDLE1BQU0sQ0FBQyxNQUFNLGFBQWEsR0FBRyxTQUFTLENBQUM7QUFFdkMsTUFBTSxDQUFDLE1BQU0sWUFBWSxHQUFHLEtBQUssQ0FBQztBQUNsQyxNQUFNLENBQUMsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDO0FBVWhDLE1BQU0sQ0FBQyxNQUFNLGdCQUFnQixHQUFHLElBQUksY0FBYyxDQUE0QixrQkFBa0IsQ0FBQyxDQUFDO0FBRWxHLE1BQU0sQ0FBQyxNQUFNLGdCQUFnQixHQUE4QjtJQUV2RCxLQUFLLEVBQUUsY0FBYztJQUNyQixhQUFhLEVBQUUsYUFBYTtJQUM1QixRQUFRLENBQUMsUUFBUSxFQUFFLEtBQUs7UUFDcEIsS0FBSyxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7SUFDOUIsQ0FBQztDQUNKLENBQUM7QUFFRixNQUFNLENBQUMsTUFBTSxjQUFjLEdBQThCO0lBRXJELEtBQUssRUFBRSxZQUFZO0lBQ25CLGFBQWEsRUFBRSxhQUFhO0lBQzVCLFFBQVEsQ0FBQyxRQUFRLEVBQUUsS0FBSztRQUNwQixLQUFLLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQztJQUM1QixDQUFDO0NBQ0osQ0FBQztBQUVGLE1BQU0sQ0FBQyxNQUFNLGdCQUFnQixHQUE4QjtJQUV2RCxLQUFLLEVBQUUsY0FBYztJQUNyQixhQUFhLEVBQUUsY0FBYztJQUM3QixRQUFRLENBQUMsUUFBUSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsUUFBUTtRQUV2QyxJQUFJLGdCQUFnQixHQUFHLElBQUksQ0FBQztRQUU1QixJQUFJLFFBQVEsRUFBRTtZQUVWLGdCQUFnQixHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxpQ0FBSyxLQUFLLENBQUMsVUFBVSxLQUFFLFFBQVEsRUFBRSxJQUFJLElBQUUsQ0FBQyxDQUFDLEVBQUMsUUFBUSxFQUFFLElBQUksRUFBQyxDQUFDO1NBRTVHO2FBQU07WUFFSCxJQUFJLFFBQVEsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLEVBQUU7Z0JBRTVCLE9BQVEsS0FBSyxDQUFDLFVBQXdELENBQUMsUUFBUSxDQUFDO2dCQUNoRixnQkFBZ0IscUJBQU8sS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDO2FBQzVDO1NBQ0o7UUFFRCxRQUFRLENBQUMsR0FBRyxDQUFDLDRCQUE0QixDQUFDLENBQUMsZ0JBQWdCLENBQUMsZ0JBQWdCLEVBQUUsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzlGLFFBQVEsQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUNyRCxDQUFDO0NBQ0osQ0FBQztBQUVGLE1BQU0sQ0FBQyxNQUFNLHlCQUF5QixHQUFrQjtJQUNwRCxPQUFPLEVBQUUsZ0JBQWdCO0lBQ3pCLFFBQVEsRUFBRSxnQkFBZ0I7SUFDMUIsS0FBSyxFQUFFLElBQUk7Q0FDZCxDQUFDO0FBRUYsTUFBTSxDQUFDLE1BQU0sdUJBQXVCLEdBQWtCO0lBQ2xELE9BQU8sRUFBRSxnQkFBZ0I7SUFDekIsUUFBUSxFQUFFLGNBQWM7SUFDeEIsS0FBSyxFQUFFLElBQUk7Q0FDZCxDQUFDO0FBRUYsTUFBTSxDQUFDLE1BQU0seUJBQXlCLEdBQWtCO0lBQ3BELE9BQU8sRUFBRSxnQkFBZ0I7SUFDekIsUUFBUSxFQUFFLGdCQUFnQjtJQUMxQixLQUFLLEVBQUUsSUFBSTtDQUNkLENBQUM7QUFFRixNQUFNLENBQUMsTUFBTSx5QkFBeUIsR0FBRyxDQUFDLHlCQUF5QixFQUFFLHVCQUF1QixFQUFFLHlCQUF5QixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiwgSW5qZWN0b3IsIFZhbHVlUHJvdmlkZXIgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2wgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7IER5bmFtaWNGb3JtQ29udHJvbE1vZGVsIH0gZnJvbSBcIi4uL21vZGVsL2R5bmFtaWMtZm9ybS1jb250cm9sLm1vZGVsXCI7XG5pbXBvcnQgeyBEeW5hbWljRm9ybVZhbGlkYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4vZHluYW1pYy1mb3JtLXZhbGlkYXRpb24uc2VydmljZVwiO1xuaW1wb3J0IHsgaXNPYmplY3QgfSBmcm9tIFwiLi4vdXRpbHMvY29yZS51dGlsc1wiO1xuaW1wb3J0IHsgRHluYW1pY1ZhbGlkYXRvcnNDb25maWcgfSBmcm9tIFwiLi4vbW9kZWwvbWlzYy9keW5hbWljLWZvcm0tY29udHJvbC12YWxpZGF0aW9uLm1vZGVsXCI7XG5pbXBvcnQgeyBEeW5hbWljRm9ybVNlcnZpY2UgfSBmcm9tIFwiLi9keW5hbWljLWZvcm0uc2VydmljZVwiO1xuXG5leHBvcnQgY29uc3QgTUFUQ0hfRElTQUJMRUQgPSBcIkRJU0FCTEVEXCI7XG5leHBvcnQgY29uc3QgTUFUQ0hfRU5BQkxFRCA9IFwiRU5BQkxFRFwiO1xuZXhwb3J0IGNvbnN0IE1BVENIX0hJRERFTiA9IFwiSElEREVOXCI7XG5leHBvcnQgY29uc3QgTUFUQ0hfT1BUSU9OQUwgPSBcIk9QVElPTkFMXCI7XG5leHBvcnQgY29uc3QgTUFUQ0hfUkVRVUlSRUQgPSBcIlJFUVVJUkVEXCI7XG5leHBvcnQgY29uc3QgTUFUQ0hfVklTSUJMRSA9IFwiVklTSUJMRVwiO1xuXG5leHBvcnQgY29uc3QgQU5EX09QRVJBVE9SID0gXCJBTkRcIjtcbmV4cG9ydCBjb25zdCBPUl9PUEVSQVRPUiA9IFwiT1JcIjtcblxuZXhwb3J0IGludGVyZmFjZSBEeW5hbWljRm9ybUNvbnRyb2xNYXRjaGVyIHtcblxuICAgIG1hdGNoOiBzdHJpbmc7XG4gICAgb3Bwb3NpbmdNYXRjaDogc3RyaW5nIHwgbnVsbDtcblxuICAgIG9uQ2hhbmdlKGhhc01hdGNoOiBib29sZWFuLCBtb2RlbDogRHluYW1pY0Zvcm1Db250cm9sTW9kZWwsIGNvbnRyb2w6IEZvcm1Db250cm9sLCBpbmplY3RvcjogSW5qZWN0b3IpOiB2b2lkO1xufVxuXG5leHBvcnQgY29uc3QgRFlOQU1JQ19NQVRDSEVSUyA9IG5ldyBJbmplY3Rpb25Ub2tlbjxEeW5hbWljRm9ybUNvbnRyb2xNYXRjaGVyPihcIkRZTkFNSUNfTUFUQ0hFUlNcIik7XG5cbmV4cG9ydCBjb25zdCBESVNBQkxFRF9NQVRDSEVSOiBEeW5hbWljRm9ybUNvbnRyb2xNYXRjaGVyID0ge1xuXG4gICAgbWF0Y2g6IE1BVENIX0RJU0FCTEVELFxuICAgIG9wcG9zaW5nTWF0Y2g6IE1BVENIX0VOQUJMRUQsXG4gICAgb25DaGFuZ2UoaGFzTWF0Y2gsIG1vZGVsKSB7XG4gICAgICAgIG1vZGVsLmRpc2FibGVkID0gaGFzTWF0Y2g7XG4gICAgfVxufTtcblxuZXhwb3J0IGNvbnN0IEhJRERFTl9NQVRDSEVSOiBEeW5hbWljRm9ybUNvbnRyb2xNYXRjaGVyID0ge1xuXG4gICAgbWF0Y2g6IE1BVENIX0hJRERFTixcbiAgICBvcHBvc2luZ01hdGNoOiBNQVRDSF9WSVNJQkxFLFxuICAgIG9uQ2hhbmdlKGhhc01hdGNoLCBtb2RlbCkge1xuICAgICAgICBtb2RlbC5oaWRkZW4gPSBoYXNNYXRjaDtcbiAgICB9XG59O1xuXG5leHBvcnQgY29uc3QgUkVRVUlSRURfTUFUQ0hFUjogRHluYW1pY0Zvcm1Db250cm9sTWF0Y2hlciA9IHtcblxuICAgIG1hdGNoOiBNQVRDSF9SRVFVSVJFRCxcbiAgICBvcHBvc2luZ01hdGNoOiBNQVRDSF9PUFRJT05BTCxcbiAgICBvbkNoYW5nZShoYXNNYXRjaCwgbW9kZWwsIGNvbnRyb2wsIGluamVjdG9yKSB7XG5cbiAgICAgICAgbGV0IHZhbGlkYXRvcnNDb25maWcgPSBudWxsO1xuXG4gICAgICAgIGlmIChoYXNNYXRjaCkge1xuXG4gICAgICAgICAgICB2YWxpZGF0b3JzQ29uZmlnID0gaXNPYmplY3QobW9kZWwudmFsaWRhdG9ycykgPyB7Li4ubW9kZWwudmFsaWRhdG9ycywgcmVxdWlyZWQ6IG51bGx9IDoge3JlcXVpcmVkOiBudWxsfTtcblxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICBpZiAoaXNPYmplY3QobW9kZWwudmFsaWRhdG9ycykpIHtcblxuICAgICAgICAgICAgICAgIGRlbGV0ZSAobW9kZWwudmFsaWRhdG9ycyBhcyBQaWNrPER5bmFtaWNWYWxpZGF0b3JzQ29uZmlnLCBcInJlcXVpcmVkXCI+KS5yZXF1aXJlZDtcbiAgICAgICAgICAgICAgICB2YWxpZGF0b3JzQ29uZmlnID0gey4uLm1vZGVsLnZhbGlkYXRvcnN9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaW5qZWN0b3IuZ2V0KER5bmFtaWNGb3JtVmFsaWRhdGlvblNlcnZpY2UpLnVwZGF0ZVZhbGlkYXRvcnModmFsaWRhdG9yc0NvbmZpZywgY29udHJvbCwgbW9kZWwpO1xuICAgICAgICBpbmplY3Rvci5nZXQoRHluYW1pY0Zvcm1TZXJ2aWNlKS5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfVxufTtcblxuZXhwb3J0IGNvbnN0IERJU0FCTEVEX01BVENIRVJfUFJPVklERVI6IFZhbHVlUHJvdmlkZXIgPSB7XG4gICAgcHJvdmlkZTogRFlOQU1JQ19NQVRDSEVSUyxcbiAgICB1c2VWYWx1ZTogRElTQUJMRURfTUFUQ0hFUixcbiAgICBtdWx0aTogdHJ1ZVxufTtcblxuZXhwb3J0IGNvbnN0IEhJRERFTl9NQVRDSEVSX1BST1ZJREVSOiBWYWx1ZVByb3ZpZGVyID0ge1xuICAgIHByb3ZpZGU6IERZTkFNSUNfTUFUQ0hFUlMsXG4gICAgdXNlVmFsdWU6IEhJRERFTl9NQVRDSEVSLFxuICAgIG11bHRpOiB0cnVlXG59O1xuXG5leHBvcnQgY29uc3QgUkVRVUlSRURfTUFUQ0hFUl9QUk9WSURFUjogVmFsdWVQcm92aWRlciA9IHtcbiAgICBwcm92aWRlOiBEWU5BTUlDX01BVENIRVJTLFxuICAgIHVzZVZhbHVlOiBSRVFVSVJFRF9NQVRDSEVSLFxuICAgIG11bHRpOiB0cnVlXG59O1xuXG5leHBvcnQgY29uc3QgRFlOQU1JQ19NQVRDSEVSX1BST1ZJREVSUyA9IFtESVNBQkxFRF9NQVRDSEVSX1BST1ZJREVSLCBISURERU5fTUFUQ0hFUl9QUk9WSURFUiwgUkVRVUlSRURfTUFUQ0hFUl9QUk9WSURFUl07XG4iXX0=