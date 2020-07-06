import React from 'react';
//https://material-ui.com/zh/ 
import { Button, Paper, TextField, Typography } from '@material-ui/core';

import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
//
import { fade } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
//card
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
//list
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
//color
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { purple } from '@material-ui/core/colors';

import { useStyles } from './login';

function PredauthClick(){
    return alert('clicked');
}

//主函数首字母要大写，不然后面的useStyles等都报错，所以说之前没报错是因为App的A？
export const Loginpage = () => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const Carditem = (
        <div>
            <Card className={classes.cardroot}>
                <CardActionArea className={classes.cardroot}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            前端入门到放弃
                </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            ……零基础怎么学web前端?下面就跟着小编一起来看看吧! 想学好web前端，该从哪里入手学习呢?零基础学习web前端学习路线图从哪里可以找到呢?这里为大家整理完整的零基础 前端学习路线分享给大家。……
                </Typography>
                        <Typography variant="body3" color="textSecondary" component="h6">
                            机器人小编  分享:300  点赞:1
                </Typography>
                    </CardContent>
                </CardActionArea>
                <CardMedia className={classes.cardmedia}>
                    <img src={require('./first.jpg')} alt="" />
                </CardMedia>

            </Card>
        </div>
    );
    return (
        <div className={classes.grow}>
            <AppBar position="static">
                <Toolbar>
                    <Button color="inherit" size="large"> 繁书</Button>
                    <div className={classes.grow} />

                    <Button color="inherit" size="large"> 首页</Button>
                    <Button color="inherit" size="large"> 下载APP</Button>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="搜索"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>
                    <div className={classes.grow} />
                    <Button color="inherit" size="large"> 登录</Button>
                    <Button onClick={PredauthClick} variant="contained" color="primary" size="small"> PREDAUTH登录</Button>
                    <Button color="inherit" size="large"> 注册</Button>
                    <Button color="inherit" size="large"> 写文章</Button>
                </Toolbar>
            </AppBar>

            <div className={classes.listroot}>

                <List component="nav" aria-label="secondary mailbox folders">
                    <ListItem ListItemText>
                        {Carditem}
                    </ListItem>

                    <ListItem ListItemText>
                        {Carditem}
                    </ListItem>
                </List>
            </div>
        </div>
    );

};
