import { Theme } from "@/theme/theme"

interface Props {
    id: string 
    key: string 
    name: string
}

export const CategoryItem = ({ id, key, name }: Props) => {
    return (
        <div
        style={{
            paddingLeft: 14,
            paddingRight: 14,
            paddingTop: 6,
            paddingBottom: 6,
            display: "flex",
        }}>
            <p
            style={{
                color: Theme.primary.textColorOnSurface,
                fontSize: 18,
            }}>
                { name }
            </p>
        </div>
    )
}