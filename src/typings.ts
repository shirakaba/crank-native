import type { Children, Key } from "@bikeshaving/crank/cjs";
import type { Observable } from "@nativescript/core";

export interface RefObject<T extends Observable = Observable> {
    readonly current: T | null;
}
export interface MutableRefObject<T extends Observable = Observable> {
    current: T;
}

/**
 * Based on the "Props" interface in Crank Native, but removing the index type.
 */
export interface NativeScriptAttributes<T extends Observable = Observable> {
    /* I'm not sure whether MutableRefObject is more or less appropriate than RefObject here. */
    ref?: MutableRefObject<T>;
    "crank-key"?: Key;
    children?: Children;
}
export type NativeScriptProps<P, T extends Observable = Observable> = NativeScriptAttributes<T> & P;
// export type PropsWithChildren<P> = P & { children?: Children };