import { colorsGroup } from "../dynamicCSS/ButtonCSSDynamic"

interface ButtonProps {
    //need to configurate tailwind to this line under work
    color?: 'green' | 'gray' | 'blue'
    className?: string
    children: any
}

export default function Button(props: ButtonProps) {
    const color = props.color ?? 'gray'
    return (
        <button className={`bg-gradient-to-r ${colorsGroup[color][0]} ${colorsGroup[color][1]}
            text-white px-4 py-2 rounded-md
            ${props.className}`}>
            {props.children}
        </button>
    )
}