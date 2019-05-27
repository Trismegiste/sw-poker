/* 
 * a card deck
 */
Deck = function () {
    this.list = []
    this.color = ['c', 'd', 'h', 's']
    for (var c = 0; c < 4; c++) {
        var current = this.color[c]
        for (var k = 2; k <= 10; k++) {
            this.list.push(current + '_' + k)
        }
        this.list.push(current + '_j')
        this.list.push(current + '_q')
        this.list.push(current + '_k')
        this.list.push(current + '_a')
    }
    this.list.push('jk_r')
    this.list.push('jk_b')

    this.shuffleIteration = 10000
}

Deck.prototype.shuffle = function () {
    for (var k = 0; k < this.shuffleIteration; k++) {
        var swap1 = this.getRandomIdx()
        var swap2 = this.getRandomIdx()
        var tmp = this.list[swap1]
        this.list[swap1] = this.list[swap2]
        this.list[swap2] = tmp
    }
}

Deck.prototype.draw = function (n) {
    return this.list.slice(0, n)
}

Deck.prototype.getRandomIdx = function () {
    return Math.floor(Math.random() * this.list.length)
}