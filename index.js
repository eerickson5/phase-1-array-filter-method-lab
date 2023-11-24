// Code your solution here
findMatching = (drivers, name) => { 
    return(drivers.filter( driver => driver.toLowerCase() === name.toLowerCase()))
}

fuzzyMatch = (drivers, name) => {
    return drivers.filter( driver => driver.toLowerCase().indexOf(name.toLowerCase()) === 0)
}

matchName = (drivers, name) => {
    return drivers.filter( driver => driver.name.toLowerCase() === name.toLowerCase())
}