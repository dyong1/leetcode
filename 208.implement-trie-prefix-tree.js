/*
 * @lc app=leetcode id=208 lang=javascript
 *
 * [208] Implement Trie (Prefix Tree)
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
var Trie = function() {
    this.root = {
        children: {},
        terminated: false,
    }
};

/**
 * Inserts a word into the trie.
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let curNode = this.root
    for(let i=0; i < word.length; i++) {
        let ch = word[i]
        if(!curNode.children[ch]) {
            curNode.children[ch] = {
                children: {},
                terminated: (i === word.length - 1),
            }
        } else {
            if(i === word.length - 1) {
                curNode.children[ch].terminated = true
            }
        }
        curNode = curNode.children[ch]
    }
};

/**
 * Returns if the word is in the trie.
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let curNode = this.root
    for(let i=0; i < word.length; i++) {
        let ch = word[i]
        if(!curNode.children[ch]) {
            return false
        }
        curNode = curNode.children[ch]
    }
    return curNode.terminated
};

/**
 * Returns if there is any word in the trie that starts with the given prefix.
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let curNode = this.root
    for(let i=0; i < prefix.length; i++) {
        let ch = prefix[i]
        if(!curNode.children[ch]) {
            return false
        }
        curNode = curNode.children[ch]
    }
    return true
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
// @lc code=end

