import classes from "src/shared/ui/input/base-textarea/BaseTextArea.module.scss";
import {FC} from "react";
import {TextareaInterface} from "src/shared/ui/input";



export const BaseTextarea:FC<TextareaInterface> = ({value, onChange}) => {
  return (
    <textarea
        value={value}
        onChange={onChange}
        className={classes.base_textarea}>
    </textarea>
  )
}
