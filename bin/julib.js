#!/usr/bin/env node

'use strict'


// build in format
// --format         browser, npm, cjs, amd
// -f           

// build with selected modules
// --include        all, add, isNumber, isObj, ...
// -i

// build with not selected modules
// --not    add, isNumber, isObj, ...
// -n

// build with utility categories
// --category       math, util, ...
// -c           

// build with mode
// --mode           production, development
// -m

// build in a given path/filename
// --output         dist/julib.js
// -o

const argv = process.argv.slice(2)
const parse = require('minimist')
const options = {
    alias : {
        'f' : 'format',
        'i' : 'include',
        'n': 'not',
        'c': 'category',
        'm': 'mode',
        'o': 'output'
    },
    default : {
        'format': 'npm',
        'include': 'all',
        'mode': 'production',
        'o': 'dist/julib.js'
    },
    string : [
        'format',
        'include',
        'not',
        'category',
        'mode',
        'output'
    ]
}



const build = (args) => {
    console.log(args);
}

build(parse(argv, options))