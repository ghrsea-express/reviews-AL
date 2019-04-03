module.exports = (numOfStars, maxStars = 5) => {
    let stars = [];
    let solidStarCount = 0;
    for (let i = 0; i < maxStars; i++) {
        if (solidStarCount < numOfStars) {
            stars.push('★')
            solidStarCount++
        } else {
            stars.push('☆')
        }
    }
    return stars.join('')
}




