import { ThumbsDownIcon, ThumbsUpIcon } from "lucide-react"
import styles from "./styles.module.css"
import type { ToastContentProps } from "react-toastify"
import { DefaultButton } from "../DefaultButton"

export function Dialog({closeToast, data}: ToastContentProps<string>) {
  return (
    <>
      <div className={styles.container}>
        <p>{data}</p>

        <div className={styles.buttonsContainer}>
          <DefaultButton 
            onClick={()=> closeToast(true)}
            icon={<ThumbsUpIcon/>}
            aria-label="Confirmar Ação"
            title="Confirmar Ação"
          />

          <DefaultButton 
            onClick={()=> closeToast(false)}
            icon={<ThumbsDownIcon/>}
            color="red"
            aria-label="Cancelar Ação"
            title="Cancelar Ação"
          />
        </div>
 
      </div>
    </>
  )
}