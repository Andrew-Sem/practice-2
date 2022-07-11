export const findBiggestObjByFieldLength = (
    data: Array<object>,
    field: any
):typeof field => {
    //@ts-ignore
    return (data.reduce((acc, curr) => acc[field].length > curr[field].length ? acc : curr))
}