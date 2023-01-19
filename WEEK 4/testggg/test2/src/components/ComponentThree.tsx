type CompThreeProps = {
    children: React.ReactNode;
}

export default function CompThree(props: CompThreeProps) {
    return (
        <div>
            {props.children}
        </div>
    )
}
