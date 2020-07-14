import "reflect-metadata";
export var METADATA_KEY_SERIALIZABLE = "SERIALIZABLE";
export function serializable(name) {
    return function (target, key) {
        Reflect.defineMetadata(METADATA_KEY_SERIALIZABLE, { key: key, name: name || key }, target, key);
    };
}
export function getSerializables(target) {
    var serializables = [];
    for (var key in target) {
        var metadata = Reflect.getMetadata(METADATA_KEY_SERIALIZABLE, target, key);
        if (metadata) {
            serializables.push(metadata);
        }
    }
    return serializables;
}
export function serialize(target, prototype) {
    return getSerializables(prototype || target).reduce(function (prev, prop) {
        prev[prop.name] = target[prop.key];
        return prev;
    }, {});
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VyaWFsaXphYmxlLmRlY29yYXRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZy1keW5hbWljLWZvcm1zL2NvcmUvIiwic291cmNlcyI6WyJsaWIvZGVjb3JhdG9yL3NlcmlhbGl6YWJsZS5kZWNvcmF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxrQkFBa0IsQ0FBQztBQUkxQixNQUFNLENBQUMsSUFBTSx5QkFBeUIsR0FBRyxjQUFjLENBQUM7QUFReEQsTUFBTSxVQUFVLFlBQVksQ0FBQyxJQUFhO0lBRXRDLE9BQU8sVUFBQyxNQUFNLEVBQUUsR0FBRztRQUNmLE9BQU8sQ0FBQyxjQUFjLENBQUMseUJBQXlCLEVBQUUsRUFBQyxHQUFHLEtBQUEsRUFBRSxJQUFJLEVBQUUsSUFBSSxJQUFJLEdBQUcsRUFBQyxFQUFFLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQztJQUM3RixDQUFDLENBQUM7QUFDTixDQUFDO0FBRUQsTUFBTSxVQUFVLGdCQUFnQixDQUFDLE1BQVc7SUFFeEMsSUFBTSxhQUFhLEdBQUcsRUFBRSxDQUFDO0lBRXpCLEtBQUssSUFBTSxHQUFHLElBQUksTUFBTSxFQUFFO1FBRXRCLElBQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUMseUJBQXlCLEVBQUUsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBRTdFLElBQUksUUFBUSxFQUFFO1lBQ1YsYUFBYSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUNoQztLQUNKO0lBRUQsT0FBTyxhQUFhLENBQUM7QUFDekIsQ0FBQztBQUVELE1BQU0sVUFBVSxTQUFTLENBQUMsTUFBVyxFQUFFLFNBQWU7SUFFbEQsT0FBTyxnQkFBZ0IsQ0FBQyxTQUFTLElBQUksTUFBTSxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQUMsSUFBUyxFQUFFLElBQTBCO1FBRXRGLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUVuQyxPQUFPLElBQUksQ0FBQztJQUVoQixDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDWCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwicmVmbGVjdC1tZXRhZGF0YVwiO1xuXG5kZWNsYXJlIGxldCBSZWZsZWN0OiBhbnk7XG5cbmV4cG9ydCBjb25zdCBNRVRBREFUQV9LRVlfU0VSSUFMSVpBQkxFID0gXCJTRVJJQUxJWkFCTEVcIjtcblxuZXhwb3J0IGludGVyZmFjZSBTZXJpYWxpemFibGVQcm9wZXJ0eSB7XG5cbiAgICBrZXk6IHN0cmluZztcbiAgICBuYW1lOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXJpYWxpemFibGUobmFtZT86IHN0cmluZyk6ICh0YXJnZXQ6IGFueSwga2V5OiBzdHJpbmcpID0+IHZvaWQge1xuXG4gICAgcmV0dXJuICh0YXJnZXQsIGtleSkgPT4ge1xuICAgICAgICBSZWZsZWN0LmRlZmluZU1ldGFkYXRhKE1FVEFEQVRBX0tFWV9TRVJJQUxJWkFCTEUsIHtrZXksIG5hbWU6IG5hbWUgfHwga2V5fSwgdGFyZ2V0LCBrZXkpO1xuICAgIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTZXJpYWxpemFibGVzKHRhcmdldDogYW55KTogU2VyaWFsaXphYmxlUHJvcGVydHlbXSB7XG5cbiAgICBjb25zdCBzZXJpYWxpemFibGVzID0gW107XG5cbiAgICBmb3IgKGNvbnN0IGtleSBpbiB0YXJnZXQpIHtcblxuICAgICAgICBjb25zdCBtZXRhZGF0YSA9IFJlZmxlY3QuZ2V0TWV0YWRhdGEoTUVUQURBVEFfS0VZX1NFUklBTElaQUJMRSwgdGFyZ2V0LCBrZXkpO1xuXG4gICAgICAgIGlmIChtZXRhZGF0YSkge1xuICAgICAgICAgICAgc2VyaWFsaXphYmxlcy5wdXNoKG1ldGFkYXRhKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzZXJpYWxpemFibGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2VyaWFsaXplKHRhcmdldDogYW55LCBwcm90b3R5cGU/OiBhbnkpOiBvYmplY3Qge1xuXG4gICAgcmV0dXJuIGdldFNlcmlhbGl6YWJsZXMocHJvdG90eXBlIHx8IHRhcmdldCkucmVkdWNlKChwcmV2OiBhbnksIHByb3A6IFNlcmlhbGl6YWJsZVByb3BlcnR5KSA9PiB7XG5cbiAgICAgICAgcHJldltwcm9wLm5hbWVdID0gdGFyZ2V0W3Byb3Aua2V5XTtcblxuICAgICAgICByZXR1cm4gcHJldjtcblxuICAgIH0sIHt9KTtcbn1cbiJdfQ==