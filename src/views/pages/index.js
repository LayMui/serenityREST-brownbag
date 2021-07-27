import SerenityREST_P1 from './serenityRest_p1.vue'
import SerenityREST_P2 from './serenityRest_p2.vue'
import SerenityREST_P3 from './serenityRest_p3.vue'
import SerenityREST_P4 from './serenityRest_p4.vue'
import SerenityREST_P5 from './serenityRest_p5.vue'
import SerenityREST_P6 from './serenityRest_p6.vue'
import SerenityREST_P7 from './serenityRest_p7.vue'
import SerenityREST_P8 from './serenityRest_p8.vue'

const pages = [
  {
    name: 'SerenityRest_1',
    meta: {
      title: 'What is SerenityREST'
    },
    component: SerenityREST_P1
  },
  {
    name: 'SerenityRest_2',
    meta: {
      title: 'POST, GET, DELETE, UPDATE'
    },
    component: SerenityREST_P2
  },
  {
    name: 'SerenityRest_3',
    meta: {
      title: 'BDD Gherkins for API Testing'
    },
    component: SerenityREST_P3
  },
  {
    name: 'SerenityRest_4',
    meta: {
      title: 'Sleeping is not your best friend'
    },
    component: SerenityREST_P4
  },
  {
    name: 'SerenityRest_5',
    meta: {
      title: 'Thread.sleep is not desirable'
    },
    component: SerenityREST_P5
  },
  {
    name: 'SerenityRest_6',
    meta: {
      title: 'Why we need to use sleep?'
    },
    component: SerenityREST_P6
  },
  {
    name: 'SerenityRest_7',
    meta: {
      title: 'What SerenityBDD provides?'
    },
    component: SerenityREST_P7
  },
  {
    name: 'SerenityRest_8',
    meta: {
      title: 'Awaitility'
    },
    component: SerenityREST_P8
  },
  
]

pages.forEach((page, index) => page.path = `${index + 1}`)

export default pages