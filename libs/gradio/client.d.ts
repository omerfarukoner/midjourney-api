import { hardware_types } from "./utils";
import type { EventType, EventListener, PostResponse, UploadResponse, SpaceStatusCallback } from "./types";
import type { Config } from "./types";
type event = <K extends EventType>(eventType: K, listener: EventListener<K>) => SubmitReturn;
type predict = (endpoint: string | number, data?: unknown[], event_data?: unknown) => Promise<unknown>;
type client_return = {
    predict: predict;
    config: Config;
    submit: (endpoint: string | number, data?: unknown[], event_data?: unknown) => SubmitReturn;
    view_api: (c?: Config) => Promise<ApiInfo<JsApiData>>;
};
type SubmitReturn = {
    on: event;
    off: event;
    cancel: () => Promise<void>;
    destroy: () => void;
};
export declare let NodeBlob: Blob;
export declare function duplicate(app_reference: string, options: {
    hf_token: `hf_${string}`;
    private?: boolean;
    status_callback: SpaceStatusCallback;
    hardware?: (typeof hardware_types)[number];
    timeout?: number;
}): Promise<client_return>;
/**
 * We need to inject a customized fetch implementation for the Wasm version.
 */
export declare function api_factory(fetch_implementation: typeof fetch): {
    post_data: (url: string, body: unknown, token?: `hf_${string}`) => Promise<[PostResponse, number]>;
    upload_files: (root: string, files: Array<File | Blob>, token?: `hf_${string}`) => Promise<UploadResponse>;
    client: (app_reference: string, options?: {
        hf_token?: `hf_${string}`;
        status_callback?: SpaceStatusCallback;
        normalise_files?: boolean;
    }) => Promise<client_return>;
    handle_blob: (endpoint: string, data: unknown[], api_info: any, token?: `hf_${string}`) => Promise<unknown[]>;
};
export declare const post_data: (url: string, body: unknown, token?: `hf_${string}`) => Promise<[PostResponse, number]>, upload_files: (root: string, files: Array<File | Blob>, token?: `hf_${string}`) => Promise<UploadResponse>, client: (app_reference: string, options?: {
    hf_token?: `hf_${string}`;
    status_callback?: SpaceStatusCallback;
    normalise_files?: boolean;
}) => Promise<client_return>, handle_blob: (endpoint: string, data: unknown[], api_info: any, token?: `hf_${string}`) => Promise<unknown[]>;
interface ApiData {
    label: string;
    type: {
        type: any;
        description: string;
    };
    component: string;
    example_input?: any;
}
interface JsApiData {
    label: string;
    type: string;
    component: string;
    example_input: any;
}
interface EndpointInfo<T extends ApiData | JsApiData> {
    parameters: T[];
    returns: T[];
}
interface ApiInfo<T extends ApiData | JsApiData> {
    named_endpoints: {
        [key: string]: EndpointInfo<T>;
    };
    unnamed_endpoints: {
        [key: string]: EndpointInfo<T>;
    };
}
export declare function walk_and_store_blobs(param: any, type?: undefined, path?: any[], root?: boolean, api_info?: any): Promise<any[]>;
export {};
