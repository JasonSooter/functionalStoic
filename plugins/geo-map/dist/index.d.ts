declare const mapViewRegistration: {
    id: string;
    name: string;
    icon: string;
    render: (props: unknown) => unknown;
    css: string;
    afterDOMLoaded: string;
};

export { mapViewRegistration };
