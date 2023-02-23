import { MouseEventHandler, ReactElement } from 'react';

export interface AppToggleViewButtonProps {
    active: boolean;
    dataTestId: string;
    clickHandler: MouseEventHandler<HTMLButtonElement>;
    children: ReactElement;
}