/* 
 * a card deck
 */
Deck = function () {
    this.list = []
    this.color = ['s', 'h', 'd', 'c']
    this.index = ['a', 'k', 'q', 'j', '10', '9', '8', '7', '6', '5', '4', '3', '2']
    for (var c = 0; c < 4; c++) {
        for (var k in this.index) {
            this.list.push(this.color[c] + '_' + this.index[k])
        }
    }
    this.list.push('jk_r')
    this.list.push('jk_b')

    this.shuffleIteration = 100000
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
    return this.list.slice(0, n).sort()
}

Deck.prototype.getRandomIdx = function () {
    return Math.floor(Math.random() * this.list.length)
}

Deck.prototype.jokerCount = function (hand) {
    var jc = 0
    for (var idx in hand) {
        if ((hand[idx] === 'jk_r') || (hand[idx] === 'jk_b')) {
            jc++
        }
    }

    return jc
}

Deck.prototype.hasFlush = function (hand) {
    var colorCount = [0, 0, 0, 0]
    for (var idx in hand) {
        var idx = this.color.indexOf(hand[idx][0])
        if (-1 !== idx) {
            colorCount[idx]++
        }
    }

    var maxi = colorCount.sort()[colorCount.length - 1]
    var jc = this.jokerCount(hand)

    return ((maxi + jc) >= 5)
}

Deck.prototype.kindCount = function (hand) {
    var counter = []
    for (var k in this.index) {
        counter.push(0)
    }

    for (var idx in hand) {
        var idx = this.index.indexOf(hand[idx].substr(2))
        if (-1 !== idx) {
            counter[idx]++
        }
    }

    var maxi = counter.sort()[counter.length - 1]
    var jc = this.jokerCount(hand)

    return maxi + jc
}
