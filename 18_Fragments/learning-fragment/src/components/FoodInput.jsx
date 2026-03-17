import styles from './FoodInput.module.css'

const FoodInput=({ onChangeHandle, onKeyDownHandle })=>{
//const FoodInput=({ onClickHandle, onChangeHandle })=>{
    // const handleOnChange =(event)=>{
    //     console.log(`Value entered: ${event.target.value}`);
    // }

    // const onClickHandle =()=>{
    //     alert();
    // }

    return (
        <>
            {/* <input type="text" placeholder='Enter here Food Item' className={styles.foodInput}
                onChange={(event)=> onChangeHandle(event)} /> */}
            <input type="text" placeholder='Enter here Food Item' className={styles.foodInput}
                onKeyDown={(event)=> onKeyDownHandle(event)} onChange={(event)=> onChangeHandle(event)} />
            {/* <input type='button' className={`${styles.button} btn btn-info`} onClick={ onClickHandle } value='Add'/> */}
        </>
    )
}

export default FoodInput;