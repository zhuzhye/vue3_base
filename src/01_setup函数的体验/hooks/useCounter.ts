import { ref } from 'vue'

export default function useCounter() {
  //1.定义counter的内容
  const counter = ref<number>(100)
  //默认定义的数据度不是响应式
  const increment = () => {
    counter.value++
    console.log(counter.value)
  }
  const decrement = () => {
    counter.value--
    console.log(counter)
  }
  return {
    counter,
    increment,
    decrement
  }
}
