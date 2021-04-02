import A from './A'
import HocFunc from '../../utils/HocFun'
class B extends A {
  constructor() {
    super()
  }
  getName() {
    this.name = 'wjh'
    HocFunc(this.handlerTest, true)
    return this.name
  }
  handlerTest() {
    console.log('just test hoc')
  }
  render() {
    return <div>{this.getName() + '--' + this.getAge()}</div>
  }
}

export default B
