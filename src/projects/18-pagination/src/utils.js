const paginate = (followers) => {
    const itemPerPage = 12 ;
    const pages = Math.ceil( followers.length / itemPerPage ) 
    
    const newFollowers = Array.from({length: pages}, ( _ , i )=>{
        const start = i * itemPerPage
        return followers.slice(start, start + itemPerPage)
    })

    return newFollowers
}

export default paginate
