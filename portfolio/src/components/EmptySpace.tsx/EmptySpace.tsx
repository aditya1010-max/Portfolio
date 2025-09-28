type EmptySpaceProps = {
    height: number | string;
}

export default function EmptySpace({ height }: EmptySpaceProps) {
    return (
        <div style={{ height: height }}></div>
    );
}