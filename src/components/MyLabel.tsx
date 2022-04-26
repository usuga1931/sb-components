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
}

export const MyLabel = ({
    allCaps = false,
    color = 'primary',
    label = 'No Label',
    size = "normal",
    fontColor
}: Props) => {
    return (
        <span
            className={`label ${size} text-${color}`}
            style={{ color: fontColor }}
        >
            {allCaps ? label.toUpperCase() : label}
        </span>
    )
}
