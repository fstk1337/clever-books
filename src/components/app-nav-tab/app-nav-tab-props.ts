export interface AppNavTabProps {
    text: string;
    icon?: string;
    active: boolean;
    type: 'link' | 'dropdown';
    view: 'main' | 'adaptive';
    route: string;
}