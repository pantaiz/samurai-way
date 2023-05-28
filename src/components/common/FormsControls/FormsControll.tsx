import styles from './FormsControls.module.css'
type TextareaPropsType = {}

export const Textarea = ({input,meta,...props}: any) => {
    const hasError=meta.touched&&meta.error
    console.log(input)
    console.log( props.type)
    return (
        <div className={styles.wrapper}>
            {props.type==='textarea'
                ? <textarea {...input}{...props} className={styles.formControll+' '+(hasError?styles.error:'') } />

                : <input {...input}{...props} className={styles.formControll+' '+(hasError?styles.error:'') } />
            }

            {hasError&&<span className={styles.textError}>{meta.error}</span>}
        </div>


    )
}
export const CustomInput = ({input,meta,...props}: any) => {
    const hasError=meta.touched&&meta.error

    return (
        <div className={styles.wrapper}>
            <input {...input}{...props} className={styles.formControll+' '+(hasError?styles.error:'') } />
            {hasError&&<span className={styles.textError}>{meta.error}</span>}
        </div>


    )
}