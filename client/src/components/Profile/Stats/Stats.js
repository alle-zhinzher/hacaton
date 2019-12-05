import React, { useState, useEffect } from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import StatsItem from './StatsItem';
import LevelBar from './LevelBar';

const Stats = (props) => {

    const getProfit = () => { return props.stat.totalWinSum - props.stat.totalLoseSum };
    const getTotalGames = () => { return props.stat.totalWinCount + props.stat.totalLoseCount };

    return (
        <Grid
            container
            direction="row"
            justify="space-evenly"
            alignItems="center"
            spacing={3}
        >
            {(props.user && props.stat) ?
                <>
                    <LevelBar level={props.user.level} exp={props.user.exp}></LevelBar>
                    <StatsItem name="Total Winnings" number={props.stat.totalWinSum}></StatsItem>
                    <StatsItem name="Games Won" number={props.stat.totalWinCount}></StatsItem>
                    <StatsItem name="Total Lost" number={props.stat.totalLoseSum}></StatsItem>
                    <StatsItem name="Games Lost" number={props.stat.totalLoseCount}></StatsItem>
                    <StatsItem name="Profit" number={getProfit()}></StatsItem>
                    <StatsItem name="Games Played" number={getTotalGames()}></StatsItem>
                </>
                : null
            }
        </Grid>
    );
}

export default Stats;