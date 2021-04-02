export interface Card {
    name: string,
    rarity: string,
    type: string,
    const: number,
    set: object,
    collectible: boolean,
    text: string,
    attributes: Array<string>,
    unique: boolean,
    imageUrl: string,
    id: string
}
