
export const loadDb = async () => {
    const result = await fetch('db.json')

    const dbObj = await result.json()
    console.log('dbObj: ', dbObj);

    return {dbObj}

}
