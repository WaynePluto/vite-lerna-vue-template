import style from './index.module.scss'
export const ExampleA = () => {
  return (
    <div class={style['example-wrap']}>
      example from lib
      <button>lib button</button>
    </div>
  )
}
