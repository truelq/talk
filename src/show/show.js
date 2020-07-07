import { makeStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root:{
        display:'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign:'center',
    },
    tablecontainer:{
        height:'100%',
        maxWidth:'60%',
        display:'flex',
    },
    table: {
        minWidth: 650,
    },
    tablehead:{
    },
}));
