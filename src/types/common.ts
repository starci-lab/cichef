export interface WithClassNames<ClassNames extends Record<string, string> = Record<string, string>> {
    // if className is provided, it will be used to style the component
    className?: string
    // if classNames is provided, it will be used to style the elements inside the component
    classNames?: Partial<ClassNames>
}