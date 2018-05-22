declare module "*.vue" {
    import Vue from "vue";
    export default Vue;
}

declare module '*.scss' {
    const content: any;
    export default content;
}

declare module 'element-ui/*' {
    const content: any;
    export default content;
}