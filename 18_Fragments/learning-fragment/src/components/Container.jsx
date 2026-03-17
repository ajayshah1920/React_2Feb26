import styles from './Container.module.css'

let Container = (props) =>{
    return <div class={styles.container}>{props.children}</div>
}

export default Container;