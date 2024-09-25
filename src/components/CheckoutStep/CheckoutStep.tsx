
interface Props {
    checked: boolean
    step: number
    title: string
}

export const CheckoutStep = ({ checked, step, title }: Props ) => {
    return (
        <div
        style={{
            minWidth: 80,
            height: 90,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            opacity: !checked ? 0.3 : 1,
            // backgroundColor: "green"
        }}>
            <div
            style={{
                width: 60,
                height: 60,
                borderRadius: 30,
                border: "3px solid #ffffff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}>
                <p
                style={{
                    color: "#ffffff",
                    fontSize: 30,
                }}>{ step }</p>
            </div>

            <h2
            style={{
                color: "#ffffff",
                fontSize: 14,
                textTransform: "uppercase",
                fontWeight: "400",
            }}>{ title }</h2>
        </div>
    )
}