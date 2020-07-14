import { isString } from "./core.utils";
export function maskToString(mask) {
    if (isString(mask)) {
        return mask;
    }
    else if (mask instanceof RegExp) {
        return mask.toString();
    }
    else if (Array.isArray(mask)) {
        return mask.map(function (value) { return maskToString(value); });
    }
    return null;
}
export function maskFromString(mask) {
    if (isString(mask)) {
        var isRegExp = mask.startsWith("/") && mask.endsWith("/");
        return isRegExp ? new RegExp(mask.slice(1, mask.length - 1)) : mask;
    }
    else if (Array.isArray(mask)) {
        return mask.map(function (value) { return maskFromString(value); });
    }
    return null;
}
export function parseReviver(_key, value) {
    var regexDateISO = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*))(?:Z|([+\-])([\d|:]*))?$/;
    return isString(value) && regexDateISO.test(value) ? new Date(value) : value;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvbi51dGlscy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZy1keW5hbWljLWZvcm1zL2NvcmUvIiwic291cmNlcyI6WyJsaWIvdXRpbHMvanNvbi51dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBRXhDLE1BQU0sVUFBVSxZQUFZLENBQUMsSUFBMkM7SUFFcEUsSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUU7UUFFaEIsT0FBTyxJQUFjLENBQUM7S0FFekI7U0FBTSxJQUFJLElBQUksWUFBWSxNQUFNLEVBQUU7UUFFL0IsT0FBTyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7S0FFMUI7U0FBTSxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7UUFFNUIsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsWUFBWSxDQUFDLEtBQUssQ0FBQyxFQUFuQixDQUFtQixDQUFhLENBQUM7S0FDN0Q7SUFFRCxPQUFPLElBQUksQ0FBQztBQUNoQixDQUFDO0FBRUQsTUFBTSxVQUFVLGNBQWMsQ0FBQyxJQUF1QjtJQUVsRCxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUVoQixJQUFNLFFBQVEsR0FBSSxJQUFlLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxJQUFLLElBQWUsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFcEYsT0FBTyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksTUFBTSxDQUFFLElBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0tBRW5GO1NBQU0sSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO1FBRTVCLE9BQVEsSUFBaUIsQ0FBQyxHQUFHLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxjQUFjLENBQUMsS0FBSyxDQUFDLEVBQXJCLENBQXFCLENBQWEsQ0FBQztLQUM3RTtJQUVELE9BQU8sSUFBSSxDQUFDO0FBQ2hCLENBQUM7QUFFRCxNQUFNLFVBQVUsWUFBWSxDQUFDLElBQVksRUFBRSxLQUFVO0lBRWpELElBQU0sWUFBWSxHQUFHLG1GQUFtRixDQUFDO0lBRXpHLE9BQU8sUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7QUFDakYsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGlzU3RyaW5nIH0gZnJvbSBcIi4vY29yZS51dGlsc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gbWFza1RvU3RyaW5nKG1hc2s6IHN0cmluZyB8IFJlZ0V4cCB8IChzdHJpbmcgfCBSZWdFeHApW10pOiBzdHJpbmcgfCBzdHJpbmdbXSB8IG51bGwge1xuXG4gICAgaWYgKGlzU3RyaW5nKG1hc2spKSB7XG5cbiAgICAgICAgcmV0dXJuIG1hc2sgYXMgc3RyaW5nO1xuXG4gICAgfSBlbHNlIGlmIChtYXNrIGluc3RhbmNlb2YgUmVnRXhwKSB7XG5cbiAgICAgICAgcmV0dXJuIG1hc2sudG9TdHJpbmcoKTtcblxuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShtYXNrKSkge1xuXG4gICAgICAgIHJldHVybiBtYXNrLm1hcCh2YWx1ZSA9PiBtYXNrVG9TdHJpbmcodmFsdWUpKSBhcyBzdHJpbmdbXTtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1hc2tGcm9tU3RyaW5nKG1hc2s6IHN0cmluZyB8IHN0cmluZ1tdKTogc3RyaW5nIHwgUmVnRXhwIHwgKHN0cmluZyB8IFJlZ0V4cClbXSB8IG51bGwge1xuXG4gICAgaWYgKGlzU3RyaW5nKG1hc2spKSB7XG5cbiAgICAgICAgY29uc3QgaXNSZWdFeHAgPSAobWFzayBhcyBzdHJpbmcpLnN0YXJ0c1dpdGgoXCIvXCIpICYmIChtYXNrIGFzIHN0cmluZykuZW5kc1dpdGgoXCIvXCIpO1xuXG4gICAgICAgIHJldHVybiBpc1JlZ0V4cCA/IG5ldyBSZWdFeHAoKG1hc2sgYXMgc3RyaW5nKS5zbGljZSgxLCBtYXNrLmxlbmd0aCAtIDEpKSA6IG1hc2s7XG5cbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkobWFzaykpIHtcblxuICAgICAgICByZXR1cm4gKG1hc2sgYXMgc3RyaW5nW10pLm1hcCh2YWx1ZSA9PiBtYXNrRnJvbVN0cmluZyh2YWx1ZSkpIGFzIHN0cmluZ1tdO1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VSZXZpdmVyKF9rZXk6IHN0cmluZywgdmFsdWU6IGFueSk6IGFueSB7XG5cbiAgICBjb25zdCByZWdleERhdGVJU08gPSAvXihcXGR7NH0pLShcXGR7Mn0pLShcXGR7Mn0pVChcXGR7Mn0pOihcXGR7Mn0pOihcXGR7Mn0oPzpcXC5cXGQqKSkoPzpafChbK1xcLV0pKFtcXGR8Ol0qKSk/JC87XG5cbiAgICByZXR1cm4gaXNTdHJpbmcodmFsdWUpICYmIHJlZ2V4RGF0ZUlTTy50ZXN0KHZhbHVlKSA/IG5ldyBEYXRlKHZhbHVlKSA6IHZhbHVlO1xufVxuIl19