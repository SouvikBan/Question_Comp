import Vue from 'vue'
import Question from './Question.vue'

export default {
    install(Vue, options) {
        Vue.component('question-answer', Question)
    }
}