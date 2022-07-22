import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
// core components
import styles from "styles/jss/nextjs-material-kit-pro/customCheckboxRadioSwitchStyle.js";

const useStyles = makeStyles(styles);

export default function SwitchExample() {
  const [checkedA, setCheckedA] = React.useState(true);
  const [checkedB, setCheckedB] = React.useState(false);
  const classes = useStyles();
  return (
    <div>
      <div>
        <FormControlLabel
          control={
            <Switch
              checked={checkedA}
              onChange={event => setCheckedA(event.target.checked)}
              value="checkedA"
              classes={{
                switchBase: classes.switchBase,
                checked: classes.switchChecked,
                thumb: classes.switchIcon,
                track: classes.switchBar
              }}
            />
          }
          classes={{
            label: classes.label
          }}
          label="Toggle is on"
        />
      </div>
      <div>
        <FormControlLabel
          control={
            <Switch
              checked={checkedB}
              onChange={event => setCheckedB(event.target.checked)}
              value="checkedB"
              classes={{
                switchBase: classes.switchBase,
                checked: classes.switchChecked,
                thumb: classes.switchIcon,
                track: classes.switchBar
              }}
            />
          }
          classes={{
            label: classes.label
          }}
          label="Toggle is off"
        />
      </div>
    </div>
  );
}
