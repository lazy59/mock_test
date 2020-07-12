const Mock = require('mockjs')
const Random = Mock.Random

const students = Mock.mock({
    "data|100": [{
        'id|+1': 1,
        'name': () => Random.cname(),
        'age|20-30':25,
        'brith': () => Random.date('yyyy-MM-dd'),
        'city': () => Random.city(),
        'article': () => Random.cparagraph()
    }]
})

const children = Mock.mock({
    "data|10-20": [{
        'id|+1': 200,
        'name': () => Random.cname(),
        'age|1':[20,30,40],
        'brith': () => Random.date('yyyy年MM月dd日'),
        'city': () => Random.city(),
        'article': () => Random.cparagraph(),
        'isChild': () => Random.boolean(1, 4, true)
    }]
})

// console.log(students)

module.exports = () => {
    return {
        students: students.data,
        children: children.data
    }
}