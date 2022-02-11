// import { colorsGroup } from "../dynamicCSS/ButtonCSSDynamic"


const colorsGroup = {
    green: ['from-green-400', 'to-green-700'],
    blue: ['from-blue-400', 'to-blue-700'],
    gray: ['from-gray-400', 'to-gray-700']
}

interface ButtonProps {
    //need to configurate tailwind to this line under work
    color?: 'green' | 'gray' | 'blue'
    className?: string
    children: any
    onClick?: () => void
}

export default function Button(props: ButtonProps) {
    const color = props.color ?? 'gray'
    return (
        <button onClick={props.onClick} className={`bg-gradient-to-r ${colorsGroup[color][0]} ${colorsGroup[color][1]}
            text-white px-4 py-2 rounded-md
            ${props.className}`}>
            {props.children}
        </button>
    )
}