export declare const user: {
    name: string;
    title: string;
    type: string;
    fields: ({
        name: string;
        title: string;
        type: string;
        hidden?: undefined;
    } | {
        name: string;
        type: string;
        hidden: boolean;
        title?: undefined;
    })[];
};
export declare const account: {
    name: string;
    title: string;
    type: string;
    fields: ({
        name: string;
        type: string;
        title?: undefined;
        to?: undefined;
    } | {
        name: string;
        title: string;
        type: string;
        to: {
            type: string;
        };
    })[];
};
export declare const verificationRequest: {
    name: string;
    title: string;
    type: string;
    fields: {
        name: string;
        title: string;
        type: string;
    }[];
};
