/// <reference types="react" />
import './MyLabel.css';
export interface Props {
    /**
     * Este es el mensaje a mostrar en la etiqueta
     */
    label: string;
    /**
     * Este es el tamaño de la etiqueta
     */
    size: 'normal' | 'h1' | 'h2' | 'h3';
    /**
     * Si quiere todo capitalizado
     */
    allCaps?: boolean;
    /**
     * Colores basicos del botón
     */
    color?: 'primary' | 'secondary' | 'tertiary';
    /**
     * Colores personalizados del botón
     */
    fontColor?: string;
    /**
     * Colores personalizados del botón
     */
    backgroundColor?: string;
}
export declare const MyLabel: ({ allCaps, color, label, size, fontColor, backgroundColor }: Props) => JSX.Element;
